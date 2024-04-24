import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'

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

  console.log(state)

  return (
    <div>
      <h1>{name}</h1>
      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}FieldPartAssembly`}
      >
        {(selectedData) => (
          <div>
            <tr>
              <td>機台編號: {selectedData && selectedData.repair_name}</td>
              <td>製令編號: {selectedData && selectedData.order_name}</td>
              <td>日期: {selectedData && selectedData.date}</td>
              <td>圖號: {selectedData && selectedData.pic_num[1]}</td>
              <td>料件名稱: {selectedData && selectedData.material}</td>
              <td>問題點與原因分析: {selectedData && selectedData.problem}</td>
              <td>
                修改情形與後續處理: {selectedData && selectedData.fix_deal}
              </td>
              <td>耗費工時: {selectedData && selectedData.times}</td>
              <td>填寫人: {selectedData && selectedData.fill_person}</td>
              <td>權責單位: {selectedData && selectedData.department}</td>
              <td>
                單位主管: {selectedData && selectedData.department_director}
              </td>
              <td>備註: {selectedData && selectedData.note}</td>
              {console.log(selectedData)}
            </tr>
          </div>
        )}
      </MainData>
    </div>
  )
}

export default FPA
