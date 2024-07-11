import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'
import '../style.css'


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

  console.log('Stste:', state)

  return (
    <div className='container'>
      <h1>{name}</h1>
      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}Set`}
      >
        {(selectedData) => {
          if (!selectedData) {
            return <p>Loading...</p>
          }
          console.log('Selected Data in set:', selectedData) // 调试信息

          return (
            <table className='table table-striped-columns' id='top1'>
              <thead>
                <tr>
                  <th>機台編號</th>
                  <th>製令編號</th>
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
                {selectedData.date.map((_, index) => (
                  <tr key={index}>
                    <td>{selectedData.repair_name || ''}</td>
                    <td>{selectedData.order_num || ''}</td>
                    <td>{selectedData.setup_num[index] || ''}</td>
                    <td>{selectedData.purpose[index] || ''}</td>
                    <td>{selectedData.principal[index] || ''}</td>
                    <td>{selectedData.date[index] || ''}</td>
                    <td>{selectedData.pic_num[index] || ''}</td>
                    <td>{selectedData.pic_name[index] || ''}</td>
                    <td>{selectedData.sign[index] || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        }}
      </MainData>
    </div>
  )
}

export default FPA
