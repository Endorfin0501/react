import React from 'react'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function CC() {
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
        form={`${formtitle(model)}CommissioningCompletes`}
      >
        {(selectedData) => (
          <div>
            {/* 渲染A.js组件需要的属性 */}
            <p>Model: {selectedData && selectedData.model}</p>
          </div>
        )}
      </MainData>
    </div>
  )
}

export default CC
