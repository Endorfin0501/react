import React, { useState, useRef, useEffect } from 'react'
import '../../style.css'
import SREdit from '../../FormEdit/SR'
import { URL } from '../../url'

const SR_Table = ({
  data,
  selectedData,
  tablenum,
  radiocount,
  signcount,
  standard,
}) => {
  const [showEditModal, setShowEditModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', description: '' })

  const assembleSignIndex = useRef(0)
  const assemblestandardIndex = useRef(0)

  if (!data || data.length === 0) {
    return <p>No data available</p>
  }

  console.log('the selectedData', selectedData || 'N/A')

  const getResultText = (value) => {
    if (value === 'pass') {
      return 'Yes'
    } else if (value === 'fail') {
      return 'No'
    } else {
      return ''
    }
  }

  const getResultText2 = (value) => {
    if (value === 'pass') {
      return '合格'
    } else if (value === 'fail') {
      return '不合格'
    } else {
      return 'N/A'
    }
  }

  const formtitle = (model) => {
    switch (model) {
      case 'L機':
        return 'CPSB-L機'
      case '鳳凰':
        return 'CPSB-鳳凰'
      case '一段式':
        return 'CPSB-S10-3'
      default:
        return '' // Default
    }
  }

  const formtable = (model) => {
    switch (model) {
      case 'L機':
        return 'LStandardRecord'
      case '鳳凰':
        return 'PStandardRecord'
      case '一段式':
        return 'OStandardRecord'
      default:
        return '' // Default
    }
  }

  let globalSIndex = 0
  let globestandard = standard

  const renderStandardWithInput = (standard) => {
    const parts = standard.split('\n')
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.includes('{input}')
          ? part.split('{input}').map((subPart, subIndex) => (
              <React.Fragment key={subIndex}>
                {subPart}
                {subIndex < part.split('{input}').length - 1 && (
                  <b>
                    {(selectedData?.teststandard &&
                      selectedData.teststandard[
                        assemblestandardIndex.current++ + globestandard - 1
                      ]) ||
                      'N/A'}
                  </b>
                )}
              </React.Fragment>
            ))
          : part}
        {index < parts.length - 1 && <br />}
      </React.Fragment>
    ))
  }

  const handleEditClick = () => {
    const initialFormData = {
      tableData: data, // 传递整个表格数据
      selectedData: selectedData, // 传递selectedData
      tablenum: tablenum,
      radiocount: radiocount,
      signcount: signcount,
      standard: standard,
    }
    setFormData(initialFormData)
    assembleSignIndex.current = 0 // 重置為初始值
    assemblestandardIndex.current = 0 // 重置為初始值
    setShowEditModal(true)
  }

  const handleSave = async () => {
    try {
      if (selectedData.locks === true) {
        console.error('Upload is disabled.') // 在控制台中显示消息
        alert('無法進行操作，此表單已在電腦版被鎖定！ 請連絡相關人員進行解除') // 显示警告消息
        window.location.reload()
        return // 退出函数，阻止后续代码执行
      }

      // 将 assemblesign 中的 undefined 替换为 null
      const assemblesign = formData.selectedData.assemblesign.map((item) =>
        item === undefined ? '' : item
      )

      const checkresult = formData.selectedData.checkresult.map((value) =>
        value === undefined ? 0 : value
      )

      // 确保 checkresult 是一个有效的数组
      if (!Array.isArray(checkresult)) {
        throw new Error('checkresult must be an array.')
      }

      const payload = {
        assemblesign: assemblesign,
        checkresult: checkresult,
        teststandard: formData.selectedData.teststandard,
        judge: formData.selectedData.judge,
        testdate: formData.selectedData.testdate,
        table_name: formtable(selectedData?.modelname),
        RepairName: selectedData.repairname,
      }

      console.log('payload', payload)

      const response = await fetch(`${URL}/api/upload_SR/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        // 上傳成功，關閉模態框
        handleClose()
        console.log('Data saved successfully')
        window.location.reload()
        // 根據需求，可清空 formData 或重置狀態
        setFormData(null)
      } else {
        console.error('Failed to save data:', response.statusText)
      }
    } catch (error) {
      console.error('Error saving data:', error)
    }
  }

  const handleClose = () => {
    assembleSignIndex.current = 0 // 重置為初始值
    assemblestandardIndex.current = 0 // 重置為初始值
    setShowEditModal(false)
  }

  return (
    <div className='table-container'>
      <button
        className='edit-button'
        onClick={handleEditClick} // 处理点击事件的函数
      >
        編輯
      </button>

      <SREdit
        show={showEditModal}
        handleClose={handleClose}
        formData={formData}
        setFormData={setFormData}
        handleSave={handleSave}
        radiocount={radiocount}
      />

      <table className='table table-striped'>
        <thead>
          <tr>
            <th>檢驗日期</th>
            <th>機台編號</th>
            <th>機種名稱</th>
            <th>判定</th>
            <th>表格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedData?.testdate[tablenum] || 'N/A'}</td>
            <td>{selectedData?.repairname}</td>
            <td>{`${formtitle(selectedData?.modelname)}`}</td>
            <td>
              合格/不合格:{' '}
              <b>{getResultText2(selectedData?.judge[tablenum]) || 'N/A'}</b>
            </td>
            <td>第{tablenum + 1}張</td>
          </tr>
        </tbody>
      </table>

      <table className='table table-striped'>
        <thead>
          <tr>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>項次</th>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>
              檢驗項目
            </th>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>
              檢驗方法
            </th>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>
              檢驗標準
            </th>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>
              組裝人員/檢驗人員
            </th>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>
              初檢(Yes/No)
            </th>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>
              覆檢(Yes/No)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((section, secIndex) => {
            let isAssembleSignRendered = false

            return (
              <React.Fragment key={secIndex}>
                {section.items &&
                  section.items.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      {item.methods &&
                        item.methods.map((methodObj, mIndex) => (
                          <React.Fragment key={mIndex}>
                            {methodObj.standards &&
                              methodObj.standards.map((standard, sIndex) => {
                                globalSIndex++ // 递增全局变量

                                return (
                                  <tr key={sIndex}>
                                    {sIndex === 0 &&
                                      mIndex === 0 &&
                                      itemIndex === 0 && (
                                        <td
                                          rowSpan={section.items.reduce(
                                            (acc, i) =>
                                              acc +
                                              i.methods.reduce(
                                                (acc, m) =>
                                                  acc + m.standards.length,
                                                0
                                              ),
                                            0
                                          )}
                                        >
                                          {section.section}
                                        </td>
                                      )}
                                    {sIndex === 0 && mIndex === 0 && (
                                      <td
                                        rowSpan={item.methods.reduce(
                                          (acc, m) => acc + m.standards.length,
                                          0
                                        )}
                                      >
                                        {item.item}
                                      </td>
                                    )}
                                    {sIndex === 0 && (
                                      <td rowSpan={methodObj.standards.length}>
                                        {methodObj.method
                                          .split('\n')
                                          .map((method, i) => (
                                            <div key={i}>{method}</div>
                                          ))}
                                      </td>
                                    )}
                                    <td>{renderStandardWithInput(standard)}</td>
                                    {!isAssembleSignRendered && (
                                      <td
                                        rowSpan={section.items.reduce(
                                          (acc, i) =>
                                            acc +
                                            i.methods.reduce(
                                              (acc, m) =>
                                                acc + m.standards.length,
                                              0
                                            ),
                                          0
                                        )}
                                      >
                                        {section.sign &&
                                        Array.isArray(section.sign.type)
                                          ? section.sign.type.map(
                                              (signElement, index) => (
                                                <React.Fragment key={index}>
                                                  {/* 渲染 `signElement` */}
                                                  {selectedData?.assemblesign[
                                                    assembleSignIndex.current++ +
                                                      signcount
                                                  ] || 'N/A'}
                                                  {index <
                                                    section.sign.type.length -
                                                      1 && <br />}{' '}
                                                  {/* 在多個簽名之間添加換行 */}
                                                </React.Fragment>
                                              )
                                            )
                                          : selectedData?.assemblesign[
                                              assembleSignIndex.current++ +
                                                signcount
                                            ] || 'N/A'}

                                        {(isAssembleSignRendered = true)}
                                      </td>
                                    )}

                                    <td>
                                      {selectedData?.checkresult
                                        ? getResultText(
                                            selectedData.checkresult[
                                              2 * (globalSIndex + radiocount) -
                                                1
                                            ]
                                          )
                                        : 'N/A'}
                                    </td>
                                    <td>
                                      {selectedData?.checkresult
                                        ? getResultText(
                                            selectedData.checkresult[
                                              2 * (globalSIndex + radiocount)
                                            ]
                                          )
                                        : 'N/A'}
                                    </td>
                                  </tr>
                                )
                              })}
                          </React.Fragment>
                        ))}
                    </React.Fragment>
                  ))}
              </React.Fragment>
            )
          })}
          <tr>
            <td colSpan='8'>
              <div
                style={{ borderTop: '2px solid black', marginTop: '10px' }}
              ></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SR_Table
