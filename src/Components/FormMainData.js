import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function FormMainData(prop) {
  const { repairName, name, form } = prop
  const url = `http://192.168.0.10:8000/${form}/`
  const [data, setData] = useState([])
  const [selectedData, setSelectedData] = useState(null)

  const getData = async () => {
    const respone = await fetch(url)
    const data = await respone.json()
    setData(data)
    if (repairName) {
      setSelectedData(data.find((item) => item.repair_name === repairName))
    }
  }

  useEffect(() => {
    getData()
  }, [repairName]) //不要把中括號拿掉，會崩潰

  useEffect(() => {
    if (repairName) {
      const selected = data.find((item) => item.repair_name === repairName)
      setSelectedData(selected)
    }
  }, [data, repairName])

  return (
    <>
      <h1>{name}</h1>
      {prop.children(selectedData)}
    </>
  )
}

export default FormMainData
