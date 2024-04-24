import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'

const url = 'http://192.168.0.10:8000/machine/'

function SerchMechineButton() {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const getData = async () => {
    const respone = await fetch(url)
    const data = await respone.json()
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const getButtonColor = (model) => {
    switch (model) {
      case 'L機':
        return 'btn-primary'
      case '鳳凰':
        return 'btn-secondary'
      case '一段式':
        return 'btn-success'
      default:
        return 'btn-primary' // Default color
    }
  }

  const handleButtonClick = (repairName, model) => {
    console.log('Clicked button:', repairName, model)
    const url = `/FormChoose?repairName=${repairName}&model=${model}`
    navigate(url, { state: { repairName, model } }, { replace: false })
  }

  return (
    <>
      {data.map((data) => {
        const { id, repair, model } = data
        return (
          <li key={id}>
            <button
              className={`btn ${getButtonColor(model)}`}
              name={model}
              onClick={() => handleButtonClick(repair, model)}
            >
              {repair} {model}
            </button>
          </li>
        )
      })}
    </>
  )
}

export default SerchMechineButton
