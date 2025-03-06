import React from 'react'
import { useState, useEffect } from 'react'
import DynamicInsertForm from './DynamicInsertForm'
import { Modal, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const fields = [
  { name: 'factory_order_notes', placeholder: '廠訂注意事項' },
  { name: 'fill_in_person', type: 'select', placeholder: '填寫人' },
  { name: 'reviewer2', type: 'select', placeholder: '覆核人' },
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
  const [users, setUsers] = useState([])
  const location = useLocation()
  const { state } = location
  const model = state?.model // 从 state 中提取 model 值

  useEffect(() => {
    const storedUsers = localStorage.getItem('username')
    if (storedUsers) {
      // 假設 users 是一個由逗號分隔的字符串，轉換成數組
      setUsers(storedUsers.split(','))
    }
  }, [])

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
          users={users}
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
