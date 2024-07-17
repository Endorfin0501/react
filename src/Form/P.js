import React, { useState }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'
import PInput from '../FormInput/P'
import '../style.css'
import { Button } from 'react-bootstrap'

function FPA() {
  const location = useLocation()

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

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  console.log('Stste:', state)

  return (
    <div className='container'>
      <h1>{name}</h1>
      <Button variant='primary' onClick={handleShow}>
        上傳數據
      </Button>
      <PInput show={showModal} handleClose={handleClose} />
      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}P`}
      >
        {(selectedData) => {
          if (!selectedData) {
            return <p>Loading...</p>
          }
          console.log('Selected Data in FPA:', selectedData) // 调试信息

          return (
            <div>
              <table className='table table-striped-columns' id='top1'>
                <thead>
                  <tr>
                    <th>機台編號</th>
                    <th>製令編號</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedData.repair_name || ''}</td>
                    <td>{selectedData.mo_name || ''}</td>
                  </tr>
                </tbody>
              </table>
              <table className='table table-striped-columns' id='top1'>
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
                  {selectedData.date.map((_, index) => (
                    <tr key={index}>
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
                  ))}
                </tbody>
              </table>
            </div>
          )
        }}
      </MainData>
    </div>
  )
}

export default FPA
