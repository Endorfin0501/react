import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

function EditManageForm({
  show,
  handleClose,
  currentData,
  onSave,
  repairName,
  model,
  machinetype,
}) {
  const [formData, setFormData] = useState({
    incharge: currentData.incharge || '',
    dep_head: currentData.dep_head || '',
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

  const formname = `${formtitle(model)}${machinetype}`

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    onSave(formData, formname) // 调用传入的 onSave 函数，传入更新后的数据
    handleClose() // 关闭模态框
  }

  let people = localStorage.getItem('username') // 這裡可以改成動態選項

  try {
    people = JSON.parse(people) // 嘗試解析 JSON
  } catch (error) {
    // 如果解析失敗，說明它是單一字串，不是 JSON
    people = people ? [people] : [] // 轉為陣列
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>編輯 負責人/主管</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formModelPrincipal'>
            <Form.Label>機台負責人</Form.Label>
            <Form.Control
              as='select'
              name='incharge'
              value={formData.model_principal}
              onChange={handleChange}
            >
              <option value=''>請選擇機台負責人</option>
              {people.map((user, idx) => (
                <option key={idx} value={user}>
                  {user}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='formPrimaryDirector'>
            <Form.Label>主管</Form.Label>
            <Form.Control
              as='select'
              name='dep_head'
              value={formData.primary_director}
              onChange={handleChange}
            >
              <option value=''>請選擇主管</option>
              {people.map((user, idx) => (
                <option key={idx} value={user}>
                  {user}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={handleSubmit}>
          保存
        </Button>
        <Button variant='secondary' onClick={handleClose}>
          取消
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditManageForm
