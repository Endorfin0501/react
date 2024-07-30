import React, { useState } from 'react'
import axios from 'axios'
import { URL } from '../url'

const DynamicInsertForm = ({ fields, repairName, modelName }) => {
  const [formData, setFormData] = useState(() => {
    const initialData = {}
    fields.forEach((field) => {
      initialData[field.name] = ''
    })
    initialData['repair_name'] = repairName || ''
    initialData['model'] = modelName
    initialData['tag'] = 0 // 确保 tag 有一个默认值
    return initialData
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 清除之前的错误信息
    setError('')

    // 验证所有字段是否都有值
    for (const field of fields) {
      if (!formData[field.name].trim()) {
        setError(
          `The field "${field.placeholder || field.name}" cannot be empty.`
        )
        return
      }
    }

    // 检查 repair_name 是否为空
    if (!formData.repair_name.trim()) {
      setError('Repair name cannot be empty.')
      return
    }

    // 确保 tag 是一个数字
    const tag = parseInt(formData.tag, 10) || 0
    const repairName = formData.repair_name.trim()
    const uploadUrl = `${URL}/insert/${encodeURIComponent(repairName)}/`

    // 准备提交的数据
    const dataToSubmit = { ...formData, tag: tag + 1, model: modelName }

    // 如果 order_num 为空，则删除该字段
    if (!dataToSubmit.order_num) {
      delete dataToSubmit.order_num
    }

    // 调试输出
    console.log('Upload URL:', uploadUrl)
    console.log('Form Data:', dataToSubmit)

    try {
      // 发起 PUT 请求上传数据
      const response = await axios.put(uploadUrl, dataToSubmit, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('Data uploaded successfully:', response.data)
      // 成功后刷新页面
      window.location.reload()
    } catch (error) {
      console.error('There was an error uploading the data!', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.placeholder || field.name}</label>
          <input
            type={field.type || 'text'}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            placeholder={field.placeholder || field.name}
            id={field.name}
          />
        </div>
      ))}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button className={'btn btn-primary'} type='submit'>
        增新
      </button>
    </form>
  )
}

export default DynamicInsertForm
