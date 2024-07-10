import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'

function RC() {
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
    <div className='container'>
      <h1>{name}</h1>
      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}ResumeCover`}
      >
        {(selectedData) => {
          if (!selectedData || !selectedData.estimated_date || !Array.isArray(selectedData.estimated_date)) {
            return <p>Loading...</p>
          }
          
          console.log('Selected Data in RC:', selectedData) // 调试信息

          return (
            <div className='container'>
            <table className="table table-striped-columns"  id = 'top1'>
              <thead>
                <tr>
                  <th>機號</th>
                  <th>電壓</th>
                  <th>赫茲</th>
                  <th>預交日期</th> 
                </tr>
              </thead>
              <tbody>
                {selectedData.estimated_date.map((_, index) => (
                  <tr key={index}>
                    <td>{selectedData.repair_name || ''}</td>
                    <td>{selectedData.voltage || ''}</td>
                    <td>{selectedData.hertz || ''}</td>
                    <td>{selectedData.prepaid_date || ''}</td>  
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="table table-striped-columns"  id = 'top2'>
              <thead>
                <tr>
                <th>高壓</th>
                  <th>預吹</th>
                  <th>回收</th>
                  <th>循環</th>
                  <th>輸送銘牌機序號</th>
                </tr>
              </thead>
              <tbody>
              {selectedData.estimated_date.map((_, index) => (
                  <tr key={index}>
                    <td>{selectedData.high_pressure || ''}</td>
                    <td>{selectedData.pre_blow || ''}</td>
                    <td>{selectedData.recycle || ''}</td>
                    <td>{selectedData.cycle || ''}</td>
                    <td>{selectedData.serial_num || ''}</td>
                  </tr>
                  ))}
              </tbody>
            </table>

            <table className="table table-striped-columns"  id = 'mid1'>
              <thead>
                <tr> 
                  <th>組裝人員</th>
                  <th>製令單號</th>
                  <th>廠訂</th>
                </tr>
              </thead>
              <tbody>
              {selectedData.estimated_date.map((_, index) => (
                  <tr key={index}>
                     <td>{selectedData.package_person || ''}</td>
                    <td>{selectedData.order_num || ''}</td>                    
                    <td>{selectedData.factory_order || ''}</td>
                  </tr>
                  ))}
              </tbody>
            </table>

            <table className="table table-striped-columns"  id = 'mid2'>
              <thead>
                <tr>
                  <th>預計日期</th>
                  <th>完成日期</th>
                  <th>填寫人員</th>
                  <th>覆核人員</th>
                </tr>
              </thead>
              <tbody>
              {selectedData.estimated_date.map((_, index) => (
                  <tr key={index}>
                    <td>{selectedData.estimated_date[index] || ''}</td>
                    <td>{selectedData.completion_date[index] || ''}</td>
                    <td>{selectedData.fill_person[index] || ''}</td>
                    <td>{selectedData.reviewer[index] || ''}</td>
                  </tr>
                  ))}
              </tbody>
            </table>

            <table className="table table-striped-columns"  id = 'under'>
              <thead>
                <tr>
                  <th>出貨日期</th>
                  <th>客戶名稱</th>
                  <th>機台編號</th>
                  <th>廠訂注意事項</th>
                  <th>填寫人</th>
                  <th>覆核人</th>
                  <th>檢驗結果</th>
                </tr>
              </thead>
              <tbody>
              {selectedData.estimated_date.map((_, index) => (
                  <tr key={index}>
                    <td>{selectedData.ship_date || ''}</td>
                    <td>{selectedData.country || ''}</td>
                    <td>{selectedData.model_name || ''}</td>
                    <td>{selectedData.factory_order_notes[index] || ''}</td>
                    <td>{selectedData.fill_in_person[index] || ''}</td>
                    <td>{selectedData.reviewer2[index] || ''}</td>
                    <td>{selectedData.result[index] || ''}</td>
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

export default RC
