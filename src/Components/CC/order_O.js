import React, { useState, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap'
import CCInsert from '../../FormInsert/CC_O'
import CCEdit3 from '../../FormEdit/CC/order_O' // 确保使用正确的组件

function Order({ data: propData }) {
  const [showEditModal, setShowEditModal] = useState(false)
  const [showCCModal, setShowCCModal] = useState(false)
  const [selectedRowIndex, setSelectedRowIndex] = useState(null)
  const [editData, setEditData] = useState({}) // 保存编辑数据
  const [showSelectModal, setShowSelectModal] = useState(false) // 添加状态以控制选择操作模态框的显示

  const longPressTimerRef = useRef(null)

  // 处理数组数据
  const generateTableRows = () => {
    if (!propData) {
      return <h2>查無資料...</h2>
    }

    // 确保各字段是数组
    const orderPro = Array.isArray(propData?.problems) ? propData.problems : []
    const orderRes = Array.isArray(propData.responsibilities)
      ? propData.responsibilities
      : []
    const orderPre = Array.isArray(propData.prediction)
      ? propData.prediction
      : []
    const orderReal = Array.isArray(propData.reality) ? propData.reality : []
    const orderResp = Array.isArray(propData.respcheck)
      ? propData.respcheck
      : []
    const orderQC = Array.isArray(propData.qualitycheck)
      ? propData.qualitycheck
      : []

    // 计算表格的最大行数
    const numRows = Math.max(
      orderPro.length,
      orderRes.length,
      orderPre.length,
      orderReal.length,
      orderResp.length,
      orderQC.length
    )

    return Array.from({ length: numRows }).map((_, index) => (
      <tr
        key={index}
        onTouchStart={handleLongPressStart(index)}
        onTouchEnd={handleLongPressEnd}
        onMouseDown={handleLongPressStart(index)}
        onMouseUp={handleLongPressEnd}
      >
        <td>{index + 1}</td> {/* 累计的项次 */}
        <td>{orderPro[index] || 'N/A'}</td>
        <td>{orderRes[index] || 'N/A'}</td>
        <td>{orderPre[index] || 'N/A'}</td>
        <td>{orderReal[index] || 'N/A'}</td>
        <td>{orderResp[index] || 'N/A'}</td>
        <td>{orderQC[index] || 'N/A'}</td>
      </tr>
    ))
  }

  const handleLongPressStart = (index) => (event) => {
    event.preventDefault() // 防止默认行为
    setSelectedRowIndex(index)

    longPressTimerRef.current = setTimeout(() => {
      setShowSelectModal(true) // 显示选择操作模态框
    }, 1000) // 1秒的长按
  }

  const handleLongPressEnd = () => {
    clearTimeout(longPressTimerRef.current)
  }

  const handleEditModalClose = () => setShowEditModal(false)
  const handleSelectModalClose = () => setShowSelectModal(false)

  const handleEditButtonClick = () => {
    // 关闭选择操作模态框并显示编辑数据模态框
    setShowSelectModal(false)
    setEditData({
      // 根据选中的行索引设置编辑数据
      problems: propData.problems[selectedRowIndex],
      responsibilities: propData.responsibilities[selectedRowIndex],
      prediction: propData.prediction[selectedRowIndex],
      reality: propData.reality[selectedRowIndex],
      respcheck: propData.respcheck[selectedRowIndex],
      qualitycheck: propData.qualitycheck[selectedRowIndex],
      id: propData.id, // 确保这里传递 id
      index: selectedRowIndex,
    })
    setShowEditModal(true) // 显示编辑数据模态框
  }

  const handleUploadButtonClick = () => {
    setShowSelectModal(false) // 关闭选择操作模态框
    setShowCCModal(true) // 显示CC模态框
  }

  return (
    <div>
      <h1>客戶廠訂特殊需求</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th
              rowSpan={2}
              style={{
                backgroundColor: 'lightgray',
                border: '2px gray solid',
                padding: '10px',
              }}
            >
              項次
            </th>
            <th
              rowSpan={2}
              style={{
                backgroundColor: 'lightgray',
                border: '2px gray solid',
                padding: '10px',
              }}
            >
              相關問題
            </th>
            <th
              rowSpan={2}
              style={{
                backgroundColor: 'lightgray',
                border: '2px gray solid',
                padding: '10px',
              }}
            >
              權責
            </th>
            <th
              colSpan={2}
              style={{
                textAlign: 'center',
                verticalAlign: 'middle',
                backgroundColor: 'lightgray',
                border: '2px gray solid',
                padding: '10px',
              }}
            >
              時間管制
            </th>
            <th
              colSpan={2}
              style={{
                textAlign: 'center',
                verticalAlign: 'middle',
                backgroundColor: 'lightgray',
                border: '2px gray solid',
                padding: '10px',
              }}
            >
              檢驗結果
            </th>
          </tr>
          <tr>
            <th
              style={{
                backgroundColor: 'lightgray',
              }}
            >
              預計完成日
            </th>
            <th
              style={{
                backgroundColor: 'lightgray',
              }}
            >
              實際完成日
            </th>
            <th
              style={{
                backgroundColor: 'lightgray',
              }}
            >
              責權單位確認
            </th>
            <th
              style={{
                backgroundColor: 'lightgray',
              }}
            >
              品保複檢
            </th>
          </tr>
        </thead>
        <tbody>{generateTableRows()}</tbody>
      </table>

      {/* 选择操作 Modal */}
      <Modal show={showSelectModal} onHide={handleSelectModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>選擇操作</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant='primary' onClick={handleUploadButtonClick}>
            上傳
          </Button>
          <Button variant='primary' onClick={handleEditButtonClick}>
            編輯
          </Button>
          <Button variant='secondary' onClick={handleSelectModalClose}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>

      {/* CC Insert Modal */}
      <CCInsert
        show={showCCModal}
        handleClose={() => setShowCCModal(false)}
        repairName={propData.repair_name}
      />

      {/* 编辑数据 Modal */}
      <CCEdit3
        show={showEditModal}
        handleClose={handleEditModalClose}
        data={editData}
        onSave={(updatedData) => {
          // 这里可以处理保存数据的逻辑
          console.log('Data saved:', updatedData)
        }}
      />
    </div>
  )
}

export default Order
