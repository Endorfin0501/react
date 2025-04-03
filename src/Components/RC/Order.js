import React, { useState, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap'
import RCInsert from '../../FormInsert/RC'
import RCEdit from '../../FormEdit/RC/order'

function Order({ selectedData }) {
  const [showModal, setShowModal] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [editData, setEditData] = useState({}) // 用于存储当前编辑的数据

  const longPressTimerRef = useRef(null)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)
  const handleEditClose = () => setEditModalVisible(false)

  const handleLongPressStart = (index) => (event) => {
    event.preventDefault() // 防止默认行为
    setEditIndex(index)

    longPressTimerRef.current = setTimeout(() => {
      setEditModalVisible(true) // 显示操作选择的 Modal
    }, 1000) // 1秒的长按
  }

  const handleLongPressEnd = () => {
    clearTimeout(longPressTimerRef.current)
  }

  const handleEditClick = () => {
    setEditData({
      id: selectedData.id,
      index: editIndex, // 假设用 index 作为唯一标识符
      factory_order_notes: selectedData.factory_order_notes[editIndex] || '',
      fill_in_person: selectedData.fill_in_person[editIndex] || '',
      reviewer2: selectedData.reviewer2[editIndex] || '',
      result: selectedData.result[editIndex] || '',
    })
    setEditModalVisible(false) // 关闭操作选择的 Modal
    setShowEditForm(true) // 显示编辑表单 Modal
  }

  const handleSave = (updatedData) => {
    // 更新表格中的数据，或者其他处理逻辑
    console.log('Updated Data:', updatedData)
    setShowEditForm(false) // 保存后关闭编辑表单 Modal
  }

  const [showEditForm, setShowEditForm] = useState(false) // 控制编辑表单的显示

  console.log('oooooooo', selectedData)

  return (
    <div>
      <table className='table table-striped-columns' id='under2'>
        <thead>
          <tr>
            <th>廠訂注意事項</th>
            <th>填寫人</th>
            <th>覆核人</th>
            <th>檢驗結果</th>
          </tr>
        </thead>
        <tbody>
          {selectedData.factory_order_notes.map((_, index) => (
            <tr
              key={index}
              onTouchStart={handleLongPressStart(index)}
              onTouchEnd={handleLongPressEnd}
              onMouseDown={handleLongPressStart(index)}
              onMouseUp={handleLongPressEnd}
            >
              <td style={{ textAlign: 'left' }}>
                {selectedData.factory_order_notes[index] || ''}
              </td>
              <td>{selectedData.fill_in_person[index] || ''}</td>
              <td>{selectedData.reviewer2[index] || ''}</td>
              <td>{selectedData.result[index] || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 操作选择的 Modal */}
      <Modal show={editModalVisible} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>請選擇操作</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            variant='info'
            onClick={() => {
              setShowModal(true) // 打开上傳數據的 Modal
              setEditModalVisible(false) // 关闭当前操作选择的 Modal
            }}
            className='m-2'
          >
            上傳數據
          </Button>
          <Button variant='info' onClick={handleEditClick} className='m-2'>
            編輯
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleEditClose}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 上傳數據的 Modal */}
      <RCInsert
        show={showModal}
        handleClose={handleClose}
        repairName={selectedData.repair_name}
      />

      {/* 编辑表单的 Modal */}
      {showEditForm && (
        <RCEdit
          show={showEditForm}
          handleClose={() => setShowEditForm(false)}
          data={editData}
          onSave={handleSave}
        />
      )}
    </div>
  )
}

export default Order
