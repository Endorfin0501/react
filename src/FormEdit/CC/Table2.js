import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../url';

const modelname = (model) => {
    switch (model) {
      case 'L機':
        return 'LCommissioningCompletes';
      case '鳳凰':
        return 'PCommissioningCompletes';
      case '一段式':
        return 'OCommissioningCompletes';
      default:
        return ''; // 处理不匹配的情况
    }
  };


const Table2 = ({ initialData, onSave, onCancel, id, index }) => {
  const [formData, setFormData] = useState(initialData);
  const location = useLocation();
  const { state } = location;
  const model = state?.model;
  const repair_name = state?.repairName;

  console.log(formData)

  // 在这里定义特定字段及其属性
  const fields = [
    { name: 'testitems', placeholder: '檢驗項目', readOnly: true  },
    { name: 'remark', placeholder: '備註' },
    { name: 'self_check', placeholder: '自主檢查(OK/NG)' },
    { name: 'quality_assurance', placeholder: '品保複檢(OK/NG)' },
    { name: 'completion_date', placeholder: '完成日期' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData || !formData.id) {
      console.error('No ID found in formData:', formData);
      return;
    }

    try {
      const response = await axios.get(
        `${URL}/check-locks/${encodeURIComponent(repair_name)}/${encodeURIComponent(modelname(model))}`
      );
      const isLocked = response.data.locks;

      if (isLocked) {
        alert('無法進行操作，此表單已在電腦版被鎖定！請連絡相關人員進行解除');
        return;
      }

      const payload = {
        id: id,
        index: index,
        quality_assurance: formData.quality_assurance,
        remark: formData.remark,
        self_check: formData.self_check,
        completion_date: formData.completion_date,
        models: `${modelname(model)}`, // 这里填入模型名称
        serializer: `${modelname(model)}Serializer`, // 这里填入序列化器名称
    };
    
    const updateResponse = await fetch(`${URL}/api/update/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (updateResponse.ok) {
        const updatedData = await updateResponse.json();
        onSave(updatedData);
        onCancel();
        window.location.reload();
      } else {
        console.error('Error updating item:', await updateResponse.text());
        console.error('The data:',payload)
      }
    } catch (error) {
      console.error('Error in handleEditSubmit:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Form.Group controlId={field.name} key={field.name}>
          <Form.Label>{field.placeholder}</Form.Label>
          <Form.Control
            type="text"
            name={field.name}
            value={formData?.[field.name] || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
            readOnly={field.readOnly}
          />
        </Form.Group>
      ))}

      <Button variant="primary" type="submit">
        更改
      </Button>
      <Button variant="secondary" onClick={onCancel}>
        取消
      </Button>
    </Form>
  );
};

export default Table2;
