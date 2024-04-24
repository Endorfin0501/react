import React from 'react'

function FPADataParse({ data }) {
  // 解构数据
  const {
    repair_name,
    order_num,
    date,
    pic_num,
    material,
    problem,
    fix_deal,
    times,
    fill_person,
    department,
    department_director,
    note,
  } = data

  // 将字符串数组转换为数组
  const parseArrayString = (str) => JSON.parse(str)

  // 渲染表格行
  const renderTableRow = (label, value) => (
    <tr>
      <td>{label}</td>
      <td>
        {value.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </td>
    </tr>
  )

  return (
    <div>
      <h1>{repair_name}</h1>
      <table className='table'>
        <tbody>
          {renderTableRow('機台編號', [repair_name])}
          {renderTableRow('製令編號', [order_num])}
          {renderTableRow('日期', parseArrayString(date))}
          {renderTableRow('圖號', parseArrayString(pic_num))}
          {renderTableRow('料件名稱', parseArrayString(material))}
          {renderTableRow('問題點與原因分析', parseArrayString(problem))}
          {renderTableRow('修改情形與後續處理', parseArrayString(fix_deal))}
          {renderTableRow('耗費工時', parseArrayString(times))}
          {renderTableRow('填寫人', parseArrayString(fill_person))}
          {renderTableRow('權責單位', parseArrayString(department))}
          {renderTableRow('單位主管', parseArrayString(department_director))}
          {renderTableRow('備註', parseArrayString(note))}
        </tbody>
      </table>
    </div>
  )
}

export default FPADataParse
