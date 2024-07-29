import React from 'react'
import DynamicInsertForm from './DynamicInsertForm'
import { Modal, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const fields = [
  { name: 'setup_num', placeholder: '反應、設變單號' },
  { name: 'purpose', placeholder: '主旨' },
  { name: 'principal', placeholder: '負責人' },
  { name: 'date', type: 'date', placeholder: '日期' },
  { name: 'pic_num', placeholder: '出圖圖號' },
  { name: 'pic_name', placeholder: '圖名	' },
  { name: 'sign', placeholder: '簽名' },
]

const modelname = (model) => {
  switch (model) {
    case 'L機':
      return 'LSet'
    case '鳳凰':
      return 'PSet'
    case '一段式':
      return 'OSet'
    default:
      return '' // 处理不匹配的情况
  }
}

const S = ({ show, handleClose, repairName }) => {
  const location = useLocation()
  const { state } = location
  const model = state?.model // 从 state 中提取 model 值

  // console.log('Received model:', model); // 输出 model 值
  // console.log('Model name:', modelname(model)); // 输出 modelName

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

export default S
