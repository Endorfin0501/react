import React from 'react'
import DynamicInsertForm from './DynamicInsertForm'
import { Modal, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const fields = [
  { name: 'factory_order_notes', placeholder: '廠訂注意事項' },
  { name: 'fill_in_person', placeholder: '填寫人' },
  { name: 'result', placeholder: '檢驗結果(yes/no)' },
]

const modelname = (model) => {
  switch (model) {
    case 'L機':
      return 'LResumeCover'
    case '鳳凰':
      return 'PResumeCover'
    case '一段式':
      return 'OResumeCover'
    default:
      return '' // 处理不匹配的情况
  }
}

const RC = ({ show, handleClose, repairName }) => {
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

export default RC
