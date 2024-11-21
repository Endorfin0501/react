import React from 'react'
import DynamicCreatForm from './DynamicCreatForm'
import { URL } from '../url'
import { Modal, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const modelname = (model) => {
  switch (model) {
    case 'L機':
      return 'LStandardRecord'
    case '鳳凰':
      return 'PStandardRecord'
    case '一段式':
      return 'OStandardRecord'
    default:
      return '' // 处理不匹配的情况
  }
}

const SR = ({ show, handleClose, repair_name }) => {
  const location = useLocation()
  const state = location.state
  const model = state?.model // 从 state 中提取 model 值
  console.log(state)

  const fields = [
    { name: 'repairname', placeholder: '機台名稱', value: `${repair_name}` },
  ]

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
          defaultValues={{}} // 确保传递了一个对象
          endpoint={`${URL}/create/`}
          modelName={modelname(model)}
          repairname={repair_name}
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

export default SR
