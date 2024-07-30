import React from 'react'
import { Form, Button } from 'react-bootstrap'

const DynamicDeleteForm = ({
  fields,
  formData,
  onFieldChange,
  onConfirm,
  onCancel,
}) => {
  return (
    <Form>
      {fields.map((field) => (
        <Form.Group key={field.name}>
          <Form.Label>{field.placeholder}</Form.Label>
          <Form.Control
            type='text'
            name={field.name}
            value={formData[field.name] || ''}
            onChange={onFieldChange}
            readOnly // 禁止修改数据
          />
        </Form.Group>
      ))}
      <div className='d-flex justify-content-end'>
        <Button variant='secondary' onClick={onCancel}>
          取消
        </Button>
        <Button
          variant='danger'
          onClick={onConfirm}
          style={{ marginLeft: '10px' }}
        >
          確認刪除
        </Button>
      </div>
    </Form>
  )
}

export default DynamicDeleteForm
