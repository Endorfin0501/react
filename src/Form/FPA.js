import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'
import FPACreat from '../FormCreat/FPA'
import FPAInsert from '../FormInsert/FPA'
import FPAEdit from '../FormEdit/FPA'
import ManageEdit from '../FormManagerEdit/DynamicManageForm'
import '../style.css'
import { Button, Modal, Alert } from 'react-bootstrap'
import { URL } from '../url'

function FPA() {
  const location = useLocation()
  const [selectedData, setSelectedData] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [longPressTimer, setLongPressTimer] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [isLongPress, setIsLongPress] = useState(false)
  const [showEditManageForm, setShowEditManageForm] = useState(false)
  const [modals, setModals] = useState({
    showModal: false,
    showModal2: false,
    showModal3: false,
    showActionModal: false,
    showDeleteModal: false,
  })

  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const threshold = 20 // 滑动阈值

  const { state } = location
  const { repairName, type, model, name } = state
  console.log(repairName)

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

  const handleSaveManage = (formData, formname) => {
    const dataToSend = {
      models: formname,
      serializer: `${formname}Serializer`, // 替换为实际的序列化器名称
      ...formData,
    }

    fetch(`${URL}/api/update3/${repairName}/`, {
      // 假设 `repairName` 是 `id`
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          alert('保存成功')
          window.location.reload()
          // 更新前端数据或执行其他操作
        } else {
          alert(`保存失敗: ${data.message}`)
        }
      })
      .catch((error) => {
        console.error('保存數據失敗:', error)
        alert('請求失敗')
      })
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
        form={`${formtitle(model)}FPA`}
      >
        {(data) => {
          setSelectedData(data)

          if (!data) {
            return (
              <div>
                <Button variant='primary' onClick={toggleModal('showModal')}>
                  創建表單
                </Button>
                <FPACreat
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
                onClick={() =>
                  checkLockStatus(() => toggleModal('showModal2')())
                }
              >
                上傳數據
              </Button>
              <FPAInsert
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
                        <td>{data.order_num || ''}</td>
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
                            key={index}
                            className='no-select'
                            onTouchStart={handleLongPressStart(index)}
                            onTouchMove={handleLongPressMove}
                            onTouchEnd={handleLongPressEnd}
                            onMouseDown={handleLongPressStart(index)}
                            onMouseMove={handleLongPressMove}
                            onMouseUp={handleLongPressEnd}
                          >
                            <td>{selectedData.date[index] || ''}</td>
                            <td>{selectedData.pic_num[index] || ''}</td>
                            <td>{selectedData.material[index] || ''}</td>
                            <td>{selectedData.problem[index] || ''}</td>
                            <td>{selectedData.fix_deal[index] || ''}</td>
                            <td>{selectedData.times[index] || ''}</td>
                            <td>{selectedData.fill_person[index] || ''}</td>
                            <td>{selectedData.department[index] || ''}</td>
                            <td>
                              {selectedData.department_director[index] || ''}
                            </td>
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
                        <td>{data.model_principal || ''}</td>
                        <td>{data.primary_director || ''}</td>
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
                    onClick={() =>
                      checkLockStatus(() => toggleModal('showModal3')())
                    }
                  >
                    編輯
                  </Button>
                  <Button onClick={() => setShowEditManageForm(true)}>
                    編輯 主管負責人/主管
                  </Button>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleCloseActionModal}>
                    關閉
                  </Button>
                </Modal.Footer>
              </Modal>

              <FPAEdit
                show={modals.showModal3}
                handleClose={toggleModal('showModal3')}
                data={
                  selectedIndex !== null
                    ? {
                        index: selectedIndex,
                        id: selectedData.id, // 確保包含 ID
                        date: selectedData.date[selectedIndex],
                        pic_num: selectedData.pic_num[selectedIndex],
                        material: selectedData.material[selectedIndex],
                        problem: selectedData.problem[selectedIndex],
                        fix_deal: selectedData.fix_deal[selectedIndex],
                        times: selectedData.times[selectedIndex],
                        fill_person: selectedData.fill_person[selectedIndex],
                        department: selectedData.department[selectedIndex],
                        department_director:
                          selectedData.department_director[selectedIndex],
                        note: selectedData.note[selectedIndex],
                      }
                    : {}
                }
                onSave={handleSave}
              />
              <ManageEdit
                show={showEditManageForm}
                handleClose={() => setShowEditManageForm(false)}
                currentData={{
                  model_principal: data.model_principal,
                  primary_director: data.primary_director,
                }}
                repairName={repairName} // 传递 repair_name
                model={model} // 传递 model
                machinetype='FieldPartAssembly'
                onSave={handleSaveManage}
              />
            </div>
          )
        }}
      </MainData>
    </div>
  )
}

export default FPA
