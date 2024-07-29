import React from 'react'
import { Form } from 'react-bootstrap'

function DynamicEditForm({ formData, onChange }) {
  return (
    <Form>
      {Object.keys(formData).map((key) => {
        const value = formData[key]
        if (Array.isArray(value)) {
          return value.map((item, index) => (
            <React.Fragment key={`${key}[${index}]`}>
              <Form.Group controlId={`form${key}[${index}]`}>
                <Form.Label>{`${key}[${index}]`}</Form.Label>
                <Form.Control
                  type='text'
                  name={`${key}[${index}]`}
                  value={item || ''}
                  onChange={(e) => onChange(e, key, index)}
                />
              </Form.Group>
              {/* 隐藏字段 */}
              <input type='hidden' name={`index[${index}]`} value={index} />
            </React.Fragment>
          ))
        }
        return (
          <Form.Group controlId={`form${key}`} key={key}>
            <Form.Label>{key}</Form.Label>
            <Form.Control
              type='text'
              name={key}
              value={value || ''}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
        )
      })}
    </Form>
  )
}

export default DynamicEditForm
