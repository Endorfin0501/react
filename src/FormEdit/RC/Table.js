import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Table } from 'react-bootstrap'
import { packge, items, fill, revi } from '../../Components/RC/Table_Data'
import { URL } from '../../url'
import { useLocation } from 'react-router-dom'

const fieldMapping = {
  repair_name: '機號',
  voltage: '電壓',
  hertz: '赫茲',
  prepaid_date: '預交日期',
  high_pressure: '高壓',
  pre_blow: '預吹',
  recycle: '回收',
  cycle: '循環',
  serial_num: '輸送銘牌機序號',
  order_num: '製令單號',
  factory_order: '廠訂',
  ship_date: '出貨日期',
  country: '客戶名稱',
  // 对于不需要循环的单独字段
}

const modelname = (model) => {
  switch (model) {
    case 'L機':
      return 'LResumeCover'
    case '鳳凰':
      return 'PResumeCover'
    case '一段式':
      return 'OResumeCover'
    default:
      return '' // 处理不匹配的情况
  }
}

function RCEdit({ selectedData, onClose, formType }) {
  const [formData, setFormData] = useState(selectedData)
  const location = useLocation()
  const state = location.state
  const model = state?.model

  useEffect(() => {
    setFormData(selectedData)
  }, [selectedData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleArrayChange = (e, index, fieldName) => {
    const newValues = [...formData[fieldName]]
    newValues[index] = e.target.value
    setFormData({ ...formData, [fieldName]: newValues })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // 根据实际模型和序列化器名称调整
      const payload = {
        ...formData,
        models: modelname(model), // 填入模型名称
        serializer: `${modelname(model)}Serializer`, // 填入序列化器名称
      }

      // console.log(payload)
      // 根据 API 端点的实际方法（POST/PUT）调整
      const response = await fetch(`${URL}/api/update2/${formData.id}/`, {
        method: 'POST', // 或者 'POST'，取决于 API 的要求
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const result = await response.json()
      console.log('Submission successful:', result)
      window.location.reload()
      onClose() // 处理成功逻辑，比如关闭模态框或者显示通知
    } catch (error) {
      console.error('Submission error:', error)
      // 处理错误逻辑，比如显示错误消息
      alert('Submission failed. Please try again.')
    }
  }

  let people = localStorage.getItem('username') // 這裡可以改成動態選項

  try {
    people = JSON.parse(people) // 嘗試解析 JSON
  } catch (error) {
    // 如果解析失敗，說明它是單一字串，不是 JSON
    people = people ? [people] : [] // 轉為陣列
  }

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>編輯數據</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* 根据 formType 显示不同的表单内容 */}
          {formType === 1 && (
            <>
              <Form.Group controlId='package_person' key='package_person'>
                <Form.Label>組裝人員</Form.Label>
                <Form.Control
                  as='select'
                  name='package_person'
                  value={formData.package_person || ''}
                  onChange={handleChange}
                >
                  <option value='1'>外包(林裕忠、吳坤池)</option>
                  <option value='2'>製造1組</option>
                  <option value='3'>製造2組</option>
                  <option value='4'>製造3組</option>
                  <option value='5'>專案人員、開發人員</option>
                </Form.Control>
              </Form.Group>
              {Object.keys(fieldMapping).map((key) => (
                <Form.Group controlId={key} key={key}>
                  <Form.Label>{fieldMapping[key]}</Form.Label>
                  <Form.Control
                    type='text'
                    name={key}
                    value={formData[key] || ''}
                    onChange={handleChange}
                  />
                </Form.Group>
              ))}
            </>
          )}
          {formType === 2 && (
            <div
              style={{
                width: '100%',
                display: 'flex',
                overflowX: 'auto',
                textAlign: 'left',
              }}
            >
              <Table style={{ width: '100%', minWidth: '1200px' }}>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>預計日期</th>
                    <th>完成日期</th>
                    <th>填寫人員</th>
                    <th>覆核人員</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 11 }).map((_, index) => (
                    <tr key={index}>
                      <td>{items[index]}</td>
                      <td>
                        <Form.Control
                          type='date'
                          name={`estimated_date_${index}`}
                          value={formData.estimated_date[index] || ''}
                          onChange={(e) =>
                            handleArrayChange(e, index, 'estimated_date')
                          }
                        />
                      </td>
                      <td>
                        <Form.Control
                          type='date'
                          name={`completion_date_${index}`}
                          value={formData.completion_date[index] || ''}
                          onChange={(e) =>
                            handleArrayChange(e, index, 'completion_date')
                          }
                        />
                      </td>
                      <td>
                        {fill[index]}:
                        <Form.Control
                          as='select' // 修正這裡，指定為 `select`
                          name={`fill_person_${index}`}
                          value={formData.fill_person[index] || ''}
                          onChange={(e) =>
                            handleArrayChange(e, index, 'fill_person')
                          }
                        >
                          <option value=''>請選擇</option>
                          {people.map((person, idx) => (
                            <option key={idx} value={person}>
                              {person}
                            </option>
                          ))}
                        </Form.Control>
                      </td>
                      <td>
                        {revi[index]}:
                        <Form.Control
                          as='select' // 修正這裡，指定為 `select`
                          name={`reviewer_${index}`}
                          value={formData.reviewer[index] || ''}
                          onChange={(e) =>
                            handleArrayChange(e, index, 'reviewer')
                          }
                        >
                          <option value=''>請選擇</option>
                          {people.map((person, idx) => (
                            <option key={idx} value={person}>
                              {person}
                            </option>
                          ))}
                        </Form.Control>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}

          <Button variant='primary' type='submit'>
            提交
          </Button>
          <Button variant='secondary' onClick={onClose}>
            關閉
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default RCEdit
