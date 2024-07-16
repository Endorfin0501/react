import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'

function SR() {
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

  console.log(state)

  return (
    <div>
      <h1>{name}</h1>
      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}SR`}
      >
        {(selectedData) => {
          if (!selectedData) {
            return <p>Loadig...</p>
          }
          console.log('Selected Data in SR:', selectedData) // 调试信息
          return (
            <div>
              <table className='table table-striped-columns' id='top1'>
                <thead>
                  <tr>
                    <th>機台編號</th>
                    <th>機種名稱</th>
                    <th>判定</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedData.repairName || ''}</td>
                    <td>CPSB-鳳凰</td>
                    <td>{selectedData.judge || ''}</td>
                  </tr>
                </tbody>
              </table>

              {/* <table>
                <thead>
                  <tr>
                    <th>機台編號</th>
                    <th>機種名稱</th>
                    <th>判定</th>
                  </tr>
                </thead>
                <tbody>
                  <td></td>
                </tbody>
              </table> */}
            </div>
          )
        }}
      </MainData>
    </div>
  )
}

export default SR
