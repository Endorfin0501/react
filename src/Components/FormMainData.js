import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { URL } from '../url'


function FormMainData({ repairName, name, form, children }) {
  const url = `${URL}/${form}/`
  const [data, setData] = useState([])
  const [selectedData, setSelectedData] = useState(null)

  const isValidJson = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

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

      'voltage',
      'hertz',
      'prepaid_date',
      'high_pressure',
      'pre_blow',
      'recycle',
      'cycle',
      'serial_num',
      'package_person',
      'factory_order',
      'estimated_date',
      'completion_date',
      'reviewer',
      'ship_date',
      'country',
      'model_name',
      'factory_order_notes',
      'fill_in_person',
      'reviewer2',
      'result',
      'user',
    ]

    fieldsToParse.forEach((field) => {
      if (typeof item[field] === 'string') {
        let cleanedString = item[field]
          .replace(/^[']|[']$/g, '')
          .replace(/'/g, '"');
        cleanedString = cleanedString.replace(/[\x00-\x1F\x7F]/g, '');
        cleanedString = cleanedString.replace(/\\'/g, "'");
       // console.log(`Parsing field ${field} with cleaned value: ${cleanedString}`);

        if (isValidJson(cleanedString)) {
          try {
            item[field] = JSON.parse(cleanedString);
          } catch (error) {
            console.error(`Error parsing field ${field}:`, error, `Original value: ${item[field]}`);
            item[field] = []; // 如果解析失败，将字段设为空数组
          }
        } else {
          item[field] = cleanedString; // 如果不是有效的 JSON 字符串，直接使用清理后的字符串
        }
      }
    });
    return item;
  };

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
         // console.log('Selected data before initialization:', selected) // 调试信息
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
        // console.log(
        //   'Selected data before initialization (useEffect):',
        //   selected
        // ) // 调试信息
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
