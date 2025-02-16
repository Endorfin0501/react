import React from 'react'
import DynamicInsertForm from './DynamicInsertForm'
import { Modal, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const fields = [
  { name: 'date', type: 'date', placeholder: '日期' },
  { name: 'num', placeholder: '圖號' },
  { name: 'thing', placeholder: '料件名稱' },
  { name: 'problem', placeholder: '問題點與原因分析' },
  { name: 'improve', placeholder: '修改情形與後續處理' },
  { name: 'cost', placeholder: '耗費工時' },
  { name: 'who', placeholder: '填寫人' },
  { name: 'unit', placeholder: '權責單位' },
  { name: 'supervisor', placeholder: '單位主管' },
  { name: 'note', placeholder: '備註' },
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

const P = ({ show, handleClose, repairName }) => {
  const location = useLocation()
  const { state } = location
  const model = state?.model // 从 state 中提取 model 值

  // console.log('Received model:', model); // 输出 model 值
  console.log('Model name:', modelname(model)) // 输出 modelName

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

export default P
