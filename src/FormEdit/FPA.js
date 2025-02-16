import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import DynamicEditForm from './DynamicEditForm'
import { URL } from '../url'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const modelname = (model) => {
  switch (model) {
    case 'L機':
      return 'LFieldPartAssembly'
    case '鳳凰':
      return 'PFieldPartAssembly'
    case '一段式':
      return 'OFieldPartAssembly'
    default:
      return '' // 处理不匹配的情况
  }
}

function FPAEdit({ show, handleClose, data = {}, onSave = () => {} }) {
  const [editForm, setEditForm] = useState(data)
  const location = useLocation()
  const { state } = location
  const model = state?.model
  const repair_name = state?.repairName
  console.log('repairname', repair_name)
  // console.log('Received model:', model) // 输出 model 值
  // console.log('Model name:', modelname(model)) // 输出 modelName

  useEffect(() => {
    setEditForm(data) // 当 data 变化时更新编辑表单
  }, [data])

  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const fields = [
    { name: 'date', type: 'date', placeholder: '日期' },
    { name: 'pic_num', placeholder: '圖號' },
    { name: 'material', placeholder: '料件名稱' },
    { name: 'problem', placeholder: '問題點與原因分析' },
    { name: 'fix_deal', placeholder: '修改情形與後續處理' },
    { name: 'times', placeholder: '耗費工時' },
    { name: 'fill_person', placeholder: '填寫人' },
    { name: 'department', placeholder: '權責單位' },
    { name: 'department_director', placeholder: '單位主管' },
    { name: 'note', placeholder: '備註' },
  ]

  const handleEditSubmit = async () => {
    if (!editForm || !editForm.id || editForm.index === undefined) {
      console.error('No ID or index found in editForm:', editForm)
      return
    }

    try {
      // 在提交前检查 locks 状态
      const response = await axios.get(
        `${URL}/check-locks/${encodeURIComponent(
          repair_name
        )}/${encodeURIComponent(modelname(model))}`
      )
      const isLocked = response.data.locks

      if (isLocked) {
        alert(' 無法進行操作，此表單已在電腦版被鎖定！ 請連絡相關人員進行解除')
        return
      }

      // 在请求体中包括模型名称和序列化器名称
      const payload = {
        ...editForm,
        models: `${modelname(model)}`, // 这里填入模型名称
        serializer: `${modelname(model)}Serializer`, // 这里填入序列化器名称
      }

      const updateResponse = await fetch(`${URL}/api/update/${editForm.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (updateResponse.ok) {
        const updatedData = await updateResponse.json()
        onSave(updatedData) // 调用父组件的 onSave 回调
        handleClose() // 关闭模态框
        window.location.reload()
      } else {
        console.error('Error updating item:', await updateResponse.text())
      }
    } catch (error) {
      console.error('Error in handleEditSubmit:', error)
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>編輯數據</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DynamicEditForm
          formData={editForm}
          onChange={handleEditChange}
          fields={fields}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={handleEditSubmit}>
          保存更改
        </Button>
        <Button variant='secondary' onClick={handleClose}>
          取消
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default FPAEdit
