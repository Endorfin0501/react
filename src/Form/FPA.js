import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'
import FPACreat from '../FormCreat/FPA'
import FPAInsert from '../FormInsert/FPA'
import FPAEdit from '../FormEdit/FPA'
import FPADelete from '../FormDelete/FPA'
import '../style.css'
import { Button, Modal } from 'react-bootstrap'

function FPA() {
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
                />
              </div>
            )
          }

          return (
            <div>
              <Button variant='info' onClick={toggleModal('showModal2')}>
                上傳數據
              </Button>
              <FPAInsert
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
                          onMouseDown={() => handleShowActionModal(index)}
                          onTouchStart={() => handleShowActionModal(index)}
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
                  <FPAEdit
                    show={modals.showModal3}
                    handleClose={toggleModal('showModal3')}
                    data={
                      selectedIndex !== null
                        ? {
                            index: selectedIndex,
                            id: selectedData.id, // 确保包含 ID
                            date: selectedData.date[selectedIndex],
                            pic_num: selectedData.pic_num[selectedIndex],
                            material: selectedData.material[selectedIndex],
                            problem: selectedData.problem[selectedIndex],
                            fix_deal: selectedData.fix_deal[selectedIndex],
                            times: selectedData.times[selectedIndex],
                            fill_person:
                              selectedData.fill_person[selectedIndex],
                            department: selectedData.department[selectedIndex],
                            department_director:
                              selectedData.department_director[selectedIndex],
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

export default FPA
