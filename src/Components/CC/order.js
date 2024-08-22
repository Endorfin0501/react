import React, { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CCInsert from '../../FormInsert/CC';
import CCEdit3 from '../../FormEdit/CC/order'; // 确保使用正确的组件

function Order({ data: propData }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCCModal, setShowCCModal] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [editData, setEditData] = useState({}); // 保存编辑数据
  const [showSelectModal, setShowSelectModal] = useState(false); // 添加状态以控制选择操作模态框的显示

  const longPressTimerRef = useRef(null);

  // 处理数组数据
  const generateTableRows = () => {
    if (!propData) {
      return <h2>查無資料...</h2>;
    }

    // 确保各字段是数组
    const orderItems = Array.isArray(propData.orderitems) ? propData.orderitems : [];
    const orderNotes = Array.isArray(propData.ordernote) ? propData.ordernote : [];
    const orderCtg = Array.isArray(propData.orderctg) ? propData.orderctg : [];
    const orderRes = Array.isArray(propData.orderres) ? propData.orderres : [];
    const orderFir = Array.isArray(propData.orderfir) ? propData.orderfir : [];
    const orderSec = Array.isArray(propData.ordersec) ? propData.ordersec : [];
    const orderCompDate = Array.isArray(propData.ordercompdate) ? propData.ordercompdate : [];

    // 计算表格的最大行数
    const numRows = Math.max(
      orderItems.length,
      orderNotes.length,
      orderCtg.length,
      orderRes.length,
      orderFir.length,
      orderSec.length,
      orderCompDate.length
    );

    return Array.from({ length: numRows }).map((_, index) => (
      <tr
        key={index}
        onTouchStart={handleLongPressStart(index)}
        onTouchEnd={handleLongPressEnd}
        onMouseDown={handleLongPressStart(index)}
        onMouseUp={handleLongPressEnd}
      >
        <td>{index + 1}</td> {/* 累计的项次 */}
        <td>{orderItems[index] || 'N/A'}</td>
        <td>{orderNotes[index] || 'N/A'}</td>
        <td>{orderCtg[index] || 'N/A'}</td>
        <td>{orderRes[index] || 'N/A'}</td>
        <td>{orderFir[index] || 'N/A'}</td>
        <td>{orderSec[index] || 'N/A'}</td>
        <td>{orderCompDate[index] || 'N/A'}</td>
      </tr>
    ));
  };

  const handleLongPressStart = (index) => (event) => {
    event.preventDefault(); // 防止默认行为
    setSelectedRowIndex(index);

    longPressTimerRef.current = setTimeout(() => {
      setShowSelectModal(true); // 显示选择操作模态框
    }, 1000); // 1秒的长按
  };

  const handleLongPressEnd = () => {
    clearTimeout(longPressTimerRef.current);
  };

  const handleEditModalClose = () => setShowEditModal(false);
  const handleSelectModalClose = () => setShowSelectModal(false);

  const handleEditButtonClick = () => {
    // 关闭选择操作模态框并显示编辑数据模态框
    setShowSelectModal(false);
    setEditData({
      // 根据选中的行索引设置编辑数据
      orderitems: propData.orderitems[selectedRowIndex],
      ordernote: propData.ordernote[selectedRowIndex],
      orderctg: propData.orderctg[selectedRowIndex],
      orderres: propData.orderres[selectedRowIndex],
      orderfir: propData.orderfir[selectedRowIndex],
      ordersec: propData.ordersec[selectedRowIndex],
      ordercompdate: propData.ordercompdate[selectedRowIndex],
      id: propData.id, // 确保这里传递 id
      index: selectedRowIndex,
    });
    setShowEditModal(true); // 显示编辑数据模态框
  };

  const handleUploadButtonClick = () => {
    setShowSelectModal(false); // 关闭选择操作模态框
    setShowCCModal(true); // 显示CC模态框
  };

  return (
    <div>
      <h1>客戶廠訂特殊需求</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>項次</th>
            <th>檢驗項目</th>
            <th>備註</th>
            <th>類別</th>
            <th>權責</th>
            <th>自主檢查(OK/NG)</th>
            <th>品保覆檢(OK/NG)</th>
            <th>完成日期</th>
          </tr>
        </thead>
        <tbody>
          {generateTableRows()}
        </tbody>
      </table>

      {/* 选择操作 Modal */}
      <Modal show={showSelectModal} onHide={handleSelectModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>選擇操作</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUploadButtonClick}>
            上傳
          </Button>
          <Button variant="primary" onClick={handleEditButtonClick}>
            編輯
          </Button>
          <Button variant="secondary" onClick={handleSelectModalClose}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>

      {/* CC Insert Modal */}
      <CCInsert
        show={showCCModal}
        handleClose={() => setShowCCModal(false)}
        repairName={propData.repair_name}
      />

      {/* 编辑数据 Modal */}
      <CCEdit3
        show={showEditModal}
        handleClose={handleEditModalClose}
        data={editData}
        onSave={(updatedData) => {
          // 这里可以处理保存数据的逻辑
          console.log('Data saved:', updatedData);
        }}
      />
    </div>
  );
}

export default Order;
