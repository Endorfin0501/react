import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

function EditManageForm({ show, handleClose, currentData, onSave, repairName, model, machinetype }) {
  const [formData, setFormData] = useState({
    incharge: currentData.incharge || '',
    dep_head: currentData.dep_head || ''
  })


  const formtitle = (model) => {
    switch (model) {
      case 'L機':
        return 'L'
      case '鳳凰':
        return 'P'
      case '一段式':
        return 'O'
      default:
        return '' // Default
    }
  }

  const formname =`${formtitle(model)}${machinetype}`


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    onSave(formData, formname) // 调用传入的 onSave 函数，传入更新后的数据
    handleClose() // 关闭模态框
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>編輯 負責人/主管</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formModelPrincipal">
            <Form.Label>機台負責人</Form.Label>
            <Form.Control
              type="text"
              name="incharge"
              value={formData.incharge}
              onChange={handleChange}
              placeholder="請輸入機台負責人"
            />
          </Form.Group>
          <Form.Group controlId="formPrimaryDirector">
            <Form.Label>主管</Form.Label>
            <Form.Control
              type="text"
              name="dep_head"
              value={formData.dep_head}
              onChange={handleChange}
              placeholder="請輸入主管名稱"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          保存
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          取消
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditManageForm
