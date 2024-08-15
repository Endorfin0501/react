import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'
import { tableData1, tableData2, tableData3, tableData4, tableData5, tableData6, tableData7 } from '../Components/SR/SR_Table_Data'
import SR_Table from '../Components/SR/SR_Table'
import '../style.css'

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

  return (
    <div>
      <h1>{name}</h1>
      <h2>(L機直線式系列)</h2>
      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}SR`}
      >
        {(selectedData) => {
          console.log('Selected Data in SR:', selectedData) // 调试信息
          return (
            <div>
              <SR_Table data={tableData1} selectedData={selectedData} tablenum = {0} radiocount = {0} signcount = {0}/>
              <SR_Table data={tableData2} selectedData={selectedData} tablenum = {1} radiocount = {18.5} signcount = {5} />
              <SR_Table data={tableData3} selectedData={selectedData} tablenum = {2} radiocount = {37} signcount = {11} />
              <SR_Table data={tableData4} selectedData={selectedData} tablenum = {3} radiocount = {54.5} signcount = {15}  />
              <SR_Table data={tableData5} selectedData={selectedData} tablenum = {4} radiocount = {74} signcount = {20} />
              <SR_Table data={tableData6} selectedData={selectedData} tablenum = {5} radiocount = {93.5} signcount = {26} />
              <SR_Table data={tableData7} selectedData={selectedData} tablenum = {6} radiocount = {112} signcount = {32} />
            </div>
          )
        }}
      </MainData>
    </div>
  )
}

export default SR
