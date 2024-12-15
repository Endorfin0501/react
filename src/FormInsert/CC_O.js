import React from 'react'
import DynamicInsertForm from './DynamicInsertForm'
import { Modal, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const fields = [
  { name: 'problems', placeholder: '相關問題' },
  { name: 'responsibilities', placeholder: '權責' },
  { name: 'prediction', type: 'date', placeholder: '預計完成日' },
  { name: 'reality', type: 'date', placeholder: '實際完成日' },
  { name: 'respcheck', placeholder: '責權單位確認' },
  { name: 'qualitycheck', placeholder: '品保複檢' },
]

const modelname = (model) => {
  switch (model) {
    case 'L機':
      return 'LCommissioningCompletes'
    case '鳳凰':
      return 'PCommissioningCompletes'
    case '一段式':
      return 'OCommissioningCompletes'
    default:
      return '' // 处理不匹配的情况
  }
}

const CC = ({ show, handleClose, repairName }) => {
  const location = useLocation()
  const { state } = location
  const model = state?.model // 从 state 中提取 model 值

  // console.log('Received model:', model); // 输出 model 值
  console.log('Model name:', repairName) // 输出 modelName

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>上傳數據</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DynamicInsertForm
          fields={fields}
          repairName={repairName}
          modelName={modelname(model)} // 使用 modelName 函数计算 modelName
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

export default CC
