import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'
import '../style.css'
import Table from '../Components/RC/Table'
import Order from '../Components/RC/Order'
import RCCreat from '../FormCreat/RC'
import { Modal, Button } from 'react-bootstrap'

function RC() {
  const location = useLocation()

  const { state } = location
  const { repairName, type, model, name } = state
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

  //console.log(state)

  return (
    <div className='container'>
      <h1>{name}</h1>
      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}RC`}
      >
        {(selectedData) => {
          if (
            !selectedData ||
            !selectedData.estimated_date ||
            !Array.isArray(selectedData.estimated_date)
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
                    <RCCreat repairName={repairName} />
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

          console.log('Selected Data in RC:', selectedData) // 调试信息

          return (
            <div>
              <Table selectedData={selectedData} />
              <Order selectedData={selectedData}></Order>
            </div>
          )
        }}
      </MainData>
    </div>
  )
}

export default RC
