import React, { useState } from 'react'
import axios from 'axios'

const DynamicCreatForm = ({
  fields,
  defaultValues = {},
  endpoint,
  modelName,
  repair_name,
  version,
}) => {
  console.log('DynamicCreatForm', version)
  const [formData, setFormData] = useState(() => {
    const initialData = {}
    fields.forEach((field) => {
      initialData[field.name] = field.value || defaultValues[field.name] || ''
    })
    initialData['model'] = modelName
    initialData['repair_name'] = repair_name
    initialData['version'] = version
    return initialData
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(`Changed field: ${name}, Value: ${value}`) // 调试输出

    // 如果字段是 repairnamew，则将值转换为大写
    const newValue = name === 'repair_name' ? value.toUpperCase() : value
    setFormData({ ...formData, [name]: newValue })
  }

  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Data uploaded successfully:', formData)

    try {
      const response = await axios.post(endpoint, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('Data uploaded successfully:', response.data)
      setError('')
      // 更新 UI 而不是刷新页面
      window.location.reload()
    } catch (error) {
      console.error('There was an error uploading the data!', error)
      setError('There was an error uploading the data. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className='form-group'>
          <label htmlFor={field.name}>{field.placeholder || field.name}</label>
          <input
            id={field.name}
            type={field.type || 'text'}
            name={field.name} // 确保 name 属性正确
            value={formData[field.name] || ''}
            onChange={handleChange}
            placeholder={field.placeholder || field.name}
            className='form-control'
          />
        </div>
      ))}
      <button className='btn btn-primary' type='submit'>
        創建表單
      </button>
      {error && <p className='text-danger'>{error}</p>}
    </form>
  )
}

export default DynamicCreatForm
