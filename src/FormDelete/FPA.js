import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import DynamicDeleteForm from './DynamicDeleteForm'

const FPADelete = ({ show, handleClose, handleDelete, data, index }) => {
  const fields = [
    { name: 'date', placeholder: '日期' },
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

  // 检查数据是否有效
  const isDataValid =
    data &&
    Array.isArray(data.date) &&
    index !== null &&
    index >= 0 &&
    index < data.date.length

  const formData = isDataValid
    ? {
        date: data.date[index] || '',
        pic_num: data.pic_num[index] || '',
        material: data.material[index] || '',
        problem: data.problem[index] || '',
        fix_deal: data.fix_deal[index] || '',
        times: data.times[index] || '',
        fill_person: data.fill_person[index] || '',
        department: data.department[index] || '',
        department_director: data.department_director[index] || '',
        note: data.note[index] || '',
      }
    : {}

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>確認刪除</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DynamicDeleteForm fields={fields} formData={formData} />
        <p>您確定要刪除這條數據嗎？</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          取消
        </Button>
        <Button
          variant='danger'
          onClick={() => {
            if (isDataValid) {
              handleDelete()
            } else {
              console.error('Invalid data for deletion')
            }
            handleClose() // 关闭模态框
          }}
        >
          刪除
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default FPADelete
