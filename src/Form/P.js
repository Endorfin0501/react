import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'
import PCreat from '../FormCreat/P'
import PInsert from '../FormInsert/P'
import PEdit from '../FormEdit/P'
import PDelete from '../FormDelete/P'
import '../style.css'
import { Button, Modal, Alert} from 'react-bootstrap'

function P() {
  const location = useLocation()
  const [selectedData, setSelectedData] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [longPressTimer, setLongPressTimer] = useState(null)
  const [isLongPress, setIsLongPress] = useState(false)
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

  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const threshold = 20 // 滑动阈值

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

  const handleLongPressStart = (index) => (event) => {
    event.preventDefault() // Prevent default action
    setIsLongPress(false)
    setStartX(event.touches ? event.touches[0].clientX : event.clientX)
    setStartY(event.touches ? event.touches[0].clientY : event.clientY)

    setLongPressTimer(
      setTimeout(() => {
        setIsLongPress(true)
        handleShowActionModal(index)
      }, 1000)
    )
  }

  const handleLongPressMove = (event) => {
    if (longPressTimer) {
      const moveX = event.touches ? event.touches[0].clientX : event.clientX
      const moveY = event.touches ? event.touches[0].clientY : event.clientY

      if (
        Math.abs(moveX - startX) > threshold ||
        Math.abs(moveY - startY) > threshold
      ) {
        clearTimeout(longPressTimer)
        setLongPressTimer(null)
        setIsLongPress(false)
      }
    }
  }

  const handleLongPressEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer)
      setLongPressTimer(null)
      if (!isLongPress) {
        handleCloseActionModal()
      }
    }
    setIsLongPress(false)
  }

  const handleSave = (updatedData) => {
    console.log('Saved Data:', updatedData)
    // Handle save logic
  }

   // 检查 lock 状态
   const checkLockStatus = (action) => {
    if (selectedData?.locks) {
      setShowAlert(true) // 显示警示框
      return false // 阻止操作
    }
    action() // 执行传入的操作
  }

  console.log('State:', state)

  return (
    <div className='container'>
      <h1>{name}</h1>
      {showAlert && (
        <Alert variant='danger' onClose={() => setShowAlert(false)} dismissible>
          無法進行操作，此表單已在電腦版被鎖定！ 請連絡相關人員進行解除
        </Alert>
      )}

      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}P`}
      >
        {(data) => {
          setSelectedData(data)

          if (!data) {
            return (
              <div>
                <Button variant='primary' onClick={toggleModal('showModal')}>
                  創建表單
                </Button>
                <PCreat
                  show={modals.showModal}
                  handleClose={toggleModal('showModal')}
                  repair_name={repairName}
                />
              </div>
            )
          }

          return (
            <div>
              <Button
                variant='info'
                onClick={() => checkLockStatus(() => toggleModal('showModal2')())}
              >
                上傳數據
              </Button>
              <PInsert
                show={modals.showModal2}
                handleClose={toggleModal('showModal2')}
                repairName={repairName}
              />

              <div className='container'>
                <div className='table-responsive'>
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
                        <td>{data.mo_name || ''}</td>
                      </tr>
                    </tbody>
                  </table>

                  <table className='table table-striped-columns' id='top2'>
                    <thead>
                      <tr>
                        <th>日期</th>
                        <th>圖號</th>
                        <th>料件名稱</th>
                        <th>問題點與原因分析</th>
                        <th>修改情形與後續處理</th>
                        <th>耗費工時</th>
                        <th>填寫人</th>
                        <th>權責單位</th>
                        <th>單位主管</th>
                        <th>備註</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedData?.date ? (
                        selectedData.date.map((_, index) => (
                          <tr
                            className='no-select'
                            key={index}
                            onTouchStart={handleLongPressStart(index)}
                            onTouchMove={handleLongPressMove}
                            onTouchEnd={handleLongPressEnd}
                            onMouseDown={handleLongPressStart(index)}
                            onMouseMove={handleLongPressMove}
                            onMouseUp={handleLongPressEnd}
                          >
                            <td>{selectedData.date[index] || ''}</td>
                            <td>{selectedData.num[index] || ''}</td>
                            <td>{selectedData.thing[index] || ''}</td>
                            <td>{selectedData.problem[index] || ''}</td>
                            <td>{selectedData.improve[index] || ''}</td>
                            <td>{selectedData.cost[index] || ''}</td>
                            <td>{selectedData.who[index] || ''}</td>
                            <td>{selectedData.unit[index] || ''}</td>
                            <td>{selectedData.supervisor[index] || ''}</td>
                            <td>{selectedData.note[index] || ''}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan='10'>沒有數據</td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  <table className='table table-striped-columns'>
                    <thead>
                      <tr>
                        <th>機台負責人</th>
                        <th>部門主管</th>
                      </tr>
                    </thead> 
                    <tbody>
                      <tr>
                        <td>{data.incharge || ''}</td>
                        <td>{data.dep_head || ''}</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>

              <Modal
                show={modals.showActionModal}
                onHide={handleCloseActionModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title>選擇操作</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Button 
                    variant='warning'  
                    onClick={() => checkLockStatus(() => toggleModal('showModal3')())}>
                    編輯
                  </Button>
                  <PEdit
                    show={modals.showModal3}
                    handleClose={toggleModal('showModal3')}
                    data={
                      selectedIndex !== null
                        ? {
                            index: selectedIndex,
                            id: selectedData.id, // 确保包含 ID
                            date: selectedData.date[selectedIndex],
                            pic_num: selectedData.num[selectedIndex],
                            material: selectedData.thing[selectedIndex],
                            problem: selectedData.problem[selectedIndex],
                            fix_deal: selectedData.improve[selectedIndex],
                            times: selectedData.cost[selectedIndex],
                            fill_person: selectedData.who[selectedIndex],
                            department: selectedData.unit[selectedIndex],
                            department_director:
                              selectedData.supervisor[selectedIndex],
                            note: selectedData.note[selectedIndex],
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

export default P
