import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { URL } from '../../url'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const modelname = (model) => {
  switch (model) {
    case 'L機':
      return 'LCommissioningCompletes'
    case '鳳凰':
      return 'PCommissioningCompletes'
    case '一段式':
      return 'OCommissioningCompletes'
    default:
      return '' // 处理不匹配的情况
  }
}

function Table1({ initialData, onSave, onCancel }) {
  const [formData, setFormData] = useState(initialData)
  const location = useLocation()
  const { state } = location
  const model = state?.model
  const repair_name = state?.repairName

  useEffect(() => {
    // 從 localStorage 取得 'username'，假設是 JSON 格式
    let people = localStorage.getItem('username') // 這裡可以改成動態選項

    try {
      people = JSON.parse(people) // 嘗試解析 JSON
    } catch (error) {
      // 如果解析失敗，說明它是單一字串，不是 JSON
      people = people ? [people] : [] // 轉為陣列
    }

    // 更新 `fill_person` 欄位的選項
    setFields((prevFields) => {
      return prevFields.map((field) => {
        if (field.name === 'dep_head') {
          return { ...field, options: people } // 更新選項
        }
        return field
      })
    })
  }, []) // 頁面載入時執行一次

  // 在这里定义特定字段及其属性
  const [fields, setFields] = useState([
    { name: 'ship_day', type: 'date', placeholder: '出貨日期' },
    { name: 'country', type: 'text', placeholder: '客戶名稱' },
    { name: 'judge', type: 'text', placeholder: '判定(pass/fail)' },
    { name: 'dep_head', type: 'select', placeholder: '部門主管', options: [] },
  ])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === 'judge' ? value.toLowerCase() : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData || !formData.id) {
      console.error('No ID found in formData:', formData)
      return
    }

    try {
      // 在提交前检查 locks 状态
      const response = await axios.get(
        `${URL}/check-locks/${encodeURIComponent(
          repair_name
        )}/${encodeURIComponent(modelname(model))}`
      )
      const isLocked = response.data.locks

      if (isLocked) {
        alert('無法進行操作，此表單已在電腦版被鎖定！請連絡相關人員進行解除')
        return
      }

      // 在请求体中包括模型名称和序列化器名称
      const payload = {
        ...formData,
        models: `${modelname(model)}`, // 这里填入模型名称
        serializer: `${modelname(model)}Serializer`, // 这里填入序列化器名称
        version: formData.version
          ? Number.isInteger(formData.version)
            ? `${formData.version}.0`
            : formData.version
          : '1.0', // 如果未定义，默认值为 "0.0"
      }
      console.log(payload)

      const updateResponse = await fetch(`${URL}/api/update2/${formData.id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (updateResponse.ok) {
        const updatedData = await updateResponse.json()
        onSave(updatedData) // 调用父组件的 onSave 回调
        onCancel() // 关闭模态框
        window.location.reload()
      } else {
        console.error('Error updating item:', await updateResponse.text())
      }
    } catch (error) {
      console.error('Error in handleEditSubmit:', error)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Form.Group controlId={field.name} key={field.name}>
          <Form.Label>{field.placeholder}</Form.Label>

          {field.type === 'select' ? (
            <Form.Control
              as='select' // 讓 Bootstrap 渲染為 <select>
              name={field.name}
              value={formData?.[field.name] || ''}
              onChange={handleChange}
            >
              <option value=''>請選擇</option>
              {field.options?.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </Form.Control>
          ) : (
            <Form.Control
              type={field.type || 'text'} // 預設類型為 text
              name={field.name}
              value={formData?.[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
            />
          )}
        </Form.Group>
      ))}

      <Button variant='primary' type='submit'>
        保存
      </Button>
    </Form>
  )
}

export default Table1
