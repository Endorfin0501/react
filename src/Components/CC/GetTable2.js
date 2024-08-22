import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import CCEdit2 from '../../FormEdit/CC/Table2';
import { URL } from '../../url';

function GetTable({ data: propData, url }) {
  const [fetchedData, setFetchedData] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [pressTimer, setPressTimer] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/${url}`)
      .then((response) => {
        setFetchedData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, [url]);

  const filteredData = fetchedData.filter(
    (item) => item.version === `${parseFloat(propData.version).toFixed(1)}`
  );

  const groupedData = filteredData.reduce((acc, item) => {
    if (!acc[item.assembly]) {
      acc[item.assembly] = [];
    }
    acc[item.assembly].push(item);
    return acc;
  }, {});

  const startPress = (item) => {
    setPressTimer(setTimeout(() => {
      setSelectedItem(item);
      setShowEditModal(true);
    }, 500)); // 长按 0.5 秒触发
  };

  const cancelPress = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedItem(null);
  };

  return (
    <div>
      {Object.keys(groupedData).map((assembly) => (
        <div key={assembly}>
          <h2>{assembly}</h2>
          <table className='table table-striped'>
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
              {groupedData[assembly].map((item) => (
                <tr
                  key={item.id}
                  onPointerDown={() => startPress(item)}
                  onPointerUp={cancelPress}
                  onPointerLeave={cancelPress}
                >
                  <td>{item.number}</td>
                  <td>{item.testitems}</td>
                  <td>{propData?.remark[item.number - 1]}</td>
                  <td>{item.category}</td>
                  <td>{item.responsibilities}</td>
                  <td>{propData?.self_check[item.number - 1] || 'N/A'}</td>
                  <td>{propData?.quality_assurance[item.number - 1] || 'N/A'}</td>
                  <td>{propData?.completion_date[item.number - 1] || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {selectedItem && (
        <Modal show={showEditModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>编辑</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CCEdit2 initialData={selectedItem} onSave={handleCloseModal} onCancel={handleCloseModal} id={propData.id} />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default GetTable;
