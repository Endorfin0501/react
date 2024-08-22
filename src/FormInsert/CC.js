import React from 'react'
import DynamicInsertForm from './DynamicInsertForm'
import { Modal, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const fields = [
  { name: 'orderitems', placeholder: '檢驗項目' },
  { name: 'ordernote', placeholder: '備註' },
  { name: 'orderctg', placeholder: '類別' },
  { name: 'orderres', placeholder: '權責' },
  { name: 'orderfir', placeholder: '自主檢查(OK/NG)' },
  { name: 'ordersec', placeholder: '品保覆檢(OK/NG)' },
  { name: 'ordercompdate', placeholder: '完成日期' },
]

const modelname = (model) => {
    switch (model) {
      case 'L機':
        return 'LCommissioningCompletes';
      case '鳳凰':
        return 'PCommissioningCompletes';
      case '一段式':
        return 'OCommissioningCompletes';
      default:
        return ''; // 处理不匹配的情况
    }
  };

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
