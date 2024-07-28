import React from 'react';
import { Form } from 'react-bootstrap';

function DynamicEditForm({ formData, onChange }) {
  return (
    <Form>
      {Object.keys(formData).map((key) => (
        key !== 'id' && (
          <Form.Group controlId={`form${key}`} key={key}>
            <Form.Label>{key}</Form.Label>
            <Form.Control
              type="text"
              name={key}
              value={formData[key] || ''}
              onChange={onChange}
            />
          </Form.Group>
        )
      ))}
    </Form>
  );
}

export default DynamicEditForm;
