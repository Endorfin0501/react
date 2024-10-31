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
  }, [formData.checkresult, setFormData]);


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

     // 獲取輸入值
  const inputValue = event.target.value;
  console.log("Raw input value:", inputValue); // 查看原始輸入值

  // 更新顯示狀態
  setFormData(prevData => ({
    ...prevData,
    inputDisplay: inputValue // 直接使用輸入值進行顯示
  }));

  // 分割為數組，使用 ',' 作為分割符
  const updatedSignValue = inputValue.split(",").map(item => item.trim());
  console.log("Processed value split into array:", updatedSignValue); // 查看分割後的數組
  
    const updatedSign = [...formData.selectedData.assemblesign];
    updatedSign[sectionIndex + formData.signcount] = updatedSignValue;
    console.log("Updated assemblesign array:", updatedSign); // 查看更新後的 assemblesign
    setFormData(prevData => ({
      ...prevData,
      selectedData: { ...prevData.selectedData, assemblesign: updatedSign }
    }));
  };

  const handleCheckResultChange = (
    event,
    sectionIndex,
    itemIndex,
    methodIndex,
    standardIndex,
    isInitial
  ) => {
    const newCheckResult = [...formData.selectedData.checkresult];
  
    // 計算 updatedGlobalIndex，以確保更新到正確位置
    const updatedGlobalIndex = formData.tableData
      .slice(0, sectionIndex)
      .reduce(
        (acc, s) =>
          acc +
          s.items.reduce(
            (itemAcc, i) =>
              itemAcc +
              i.methods.reduce((methodAcc, m) => methodAcc + m.standards.length, 0),
            0
          ) * 2,
        0
      ) +
      formData.tableData[sectionIndex].items
        .slice(0, itemIndex)
        .reduce(
          (itemAcc, i) =>
            itemAcc +
            i.methods.reduce((methodAcc, m) => methodAcc + m.standards.length, 0),
          0
        ) * 2 +
      formData.tableData[sectionIndex].items[itemIndex].methods
        .slice(0, methodIndex)
        .reduce((methodAcc, m) => methodAcc + m.standards.length, 0) * 2 +
      standardIndex * 2;
  
    // 根據 isInitial 判斷更新初檢 (0) 或覆檢 (1)
    newCheckResult[updatedGlobalIndex + (isInitial ? 0 : 1) + (2 * radiocount + 1)] = event.target.value;
  
    // 更新狀態
    setFormData({
      ...formData,
      selectedData: {
        ...formData.selectedData,
        checkresult: newCheckResult,
      },
    });
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
                            // 在 tbody 渲染內部修改 globalIndex 計算方式
                              const globalIndex = formData.tableData
                              .slice(0, sectionIndex) // 計算當前 section 之前的 sections
                              .reduce(
                                (acc, s) =>
                                  acc + s.items.reduce((acc, i) => acc + i.methods.reduce((acc, m) => acc + m.standards.length, 0), 0) * 2,
                                0
                              ) +
                              section.items
                                .slice(0, itemIndex)
                                .reduce((acc, i) => acc + i.methods.reduce((acc, m) => acc + m.standards.length, 0), 0) * 2 +
                              item.methods
                                .slice(0, methodIndex)
                                .reduce((acc, m) => acc + m.standards.length, 0) * 2 +
                              (standardIndex * 2) ;
                                // console.log('formdata',formData)
                                // console.log('formdata',formData.selectedData)

                              // 获取 {input} 的数量
                              const inputMatches = standard.match(/{input}/g);
                              const numberOfInputs = inputMatches ? inputMatches.length : 0;

                              // 用于生成替换后的标准字符串
                              const replacedStandard = numberOfInputs > 0
                                ? standard.split(/{input}/g).map((part, index) => {
                                    // 计算当前输入框的初始值
                                    console.log(standardIndex,index)
                                    const inputValue = formData.selectedData.teststandard[index + (formData.standard - 1)] || '';
                                    return (
                                      <span key={index}>
                                        {part}
                                        {index < numberOfInputs && (
                                          <input
                                            type="text"
                                            value={inputValue} // 设置初始值
                                            onChange={(e) => {
                                              // 处理输入变化，更新 teststandard 数组
                                              const updatedTestStandard = [...formData.selectedData.teststandard];
                                              updatedTestStandard[index + (formData.standard - 1)] = e.target.value; // 更新相应的值
                                              setFormData(prev => ({
                                                ...prev,
                                                selectedData: {
                                                  ...prev.selectedData,
                                                  teststandard: updatedTestStandard
                                                }
                                              }));
                                            }}
                                          />
                                        )}
                                      </span>
                                    );
                                  })
                                : standard; // 如果没有 {input}，则直接返回标准文本

                            return (
                              <tr key={globalIndex}>
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
                                <td>{replacedStandard}</td>
                                {standardIndex === 0 && methodIndex === 0 && itemIndex === 0 && (
                                  <td rowSpan={section.items.reduce((acc, i) => acc + i.methods.reduce((acc, m) => acc + m.standards.length, 0), 0)}>
                                    <Form.Control
                                      type="text"
                                      value={formData.selectedData.assemblesign[sectionIndex + formData.signcount] || ''}
                                      onChange={(event) => handleSignChange(event, sectionIndex)}
                                    />
                                  </td>
                                )}
                                <td>
                                  <Form.Control
                                    as="select"
                                    value={formData.selectedData.checkresult[globalIndex + (2 * radiocount + 1)] || ''}
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
                                    value={formData.selectedData.checkresult[globalIndex + 1 +(2 * radiocount + 1)] || ''}
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
