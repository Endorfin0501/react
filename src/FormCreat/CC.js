import React, { useState, useEffect } from 'react'
import { URL } from '../url'
import DynamicCreatForm from './DynamicCreatForm' // 引入你之前的動態表單組件
import { useLocation } from 'react-router-dom'

const CC = ({ repair_name }) => {
  const [data, setData] = useState([])
  const [maxVersion, setMaxVersion] = useState(0)
  const location = useLocation()
  const state = location.state
  const model = state?.model

  const getData = async () => {
    try {
      const response = await fetch(`${URL}/${modeltitle(model)}SCC`)
      if (!response.ok) throw new Error('Failed to fetch data')
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      const maxVer = data.reduce((max, item) => {
        return item.version > max ? item.version : max
      }, 0)
      setMaxVersion(maxVer)
    }
  }, [data])

  // 這裡是你想要的表單字段，可以根據需求進行調整
  const fields = [
    {
      name: 'repair_name',
      type: 'text',
      placeholder: '機台編號',
      value: `${repair_name}`,
    },
    { name: 'dep_head', type: 'text', placeholder: '部門主管' },
    {
      name: 'version',
      type: 'text',
      placeholder: '總成版本',
      value: maxVersion.toString(),
    },
  ]
  console.log(maxVersion)

  const modelname = (model) => {
    switch (model) {
      case 'L機':
        return 'LCommissioningCompletes'
      case '鳳凰':
        return 'PCommissioningCompletes'
      case '一段式':
        return 'OCommissioningCompletes'
      default:
        return '' // 处理不匹配的情况
    }
  }

  const modeltitle = (model) => {
    switch (model) {
      case 'L機':
        return 'L'
      case '鳳凰':
        return 'P'
      case '一段式':
        return 'O'
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
        repair_name={repair_name}
        version={maxVersion}
      />
    </div>
  )
}

export default CC
