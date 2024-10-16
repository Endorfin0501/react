import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import '../style.css';

const EditModal = ({ show, handleClose, formData, setFormData, handleSave, radiocount }) => {
  // 確保在 formData 存在並且 tableData 存在的情況下進行操作
  useEffect(() => {
    if (!formData || !formData.tableData) return;

    const totalResults = getCheckResultsCount();

    if (!formData.selectedData) {
      const initialSelectedData = {
        assemblesign: Array(formData.tableData.length).fill(''),
        checkresult: Array(totalResults).fill('')
      };
      setFormData(prevData => ({
        ...prevData,
        selectedData: initialSelectedData
      }));
    } else {
      const updatedCheckResult = Array(totalResults).fill('').map((val, index) =>
        formData.selectedData.checkresult[index] !== undefined ? formData.selectedData.checkresult[index] : val
      );
      setFormData(prevData => ({
        ...prevData,
        selectedData: {
          ...prevData.selectedData,
          checkresult: updatedCheckResult
        }
      }));
    }
  }, [formData.tableData, setFormData]);

  console.log('formdata',formData.selectedData)

  const getCheckResultsCount = () => {
    return formData.tableData.reduce((acc, section) =>
      acc + section.items.reduce((acc, item) =>
        acc + item.methods.reduce((acc, methodObj) =>
          acc + methodObj.standards.length * 2  // 乘以2，因為有初檢和覆檢
        , 0)
      , 0)
    , 0);
  };

  const handleSignChange = (event, sectionIndex) => {
    const updatedSign = [...formData.selectedData.assemblesign];
    updatedSign[sectionIndex] = event.target.value;
    setFormData(prevData => ({
      ...prevData,
      selectedData: { ...prevData.selectedData, assemblesign: updatedSign }
    }));
  };

  const handleCheckResultChange = (event, sectionIndex, itemIndex, methodIndex, standardIndex, isInitial) => {
    // 深拷貝 current checkresult
    const updatedCheckResult = [...formData.selectedData.checkresult];
  
    // 計算每個檢查項目的長度，避免重複計算
    const itemLength = formData.tableData[sectionIndex].items.length;
    const methodLength = formData.tableData[sectionIndex].items[0].methods.length;
    const standardLength = formData.tableData[sectionIndex].items[0].methods[0].standards.length;
  
    // 計算結果索引
    const resultIndex = (
      sectionIndex * itemLength * methodLength * standardLength * 2 +  // 每個 section 的偏移
      itemIndex * methodLength * standardLength * 2 +                   // 每個 item 的偏移
      methodIndex * standardLength * 2 +                                // 每個 method 的偏移
      standardIndex * 2 +                                               // 每個標準的偏移
      (isInitial ? 0 : 1)                                               // 初檢 or 複檢
    );
  
    // 更新選擇結果
    updatedCheckResult[resultIndex] = event.target.value;
  
    // 更新狀態
    setFormData(prevData => ({
      ...prevData,
      selectedData: {
        ...prevData.selectedData,
        checkresult: updatedCheckResult
      }
    }));
  };
  

  if (!formData || !formData.tableData) {
    return null; // 如果沒有數據，早期返回
  }

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="custom-modal-lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>編輯表格</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxWidth: '100%', margin: '0 auto' }}>
        <Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }}>項次</th>
                <th style={{ textAlign: 'center' }}>檢驗項目</th>
                <th style={{ textAlign: 'center' }}>檢驗方法</th>
                <th style={{ textAlign: 'center' }}>檢驗標準</th>
                <th style={{ textAlign: 'center' }}>組裝人員/檢驗人員</th>
                <th style={{ textAlign: 'center' }}>初檢 (Yes/No)</th>
                <th style={{ textAlign: 'center' }}>覆檢 (Yes/No)</th>
              </tr>
            </thead>
            <tbody>
              {formData.tableData.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  {section.items.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      {item.methods.map((methodObj, methodIndex) => (
                        <React.Fragment key={methodIndex}>
                          {methodObj.standards.map((standard, standardIndex) => {
                            const globalIndex = (
                              sectionIndex * section.items.length * 
                              item.methods.length * 
                              methodObj.standards.length * 2
                            ) + (
                              itemIndex * item.methods.length * 
                              methodObj.standards.length * 2
                            ) + (
                              methodIndex * methodObj.standards.length * 2
                            ) + (
                              standardIndex * 2
                            ) + radiocount;

                            return (
                              <tr key={globalIndex + (radiocount + 1)}>
                                {standardIndex === 0 && methodIndex === 0 && itemIndex === 0 && (
                                  <td rowSpan={section.items.reduce((acc, i) => acc + i.methods.reduce((acc, m) => acc + m.standards.length, 0), 0)}>
                                    {section.section}
                                  </td>
                                )}
                                {standardIndex === 0 && methodIndex === 0 && (
                                  <td rowSpan={item.methods.reduce((acc, m) => acc + m.standards.length, 0)}>
                                    {item.item}
                                  </td>
                                )}
                                {standardIndex === 0 && (
                                  <td rowSpan={methodObj.standards.length}>
                                    {methodObj.method.split('\n').map((method, i) => (
                                      <div key={i}>{method}</div>
                                    ))}
                                  </td>
                                )}
                                <td>{standard}</td>
                                {standardIndex === 0 && methodIndex === 0 && itemIndex === 0 && (
                                  <td rowSpan={section.items.reduce((acc, i) => acc + i.methods.reduce((acc, m) => acc + m.standards.length, 0), 0)}>
                                    <Form.Control
                                      type="text"
                                      value={formData.selectedData.assemblesign[sectionIndex] || ''}
                                      onChange={(event) => handleSignChange(event, sectionIndex)}
                                    />
                                  </td>
                                )}
                                <td>
                                <Form.Control
                                  as="select"
                                  value={formData.selectedData.checkresult[globalIndex + (radiocount + 1)] || ''} // 初檢
                                  onChange={(event) => handleCheckResultChange(event, sectionIndex, itemIndex, methodIndex, standardIndex, true)}
                                >
                                  <option value="0">選擇</option>
                                  <option value="pass">Yes</option>
                                  <option value="fail">No</option>
                                </Form.Control>
                                </td>
                                <td>
                                <Form.Control
                                  as="select"
                                  value={formData.selectedData.checkresult[globalIndex + (radiocount + 1) + 1] || ''} // 覆檢
                                  onChange={(event) => handleCheckResultChange(event, sectionIndex, itemIndex, methodIndex, standardIndex, false)}
                                >
                                  <option value="0">選擇</option>
                                  <option value="pass">Yes</option>
                                  <option value="fail">No</option>
                                </Form.Control>
                                </td>
                              </tr>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          保存
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          取消
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
