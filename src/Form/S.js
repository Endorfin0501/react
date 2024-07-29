import React, { useState, useEffect } from 'react'
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
  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)
  const [showModal4, setShowModal4] = useState(false)
  const [showActionModal, setShowActionModal] = useState(false)

  const { state } = location
  const { repairName, type, model, name } = state

  useEffect(() => {
    // Use useEffect to update selectedData when `data` changes
    setSelectedData(null)
  }, [state])

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

  const toggleModal = (modalSetter, value) => modalSetter(value)

  const handleShowActionModal = (index) => {
    if (selectedData && selectedData.date && selectedData.date.length > index) {
      const item = {
        id: selectedData.id,
        setup_num: selectedData.setup_num[index] || '',
        purpose: selectedData.purpose[index] || '',
        principal: selectedData.principal[index] || '',
        date: selectedData.date[index] || '',
        pic_num: selectedData.pic_num[index] || '',
        pic_name: selectedData.pic_name[index] || '',
        sign: selectedData.sign[index] || '',
      }
      setSelectedIndex(index)
      setShowActionModal(true)
    }
  }

  const handleCloseActionModal = () => {
    setShowActionModal(false)
    setSelectedIndex(null)
  }

  const handleSave = (updatedData) => {
    console.log('Saved Data:', updatedData)
    // Handle save logic here
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
                <Button
                  variant='primary'
                  onClick={() => toggleModal(setShowModal, true)}
                >
                  創建表單
                </Button>
                <SCreat
                  show={showModal}
                  handleClose={() => toggleModal(setShowModal, false)}
                />
              </div>
            )
          }

          const safeData = {
            setup_num: Array.isArray(data.setup_num) ? data.setup_num : [],
            purpose: Array.isArray(data.purpose) ? data.purpose : [],
            principal: Array.isArray(data.principal) ? data.principal : [],
            date: Array.isArray(data.date) ? data.date : [],
            pic_num: Array.isArray(data.pic_num) ? data.pic_num : [],
            pic_name: Array.isArray(data.pic_name) ? data.pic_name : [],
            sign: Array.isArray(data.sign) ? data.sign : [],
            department: Array.isArray(data.department) ? data.department : [],
          }

          return (
            <div>
              <Button
                variant='info'
                onClick={() => toggleModal(setShowModal2, true)}
              >
                上傳數據
              </Button>
              <SInsert
                show={showModal2}
                handleClose={() => toggleModal(setShowModal2, false)}
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
                    {safeData.date.length > 0 ? (
                      safeData.date.map((_, index) => (
                        <tr
                          key={index}
                          onMouseDown={() => handleShowActionModal(index)}
                          onTouchStart={() => handleShowActionModal(index)}
                        >
                          <td>{safeData.setup_num[index] || ''}</td>
                          <td>{safeData.purpose[index] || ''}</td>
                          <td>{safeData.principal[index] || ''}</td>
                          <td>{safeData.date[index] || ''}</td>
                          <td>{safeData.pic_num[index] || ''}</td>
                          <td>{safeData.pic_name[index] || ''}</td>
                          <td>{safeData.sign[index] || ''}</td>
                          <td>{safeData.department[index] || ''}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan='8'>沒有數據</td>
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
                  <Button
                    variant='warning'
                    onClick={() => toggleModal(setShowModal3, true)}
                  >
                    編輯
                  </Button>
                  <SEdit
                    show={showModal3}
                    handleClose={() => toggleModal(setShowModal3, false)}
                    data={selectedData}
                    onSave={handleSave}
                  />
                  {selectedIndex !== null &&
                    safeData.date.length - 1 === selectedIndex && (
                      <Button
                        variant='danger'
                        onClick={() => toggleModal(setShowModal4, true)}
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
