import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { URL } from '../url'

function getCookie(name) {
  const cookieValue = document.cookie.match(
    '(^|;)\\s*' + name + '\\s*=\\s*([^;]+)'
  )
  return cookieValue ? cookieValue.pop() : ''
}

function FPA({ show, handleClose }) {
  const [formData, setFormData] = useState({
    日期: '',
    圖號: '',
    料件名稱: '',
    問題點與原因分析: '',
    修改情形與後續處理: '',
    耗費工時: '',
    填寫人: '',
    權責單位: '',
    單位主管: '',
    備註: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    fetch(`${URL}/api/upload/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken'), // 獲取 CSRF token'
      },
      body: JSON.stringify({
        date: formData.日期,
        pic_num: formData.圖號,
        department: formData.料件名稱,
        department_director: formData.問題點與原因分析,
        fill_person: formData.修改情形與後續處理,
        fix_deal: formData.耗費工時,
        material: formData.填寫人,
        note: formData.權責單位,
        problem: formData.單位主管,
        times: formData.備註,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        console.log('數據上傳成功:', data)
        handleClose()
      })
      .catch((error) => {
        console.error('數據上傳失敗:', error)
      })
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>上傳數據</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <Form.Group key={key} className='mb-3'>
              <Form.Label>{key}</Form.Label>
              <Form.Control
                type='text'
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            </Form.Group>
          ))}
          <Button variant='primary' type='submit'>
            上傳
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default FPA
