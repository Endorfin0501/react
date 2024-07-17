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

  const table1 = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'A10',
    'A11',
    'A12',
    'A13',
    'A14',
    'A15',

  ]

  const table2 =[
    '機台外觀部份(含成型台)',
    '機身與模架底板安裝',
    '成型組裝',
    '成型底模組組裝',
    '成型連桿組組裝',
    
    '成型模板組組裝',
    '成型系統',
    '頂板安裝(一)',
    '封口系統組組裝',
    '拉桿系統組組裝(含齒排)',

    '脫胚爪系統組裝',
    '線軌軌道組組裝(含軌道固定座)',
    '變節距夾臂校正組裝作業',
    '品保覆驗人員',
    '變節距系統組',
    '變節距動力組',
  ]

  const table3 = [
    '目視,手動',
    '目視,手動,量測',
    '目視,手動',
    '目視,手動',
    '目視,手動',
    '目視,手動',
    '手動',
    '目視,手動,量測',
    '目視,手動',
    '目視,手動',
    '目視,手動',
    '目視,手動,量測',
    '目視,手動',
    '量測(間距)112 +0.10/-0',
    '量測(垂直度)0.05以內',
    '目視,手動',
    '目視,手動,量測',
  ]

  const table4 = [
    '1.目視外觀噴漆是否良好',
    '2.目視機身外觀是否無變形現象',
    '3.目視焊道及接頭是否正確良好',
    '4.安裝防震腳墊是否無干涉現象',
    '5.機台定位後是否使用水平尺校驗',

    '1.安裝時是否無干涉現象',
    '2.機身及模架底板孔位是否正常',
    '3.安裝時是否牢固確實',
    '4.螺絲鎖緊並依螺絲規格上磅數',

    '1.安裝時是否無干涉現象',
    '2.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
    '3.安裝後動作正確且無損料',

    '1.安裝時是否無干涉現象',
    '2.安裝時是否牢固確實',
    '3.安裝後動作正確且無損料',

    '1.安裝時是否無干涉現象',
    '2.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
    '3..安裝後動作正確且無損料',

    '1.系統完成組裝後，以手推動是否順暢',
    '2.定位桿是否安裝牢固',
    '3.安裝時是否牢固確實',

    '1.安裝時是否無干涉現象',
    '2.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
    '3.螺絲鎖緊並依螺絲規格上磅數',
    '螺絲規格:',
    '磅數',
    '品保覆驗人員',

    '1.安裝時是否無干涉現象',
    '2.安裝時是否牢固確實',
    '3.封口作動測試是否順暢、漏氣測試時間：1小時 (測試台測試)',

    '1.安裝時是否無干涉現象',
    '2.安裝時是否牢固確實',
    '3.伺服馬達安裝是否正確',

    '1.變節距夾爪安裝是否確實',
    '2.變節距夾爪安裝是否無干涉現象',
    '3.手動測試功能是否正常',

    '1.料件安裝時是否無干涉現象',
    '2.安裝時是否牢固確實，螺絲鎖緊請依附件一螺絲扭力規定上磅數',
    '3.線軌平行度標準0.03mm',
    '品保覆驗人員',
    '覆驗平行度',
    '1.料件安裝時是否無干涉',
    '2.料件是否有色差之現象',
    '3.安裝時是否牢固確實',

    '1:',
    '2:',
    '3:',
    '4:',
    '5:',
    '6:',
    '7:',
    '8:',
    '9:',
    '10:',
    '11:',
    '12:',

    '1:',
    '2:',
    '3:',
    '4:',
    '5:',
    '6:',
    '7:',
    '8:',
    '9:',
    '10:',
    '11:',
    '12:',

    '1.料件安裝時是否無干涉現象',
    '2.安裝時是否牢固確實',
    '3.安裝後以手推動是否順暢',

    '1.時規皮帶輪及皮帶安裝是否正確',
    '2.安裝時是否牢固確實',
    '3.使用皮帶張力器測試皮帶張力(CP-QO-237皮帶張力測試檢測標準操作說明)',
    '品保覆驗人員',
    '標準',
    '實測',
  ]

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
           if (
            !selectedData ||
            !selectedData.checkresult ||
            !Array.isArray(selectedData.checkresult)
          ) {
            return <p>Loading...</p>
          }

          console.log('Selected Data in SR:', selectedData) // 调试信息
          return (
            <div>
              <table className='table table-striped-columns' id='sr_table1-1'>
                <thead>
                  <tr>
                    <th>機台編號</th>
                    <th>機種名稱</th>
                    <th>判定</th>
                    <th>檢驗日期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedData.repairname || ''}</td>
                    <td>CPSB-鳳凰</td>
                    <td>{selectedData.judge[0]}</td>
                    <td>{selectedData.testdate[0]}</td>
                  </tr>
                </tbody>
              </table>
              <table className='table table-striped-columns' id='sr_table1-2'>
                <thead>
                  <tr>
                    <th>項次</th>
                    <th>檢驗項目</th>
                    <th>檢驗方法</th>
                    <th>檢驗標準</th>
                    <th>組裝人員</th>
                    <th>檢驗結果</th>
                  </tr>
                </thead>
                <tbody>
                {selectedData.checkresult.map((_, index) => (
                    <tr key={index}>
                      <td>{table1[index]}</td>
                      <td>{table2[index] || ''}</td>
                      <td>{table3[index] || ''}</td>
                      <td>
                        {table4[index] || ''}
                      </td>
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

export default SR
