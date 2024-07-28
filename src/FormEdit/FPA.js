import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DynamicEditForm from './DynamicEditForm';
import { useLocation } from 'react-router-dom';
import { URL } from '../url';

function FPA({ show, handleClose, data = {}, onSave = () => {} }) {
  const [editForm, setEditForm] = useState(data);
  const location = useLocation();
  const { state } = location;
  const model = state?.model; // 从 state 中提取 model 值

  const modelname = (model) => {
    switch (model) {
      case 'L機':
        return 'LFieldPartAssembly';
      case '鳳凰':
        return 'PFieldPartAssembly';
      case '一段式':
        return 'OFieldPartAssembly';
      default:
        return ''; // 处理不匹配的情况
    }
  };

  // 只在 `data` 变化时更新本地表单状态
  useEffect(() => {
    setEditForm(data);
  }, [data]);

 const handleEditChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field: ${name}, New Value: ${value}`);
    setEditForm(prevForm => ({
        ...prevForm,
        [name]: value
    }));
};


const handleEditSubmit = async () => {
    const index = 0; // 确保索引设置正确

    // 确保 `editForm.date` 是正确的 JSON 格式
    let dateField = editForm.date;
    if (Array.isArray(dateField)) {
        dateField = JSON.stringify(dateField);  // 转换为 JSON 字符串
    }

    const cleanData = {
        ...editForm,
        index: index,
        date: dateField,
    };

    console.log('Data to be sent:', cleanData);  // 输出发送的数据

    try {
        const response = await fetch(`${URL}/update/${modelname(model)}/${editForm.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cleanData),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Updated Data:', data);
            onSave(); // 通知父组件数据已保存
        } else {
            const errorText = await response.text();
            console.error('Error updating item:', errorText);
        }
    } catch (error) {
        console.error('Error in handleEditSubmit:', error);
    }
};

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>编辑数据</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DynamicEditForm formData={editForm} onChange={handleEditChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleEditSubmit}>
          保存更改
        </Button>
        <Button variant="secondary" onClick={handleClose}>关闭</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FPA;
