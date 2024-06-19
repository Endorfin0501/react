import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function FormMainData({ repairName, name, form, children }) {
  const url = `http://192.168.2.176:8000/${form}/`
  const [data, setData] = useState([])
  const [selectedData, setSelectedData] = useState(null)

  const parseFields = (item) => {
    const fieldsToParse = [
      'order_num',
      'date',
      'pic_num',
      'material',
      'problem',
      'fix_deal',
      'times',
      'fill_person',
      'department',
      'department_director',
      'note',
      'mo_name',
      'num',
      'thing',
      'improve',
      'cost',
      'who',
      'unit',
      'supervisor',
      'setup_num',
      'purpose',
      'principal',
      'pic_name',
      'sign',
    ]

    fieldsToParse.forEach((field) => {
      if (typeof item[field] === 'string') {
        try {
          // 清理字符串，去掉首尾的单引号和双引号，并替换单引号为双引号
          let cleanedString = item[field]
            .replace(/^[']|[']$/g, '')
            .replace(/'/g, '"')
          // 删除控制字符
          cleanedString = cleanedString.replace(/[\x00-\x1F\x7F]/g, '')
          // 处理可能存在的转义字符问题
          cleanedString = cleanedString.replace(/\\'/g, "'")
          console.log(
            `Parsing field ${field} with cleaned value: ${cleanedString}`
          ) // 添加调试信息
          item[field] = JSON.parse(cleanedString)
        } catch (error) {
          console.error(
            `Error parsing field ${field}:`,
            error,
            `Original value: ${item[field]}`
          )
          item[field] = [] // 如果解析失败，将字段设为空数组
        }
      }
    })
    return item
  }

  const getData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log('Fetched data:', data) // 调试信息
      const parsedData = data.map(parseFields)
      setData(parsedData)
      if (repairName) {
        const selected = parsedData.find(
          (item) => item.repair_name === repairName
        )
        if (selected) {
          console.log('Selected data before initialization:', selected) // 调试信息
          setSelectedData(selected)
        }
      }
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    getData()
  }, [form]) //不要把中括號拿掉，會崩潰

  useEffect(() => {
    if (repairName) {
      const selected = data.find((item) => item.repair_name === repairName)
      if (selected) {
        console.log(
          'Selected data before initialization (useEffect):',
          selected
        ) // 调试信息
        setSelectedData(selected)
      }
    }
  }, [data, repairName])

  return (
    <>
      <h1>{name}</h1>
      {children(selectedData)}
    </>
  )
}

export default FormMainData
