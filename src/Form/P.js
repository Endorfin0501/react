import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainData from '../Components/FormMainData';
import { useLocation } from 'react-router-dom';
import PCreat from '../FormCreat/P';
import PInsert from '../FormInsert/P';
import PEdit from '../FormEdit/P';
import PDelete from '../FormDelete/P';
import '../style.css';
import { Button, Modal } from 'react-bootstrap';

function P() {
  const location = useLocation();
  const [selectedData, setSelectedData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { state } = location;
  const { repairName, type, model, name } = state;

  const formtitle = (model) => {
    switch (model) {
      case 'L機':
        return 'L';
      case '鳳凰':
        return 'P';
      case '一段式':
        return 'O';
      default:
        return ''; // Default
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleShow2 = () => setShowModal2(true);
  const handleClose2 = () => setShowModal2(false);

  const handleShow3 = () => setShowModal3(true);
  const handleClose3 = () => setShowModal3(false);

  const handleShow4 = () => setShowModal4(true);
  const handleClose4 = () => setShowModal4(false);

  const handleShowActionModal = (index) => {
    if (selectedData && selectedData.date && selectedData.date.length > index) {
      const item = {
        id: selectedData.id, // 获取数据库中的 ID
        date: selectedData.date[index],
        pic_num: selectedData.num[index],
        material: selectedData.thing[index],
        problem: selectedData.problem[index],
        fix_deal: selectedData.improve[index],
        times: selectedData.cost[index],
        fill_person: selectedData.who[index],
        department: selectedData.unit[index],
        department_director: selectedData.supervisor[index],
        note: selectedData.note[index],
      };
      setSelectedIndex(index); // 保存当前行的索引
      setShowActionModal(true);
    }
  };

  const handleCloseActionModal = () => {
    setShowActionModal(false);
    setSelectedIndex(null);
  };

  const handleSave = (updatedData) => {
    console.log('Saved Data:', updatedData);
    // 在這裡處理保存邏輯
    // 例如更新狀態或調用 API
  };

  console.log('State:', state);

  return (
    <div className='container'>
      <h1>{name}</h1>

      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}P`}
      >
        {(data) => {
          setSelectedData(data); // 設置 selectedData
          if (!data) {
            return (
              <div>
                <Button variant='primary' onClick={handleShow}>
                  創建表單
                </Button>
                <PCreat show={showModal} handleClose={handleClose} />
              </div>
            );
          }

          return (
            <div>
              <Button variant='info' onClick={handleShow2}>
                上傳數據
              </Button>
              <PInsert show={showModal2} handleClose={handleClose2} repairName={repairName} />

              <div className='container'>
                <table className='table table-striped-columns' id='top1'>
                  <thead>
                    <tr>
                      <th>機台編號</th>
                      <th>製令編號</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.repair_name || ''}</td>
                      <td>{data.order_num || ''}</td>
                    </tr>
                  </tbody>
                </table>

                <table className='table table-striped-columns' id='top2'>
                  <thead>
                    <tr>
                      <th>日期</th>
                      <th>圖號</th>
                      <th>料件名稱</th>
                      <th>問題點與原因分析</th>
                      <th>修改情形與後續處理</th>
                      <th>耗費工時</th>
                      <th>填寫人</th>
                      <th>權責單位</th>
                      <th>單位主管</th>
                      <th>備註</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedData && selectedData.date ? (
                      selectedData.date.map((_, index) => (
                        <tr
                          key={index} // 使用索引作为 key
                          onMouseDown={() => handleShowActionModal(index)}
                          onTouchStart={() => handleShowActionModal(index)}
                        >
                          <td>{selectedData.date[index] || ''}</td>
                          <td>{selectedData.num[index] || ''}</td>
                          <td>{selectedData.thing[index] || ''}</td>
                          <td>{selectedData.problem[index] || ''}</td>
                          <td>{selectedData.improve[index] || ''}</td>
                          <td>{selectedData.cost[index] || ''}</td>
                          <td>{selectedData.who[index] || ''}</td>
                          <td>{selectedData.unit[index] || ''}</td>
                          <td>{selectedData.supervisor[index] || ''}</td>
                          <td>{selectedData.note[index] || ''}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan='11'>沒有數據</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Action Modal */}
              <Modal show={showActionModal} onHide={handleCloseActionModal}>
                <Modal.Header closeButton>
                  <Modal.Title>選擇操作</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Button variant='warning' onClick={handleShow3}>編輯</Button>
                  <PEdit show={showModal3} handleClose={handleClose3} data={selectedData} onSave={handleSave} />
                  {selectedIndex !== null && selectedData.date.length - 1 === selectedIndex && (
                    <Button variant='danger' onClick={handleShow4}>刪除</Button>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleCloseActionModal}>
                    關閉
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          );
        }}
      </MainData>
    </div>
  );
}

export default P;
