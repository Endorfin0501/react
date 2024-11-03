import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

function EditResponsibleForm({ show, handleClose, currentData, onSave }) {
  const [formData, setFormData] = useState({
    model_principal: currentData.model_principal || '',
    primary_director: currentData.primary_director || ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    onSave(formData) // 调用传入的 onSave 函数，传入更新后的数据
    handleClose() // 关闭模态框
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>编辑负责人信息</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formModelPrincipal">
            <Form.Label>机台负责人</Form.Label>
            <Form.Control
              type="text"
              name="model_principal"
              value={formData.model_principal}
              onChange={handleChange}
              placeholder="请输入机台负责人"
            />
          </Form.Group>
          <Form.Group controlId="formPrimaryDirector">
            <Form.Label>部门主管</Form.Label>
            <Form.Control
              type="text"
              name="primary_director"
              value={formData.primary_director}
              onChange={handleChange}
              placeholder="请输入部门主管"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          取消
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          保存
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditResponsibleForm
