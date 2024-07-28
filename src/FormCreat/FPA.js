import React from 'react';
import DynamicCreatForm from './DynamicCreatForm';
import { URL } from '../url';
import { Modal, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const fields = [
    { name: 'repair_name', placeholder: '機台名稱' },
    { name: 'order_num', placeholder: '製令編號' },
    { name: 'model_principal', placeholder: '機台負責人' },
    { name: 'primary_director', placeholder: '部門主管' },
];

// 定义默认值对象
const defaultValues = {
    // 其他字段和默认值
    date: '無',
    pic_num: '無',
    material: '無',
    problem: '無',
    fix_deal: '無',
    times: '無',
    fill_person: '無',
    department: '無',
    department_director: '無',
    note: '無',
};

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

const FPA = ({ show, handleClose }) => {
    const location = useLocation();
    const state = location.state;
    const model = state?.model; // 从 state 中提取 model 值

    console.log('Received model:', model); // 输出 model 值
    console.log('Model name:', modelname(model)); // 输出 modelName
  return (
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>創建表單</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <DynamicCreatForm 
                fields={fields} 
                defaultValues={defaultValues} 
                endpoint={`${URL}/create/`} 
                modelName={modelname(model)} />
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                  關閉
              </Button>
          </Modal.Footer>
      </Modal>
  );
};

export default FPA;