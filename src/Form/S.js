import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'
import SCreat from '../FormCreat/S'
import SInsert from '../FormInsert/S'
import SEdit from '../FormEdit/S'
import SDelete from '../FormDelete/S'
import '../style.css'
import { Button, Modal } from 'react-bootstrap'

function S() {
  const location = useLocation()
  const [selectedData, setSelectedData] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const { state } = location
  const { repairName, type, model, name } = state

  const formtitle = (model) => {
    switch (model) {
      case 'L機':
        return 'L'
      case '鳳凰':
        return 'P'
      case '一段式':
        return 'O'
      default:
        return '' // Default
    }
  }

  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)
  const [showModal4, setShowModal4] = useState(false)
  const [showActionModal, setShowActionModal] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const handleShow2 = () => setShowModal2(true)
  const handleClose2 = () => setShowModal2(false)

  const handleShow3 = () => setShowModal3(true)
  const handleClose3 = () => setShowModal3(false)

  const handleShow4 = () => setShowModal4(true)
  const handleClose4 = () => setShowModal4(false)

  const handleShowActionModal = (index) => {
    if (selectedData && selectedData.date && selectedData.date.length > index) {
      const item = {
        id: selectedData.id, // 获取数据库中的 ID
        setup_num: selectedData.setup_num[index],
        purpose: selectedData.purpose[index],
        principal: selectedData.principal[index],
        date: selectedData.date[index],
        pic_num: selectedData.pic_num[index],
        pic_name: selectedData.pic_name[index],
        sign: selectedData.sign[index],
      }
      setSelectedIndex(index) // 保存当前行的索引
      setShowActionModal(true)
    }
  }

  const handleCloseActionModal = () => {
    setShowActionModal(false)
    setSelectedIndex(null)
  }

  const handleSave = (updatedData) => {
    console.log('Saved Data:', updatedData)
    // 在這裡處理保存邏輯
    // 例如更新狀態或調用 API
  }

  console.log('State:', state)

  return (
    <div className='container'>
      <h1>{name}</h1>

      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}S`}
      >
        {(data) => {
          setSelectedData(data) // 設置 selectedData
          if (!data) {
            return (
              <div>
                <Button variant='primary' onClick={handleShow}>
                  創建表單
                </Button>
                <SCreat show={showModal} handleClose={handleClose} />
              </div>
            )
          }

          return (
            <div>
              <Button variant='info' onClick={handleShow2}>
                上傳數據
              </Button>
              <SInsert
                show={showModal2}
                handleClose={handleClose2}
                repairName={repairName}
              />

              <div className='container'>
                <table className='table table-striped-columns' id='top1'>
                  <thead>
                    <tr>
                      <th>機台編號</th>
                      <th>製令編號</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.repair_name || ''}</td>
                      <td>{data.order_num || ''}</td>
                    </tr>
                  </tbody>
                </table>

                <table className='table table-striped-columns' id='top2'>
                  <thead>
                    <tr>
                      <th>反應、設變單號</th>
                      <th>主旨</th>
                      <th>負責人</th>
                      <th>日期</th>
                      <th>出圖圖號</th>
                      <th>圖名</th>
                      <th>簽名</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedData && selectedData.date ? (
                      selectedData.date.map((_, index) => (
                        <tr
                          key={index} // 使用索引作为 key
                          onMouseDown={() => handleShowActionModal(index)}
                          onTouchStart={() => handleShowActionModal(index)}
                        >
                          <td>{selectedData.setup_num[index] || ''}</td>
                          <td>{selectedData.purpose[index] || ''}</td>
                          <td>{selectedData.principal[index] || ''}</td>
                          <td>{selectedData.date[index] || ''}</td>
                          <td>{selectedData.pic_num[index] || ''}</td>
                          <td>{selectedData.pic_name[index] || ''}</td>
                          <td>{selectedData.sign[index] || ''}</td>
                          <td>{selectedData.department[index] || ''}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan='11'>沒有數據</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Action Modal */}
              <Modal show={showActionModal} onHide={handleCloseActionModal}>
                <Modal.Header closeButton>
                  <Modal.Title>選擇操作</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Button variant='warning' onClick={handleShow3}>
                    編輯
                  </Button>
                  <SEdit
                    show={showModal3}
                    handleClose={handleClose3}
                    data={selectedData}
                    onSave={handleSave}
                  />
                  {selectedIndex !== null &&
                    selectedData.date.length - 1 === selectedIndex && (
                      <Button variant='danger' onClick={handleShow4}>
                        刪除
                      </Button>
                    )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleCloseActionModal}>
                    關閉
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          )
        }}
      </MainData>
    </div>
  )
}

export default S
