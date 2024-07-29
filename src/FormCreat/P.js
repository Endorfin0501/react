import React from 'react'
import DynamicCreatForm from './DynamicCreatForm'
import { URL } from '../url'
import { Modal, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const fields = [
  { name: 'repair_name', placeholder: '機台名稱' },
  { name: 'mo_name', placeholder: '製令編號' },
  { name: 'incharge', placeholder: '機台負責人' },
  { name: 'dep_head', placeholder: '部門主管' },
]

const modelname = (model) => {
  switch (model) {
    case 'L機':
      return 'LPullblow'
    case '鳳凰':
      return 'PPullblow'
    case '一段式':
      return 'OPullblow'
    default:
      return '' // 处理不匹配的情况
  }
}

const P = ({ show, handleClose }) => {
  const location = useLocation()
  const state = location.state
  const model = state?.model // 从 state 中提取 model 值

  console.log('Received model:', model) // 输出 model 值
  console.log('Model name:', modelname(model)) // 输出 modelName
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>創建表單</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DynamicCreatForm
          fields={fields}
          endpoint={`${URL}/create/`}
          modelName={modelname(model)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          關閉
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default P
