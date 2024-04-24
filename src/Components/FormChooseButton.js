import React from 'react'
import { useNavigate } from 'react-router-dom'

function FormChooseButton({ repairName, type, model }) {
  const navigate = useNavigate()

  const handleButtonClick = (repairName, type, model, name) => {
    console.log('Clicked button:', repairName, type)
    const url = `/Form${model}+${type}?repairName=${repairName}`
    navigate(url, { state: { repairName, name, model } }, { replace: false })
  }

  const name = type

  const formname = (name) => {
    switch (name) {
      case 'CC':
        return '試車完成最終檢驗記錄表'
      case 'FPA':
        return '現場零件組裝(異常)記錄表'
      case 'P':
        return '拉吹機運轉測試(異常)記錄表'
      case 'RC':
        return '履歷封面進度首頁'
      case 'S':
        return '設變紀錄表'
      case 'SR':
        return '組裝作業檢驗標準記錄表'
      default:
        return '' // Default
    }
  }

  return (
    <div>
      <button
        className={'btn btn-primary'}
        onClick={() =>
          handleButtonClick(repairName, type, model, formname(name))
        }
      >
        {formname(name)}
      </button>
    </div>
  )
}

export default FormChooseButton
