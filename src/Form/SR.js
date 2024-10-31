import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainData from '../Components/FormMainData'
import { useLocation } from 'react-router-dom'
import { LtableData1, LtableData2, LtableData3, LtableData4, LtableData5, LtableData6, LtableData7,
  PtableData1, PtableData2, PtableData3, PtableData4, PtableData5, PtableData6,
  OtableData1, OtableData2, OtableData3, OtableData4, OtableData5, OtableData6, OtableData7, OtableData8,
 } from '../Components/SR/SR_Table_Data'
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

  const formtext = (model) => {
    switch (model) {
      case 'L機':
        return '(L機直線式系列)'
      case '鳳凰':
        return '(適用於鳳凰滑塊系列、變色龍系列)'
      case '一段式':
        return '(CPSB-S10-3_一步法10穴拉吹機/本機3穴式生產)'
      default:
        return '' // Default
    }
  }


  return (
    <div>
      <h1>{name}</h1>
      <h2>{`${formtext(model)}`}</h2>
      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}SR`}
      >
         {(selectedData) => {
          // console.log('Selected Data in SR:', selectedData) // 调试信息
          
          if (formtitle(model) === 'L') {
            return (
              <div>
                <SR_Table data={LtableData1} selectedData={selectedData} tablenum={0} radiocount={0} signcount={0} standard={1} />
                <SR_Table data={LtableData2} selectedData={selectedData} tablenum={1} radiocount={18.5} signcount={5} standard={4} />
                <SR_Table data={LtableData3} selectedData={selectedData} tablenum={2} radiocount={37} signcount={11} standard={7} />
                <SR_Table data={LtableData4} selectedData={selectedData} tablenum={3} radiocount={54.5} signcount={15} standard={0} />
                <SR_Table data={LtableData5} selectedData={selectedData} tablenum={4} radiocount={74} signcount={20} standard={37} />
                <SR_Table data={LtableData6} selectedData={selectedData} tablenum={5} radiocount={93.5} signcount={26} standard={45} />
                <SR_Table data={LtableData7} selectedData={selectedData} tablenum={6} radiocount={112} signcount={32} standard={0} />

                <table className='table table-striped-columns'>
                    <thead>
                      <tr>
                        <th>機台負責人</th>
                        <th>審核</th>
                      </tr>
                    </thead> 
                    <tbody>
                      <tr>
                        <td>{selectedData?.model_principal || ''}</td>
                        <td>{selectedData?.audit || ''}</td>
                      </tr>
                    </tbody>
                  </table>
                  
              </div>
            )
          } else if (formtitle(model) === 'P') {
            return (
              <div>
                <SR_Table data={PtableData1} selectedData={selectedData} tablenum={0} radiocount={-0.5} signcount={0} standard={0} />
                <SR_Table data={PtableData2} selectedData={selectedData} tablenum={1} radiocount={18.5} signcount={5} standard={0} />
                <SR_Table data={PtableData3} selectedData={selectedData} tablenum={2} radiocount={35.5} signcount={9} standard={1} />
                <SR_Table data={PtableData4} selectedData={selectedData} tablenum={3} radiocount={51.5} signcount={15} standard={9} />
                <SR_Table data={PtableData5} selectedData={selectedData} tablenum={4} radiocount={67.5} signcount={20} standard={37} />
                <SR_Table data={PtableData6} selectedData={selectedData} tablenum={5} radiocount={85.5} signcount={26} standard={11} />

                <table className='table table-striped-columns'>
                    <thead>
                      <tr>
                        <th>機台負責人</th>
                        <th>審核</th>
                      </tr>
                    </thead> 
                    <tbody>
                      <tr>
                        <td>{selectedData?.model_principal || ''}</td>
                        <td>{selectedData?.audit || ''}</td>
                      </tr>
                    </tbody>
                  </table>

              </div>
            )
          } else if (formtitle(model) === 'O') {
            return (
              <div>
                <SR_Table data={OtableData1} selectedData={selectedData} tablenum={0} radiocount={-0.5} signcount={0} standard={0} />
                <SR_Table data={OtableData2} selectedData={selectedData} tablenum={1} radiocount={15.5} signcount={4} standard={1} />
                <SR_Table data={OtableData3} selectedData={selectedData} tablenum={2} radiocount={28.5} signcount={8} standard={0} />
                <SR_Table data={OtableData4} selectedData={selectedData} tablenum={3} radiocount={48.5} signcount={13} standard={0} />
                <SR_Table data={OtableData5} selectedData={selectedData} tablenum={4} radiocount={67.5} signcount={17} standard={0} />
                <SR_Table data={OtableData6} selectedData={selectedData} tablenum={5} radiocount={93.5} signcount={23} standard={0} />
                <SR_Table data={OtableData7} selectedData={selectedData} tablenum={6} radiocount={110.5} signcount={28} standard={3} />
                <SR_Table data={OtableData8} selectedData={selectedData} tablenum={7} radiocount={121.5} signcount={32} standard={0} />
                
                <table className='table table-striped-columns'>
                    <thead>
                      <tr>
                        <th>機台負責人</th>
                        <th>審核</th>
                      </tr>
                    </thead> 
                    <tbody>
                      <tr>
                        <td>{selectedData?.model_principal || ''}</td>
                        <td>{selectedData?.audit || ''}</td>
                      </tr>
                    </tbody>
                  </table>

              </div>
            )
          } else {
            return null
          }
        }}
      </MainData>
    </div>
  )
}

export default SR
