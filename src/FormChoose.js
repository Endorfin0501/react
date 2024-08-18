import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Components/FormChooseButton'

function FormChoose() {
  // 使用 useLocation 钩子获取当前页面的位置对象
  const location = useLocation()

  // 从位置对象中提取状态数据
  const { state } = location
  const { repairName, model } = state
  const name = state.repairName
  const mod = state.model

  // 现在您可以在组件中使用提取的状态数据
  console.log('Repair Name:', repairName)
  console.log('Model:', model)

  // 在页面中渲染内容
  return (
    <div className='container'>
      <div className='button-group-vertical'>
        <h1>表單選擇</h1>
        <p>機台名稱: {repairName}</p>
        <p>機台種類: {model}</p>
        <Button repairName={name} type='RC' model={mod}></Button>
        <Button repairName={name} type='FPA' model={mod}></Button>
        <Button repairName={name} type='P' model={mod}></Button>
        <Button repairName={name} type='SR' model={mod}></Button>
        <Button repairName={name} type='CC' model={mod}></Button>
        <Button repairName={name} type='S' model={mod}></Button>
      </div>
    </div>
  )
}

export default FormChoose
