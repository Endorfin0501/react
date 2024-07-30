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
