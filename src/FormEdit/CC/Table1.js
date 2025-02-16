import React, { useState } from 'react'
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

  // 在这里定义特定字段及其属性
  const fields = [
    { name: 'selfinspection_day', type: 'date', placeholder: '機械自檢日' },
    { name: 'missing_day', type: 'date', placeholder: '缺失確認日期' },
    { name: 'finalinspection_day', type: 'date', placeholder: '品保終檢日' },
    { name: 'number_5s_day', type: 'date', placeholder: '5S確認日期' },
    { name: 'dep_head', type: 'text', placeholder: '部門主管' },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
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
      }

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
          <Form.Control
            type={field.type || 'text'} // 默认为 'text' 类型
            name={field.name} // 使用字段的实际名称作为 name
            value={formData?.[field.name] || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
          />
        </Form.Group>
      ))}

      <Button variant='primary' type='submit'>
        保存
      </Button>
    </Form>
  )
}

export default Table1
