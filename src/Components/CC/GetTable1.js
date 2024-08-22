import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import CCEdit1 from '../../FormEdit/CC/Table1'; // 确保引用了正确的编辑组件
import { URL } from '../../url';

function GetTable({ data: propData, url }) {
  const [fetchedData, setFetchedData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false); // 控制是否显示编辑表单
  const [pressTimer, setPressTimer] = useState(null);
  const [selectedData, setSelectedData] = useState(null); // 存储选中的数据

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/${url}`);
        setFetchedData(response.data);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };

    fetchData();
  }, [url]);

  const startPress = (data) => {
    setSelectedData(data);
    setPressTimer(setTimeout(() => setShowModal(true), 500)); // 长按 0.5 秒触发
  };

  const cancelPress = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowEditForm(false); // 关闭时重置编辑表单状态
    setSelectedData(null);
  };

  const handleEdit = () => {
    setShowModal(false); // 关闭第一个模态窗口
    setShowEditForm(true); // 显示编辑表单
  };

  const handleSave = (updatedData) => {
    console.log('Saved data:', updatedData);
    // 在此处添加保存逻辑，如发送请求以更新数据
    setShowEditForm(false); // 关闭编辑表单
    setSelectedData(null);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>機械自檢日</th>
            <th>缺失確認日期</th>
            <th>機種</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onPointerDown={() => startPress(propData)}
            onPointerUp={cancelPress}
            onPointerLeave={cancelPress}
          >
            <td>{propData?.selfinspection_day || 'N/A'}</td>
            <td>{propData?.missing_day || 'N/A'}</td>
            <td>{propData?.model || 'N/A'}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>品保終檢日</th>
            <th>5S確認日期</th>
            <th>機台編號</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onPointerDown={() => startPress(propData)}
            onPointerUp={cancelPress}
            onPointerLeave={cancelPress}
          >
            <td>{propData?.finalinspection_day || 'N/A'}</td>
            <td>{propData?.number_5s_day || 'N/A'}</td>
            <td>{propData?.repair_name || 'N/A'}</td>
          </tr>
        </tbody>
      </table>

      {/* 第一个模态窗口 - 选择操作 */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>選擇操作</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleEdit}>
            編輯
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 第二个模态窗口 - 编辑表单 */}
      <Modal show={showEditForm} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>編輯資料</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CCEdit1 
            initialData={selectedData} 
            onSave={handleSave} 
            onCancel={handleCloseModal} 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GetTable;
