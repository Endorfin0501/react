import React from 'react'
import { Form } from 'react-bootstrap'

const DynamicCreatForm = ({ fields, formData, onChange }) => {
  console.log('Fields:', fields)
  console.log('FormData:', formData)

  return (
    <Form>
      {fields.map((field) => {
        const { name, displayName = name, type = 'text', placeholder } = field
        const value = formData[name]

        if (type === 'array') {
          return Array.isArray(value)
            ? value.map((item, index) => (
                <React.Fragment key={`${name}[${index}]`}>
                  <Form.Group controlId={`form${name}[${index}]`}>
                    <Form.Label>{`${placeholder}[${index}]`}</Form.Label>
                    <Form.Control
                      type='text'
                      name={`${name}[${index}]`}
                      value={item || ''}
                      onChange={(e) => onChange(e, name, index)}
                    />
                  </Form.Group>
                  <input type='hidden' name={`index[${index}]`} value={index} />
                </React.Fragment>
              ))
            : null
        }

        if (type === 'select') {
          let people = localStorage.getItem('username') // 這裡可以改成動態選項

          try {
            people = JSON.parse(people) // 嘗試解析 JSON
          } catch (error) {
            // 如果解析失敗，說明它是單一字串，不是 JSON
            people = people ? [people] : [] // 轉為陣列
          }

          return (
            <Form.Group controlId={`form${name}`} key={name}>
              <Form.Label>{placeholder}</Form.Label>
              <Form.Control
                as='select'
                name={name}
                value={value || ''}
                onChange={(e) => onChange(e)}
              >
                <option value=''>請選擇</option>
                {people.map((person, idx) => (
                  <option key={idx} value={person}>
                    {person}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          )
        }

        // OK / NG 下拉選單
        if (type === 'okng') {
          return (
            <Form.Group controlId={`form${name}`} key={name}>
              <Form.Label>{placeholder}</Form.Label>
              <Form.Control
                as='select'
                name={name}
                value={value || ''}
                onChange={(e) => onChange(e)}
              >
                <option value=''>請選擇</option>
                <option value='OK'>OK</option>
                <option value='NG'>NG</option>
              </Form.Control>
            </Form.Group>
          )
        }

        return (
          <Form.Group controlId={`form${name}`} key={name}>
            <Form.Label>{placeholder}</Form.Label>
            <Form.Control
              type={type}
              name={name}
              value={value || ''}
              placeholder={placeholder}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
        )
      })}
    </Form>
  )
}

export default DynamicCreatForm
