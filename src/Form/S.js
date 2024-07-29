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
  const [modals, setModals] = useState({
    showModal: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    showActionModal: false,
  })
  const [editData, setEditData] = useState(null)
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
        return ''
    }
  }

  const openEditModal = (data) => {
    if (data && data.id) {
      setEditData(data)
      setModals((prev) => ({ ...prev, showModal3: true }))
    } else {
      console.error('No ID found in data:', data)
    }
  }

  const toggleModal = (key) => () => {
    setModals((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleShowActionModal = (index) => {
    if (selectedData?.date?.length > index) {
      setSelectedIndex(index)
      setModals((prev) => ({ ...prev, showActionModal: true }))
    }
  }

  const handleCloseActionModal = () => {
    setModals((prev) => ({ ...prev, showActionModal: false }))
    setSelectedIndex(null)
  }

  const handleSave = (updatedData) => {
    console.log('Saved Data:', updatedData)
    // Handle save logic
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
          setSelectedData(data)

          if (!data) {
            return (
              <div>
                <Button variant='primary' onClick={toggleModal('showModal')}>
                  創建表單
                </Button>
                <SCreat
                  show={modals.showModal}
                  handleClose={toggleModal('showModal')}
                />
              </div>
            )
          }

          return (
            <div>
              <Button variant='info' onClick={toggleModal('showModal2')}>
                上傳數據
              </Button>
              <SInsert
                show={modals.showModal2}
                handleClose={toggleModal('showModal2')}
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
                    {selectedData?.date ? (
                      selectedData.date.map((_, index) => (
                        <tr
                          key={index}
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
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan='10'>沒有數據</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <Modal
                show={modals.showActionModal}
                onHide={handleCloseActionModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title>選擇操作</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Button variant='warning' onClick={toggleModal('showModal3')}>
                    編輯
                  </Button>
                  <SEdit
                    show={modals.showModal3}
                    handleClose={toggleModal('showModal3')}
                    data={
                      selectedIndex !== null
                        ? {
                            index: selectedIndex,
                            id: selectedData.id, // 确保包含 ID
                            setup_num: selectedData.setup_num[selectedIndex],
                            purpose: selectedData.purpose[selectedIndex],
                            principal: selectedData.principal[selectedIndex],
                            date: selectedData.date[selectedIndex],
                            pic_num: selectedData.pic_num[selectedIndex],
                            pic_name: selectedData.pic_name[selectedIndex],
                            sign: selectedData.sign[selectedIndex],
                          }
                        : {}
                    }
                    onSave={handleSave}
                  />
                  {selectedIndex !== null &&
                    selectedData.date.length - 1 === selectedIndex && (
                      <Button
                        variant='danger'
                        onClick={toggleModal('showModal4')}
                      >
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
