import React, { useEffect, useState } from 'react'
import MainData from '../Components/FormMainData'
import GetTable2 from '../Components/CC/GetTable2'
import GetTable1 from '../Components/CC/GetTable1'
import Order from '../Components/CC/order'
import CCCreat from '../FormCreat/CC'
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from 'react-bootstrap'

function CC() {
  const location = useLocation()
  const { state } = location
  const { repairName, type, model, name } = state

  const [selectedData, setSelectedData] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleModalToggle = () => {
    setShowModal(!showModal) // 切換Modal顯示狀態
  }

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

  // Ensure `selectedData` is updated correctly
  useEffect(() => {
    // Any side effects related to `selectedData` can go here
  }, [selectedData])

  return (
    <div>
      <h1>{name}</h1>
      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}CC`}
      >
        {(selectedData) => {
          console.log('Selected Data in CC:', selectedData) // 调试信息
          if (
            !selectedData ||
            !selectedData.quality_assurance ||
            !Array.isArray(selectedData.quality_assurance)
          ) {
            return (
              <div>
                <h2>表單不存在</h2>
                <button className='btn btn-primary' onClick={handleModalToggle}>
                  創建表單
                </button>
                <Modal show={showModal} onHide={handleModalToggle}>
                  <Modal.Header closeButton>
                    <Modal.Title>創建表單</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <CCCreat repair_name={repairName} />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant='secondary' onClick={handleModalToggle}>
                      關閉
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            )
          }

          return (
            <div>
              <GetTable1 data={selectedData} url={`${formtitle(model)}SCC`} />
              <GetTable2 data={selectedData} url={`${formtitle(model)}SCC`} />
              <div
                style={{ borderTop: '2px solid black', marginTop: '10px' }}
              ></div>
              <Order data={selectedData} />
              <div>
                <b>部門主管:{selectedData.dep_head}</b>
              </div>
            </div>
          )
        }}
      </MainData>
    </div>
  )
}

export default CC
