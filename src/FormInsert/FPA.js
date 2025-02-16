import React from 'react'
import DynamicInsertForm from './DynamicInsertForm'
import { Modal, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const fields = [
  { name: 'date', type: 'date', placeholder: '日期' },
  { name: 'pic_num', placeholder: '圖號' },
  { name: 'material', placeholder: '料件名稱' },
  { name: 'problem', placeholder: '問題點與原因分析' },
  { name: 'fix_deal', placeholder: '修改情形與後續處理' },
  { name: 'times', placeholder: '耗費工時' },
  { name: 'fill_person', placeholder: '填寫人' },
  { name: 'department', placeholder: '權責單位' },
  { name: 'department_director', placeholder: '單位主管' },
  { name: 'note', placeholder: '備註' },
]

const modelname = (model) => {
  switch (model) {
    case 'L機':
      return 'LFieldPartAssembly'
    case '鳳凰':
      return 'PFieldPartAssembly'
    case '一段式':
      return 'OFieldPartAssembly'
    default:
      return '' // 处理不匹配的情况
  }
}

const FPA = ({ show, handleClose, repairName }) => {
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

export default FPA
