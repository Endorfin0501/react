import React from 'react'
import { URL } from '../url'
import DynamicCreatForm from './DynamicCreatForm' // 引入你之前的動態表單組件
import { useLocation } from 'react-router-dom'

const RC = ({ repairName }) => {
  const location = useLocation()
  const state = location.state
  const model = state?.model
  // 這裡是你想要的表單字段，可以根據需求進行調整
  const fields = [
    {
      name: 'repair_name',
      type: 'text',
      placeholder: '機號',
      value: `${repairName}`,
    },
    { name: 'hertz', type: 'text', placeholder: '電壓(HZ)' },
    { name: 'voltage', type: 'text', placeholder: '電壓(V)' },
    { name: 'prepaid_date', type: 'date', placeholder: '預交日期' },
    // 根據需要添加更多字段
  ]

  const modelname = (model) => {
    switch (model) {
      case 'L機':
        return 'LResumeCover'
      case '鳳凰':
        return 'PResumeCover'
      case '一段式':
        return 'OResumeCover'
      default:
        return '' // 处理不匹配的情况
    }
  }

  return (
    <div className='container'>
      <h2>創建新表單</h2>
      <DynamicCreatForm
        fields={fields}
        endpoint={`${URL}/create/`}
        modelName={modelname(model)}
        repair_name={repairName}
      />
    </div>
  )
}

export default RC
