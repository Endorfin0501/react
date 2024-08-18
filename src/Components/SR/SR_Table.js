import React, { useRef } from 'react';

const SR_Table = ({ data, selectedData, tablenum, radiocount, signcount, standard }) => {
  const assembleSignIndex = useRef(0);
  const assemblestandardIndex = useRef(0)
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  console.log('the selectedData', selectedData?.checkresult || 'N/A');

  const getResultText = (value) => {
    if (value === 'pass') {
      return 'Yes';
    } else if (value === 'fail') {
      return 'No';
    } else {
      return 'N/A';
    }
  };

  const getResultText2 = (value) => {
    if (value === 'pass') {
      return '合格';
    } else if (value === 'fail') {
      return '不合格';
    } else {
      return 'N/A';
    }
  };

  const formtitle = (model) => {
    switch (model) {
      case 'L機':
        return 'CPSB-L機'
      case '鳳凰':
        return 'CPSB-鳳凰'
      case '一段式':
        return 'CPSB-S10-3'
      default:
        return '' // Default
    }
  }

  let globalSIndex = 0;
  let globestandard = standard

  const renderStandardWithInput = (standard) => {
    const parts = standard.split('\n');
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.includes('{input}')
          ? part.split('{input}').map((subPart, subIndex) => (
              <React.Fragment key={subIndex}>
                {subPart}
                {subIndex < part.split('{input}').length - 1 && (
                  <b>{(selectedData?.teststandard && selectedData.teststandard[assemblestandardIndex.current++ + globestandard - 1]) || 'N/A'}</b>
                )}
              </React.Fragment>
            ))
          : part}
        {index < parts.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>檢驗日期</th>
            <th>機台編號</th>
            <th>機種名稱</th>
            <th>判定</th>
            <th>表格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedData?.testdate[tablenum] || 'N/A'}</td>
            <td>{selectedData?.repairname}</td>
            <td>{`${formtitle(selectedData?.modelname)}`}</td>
            <td>合格/不合格: {getResultText2(selectedData?.judge[tablenum]) || 'N/A'}</td>
            <td>第{tablenum+1}張</td>
          </tr>
        </tbody>
      </table>

      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>項次</th>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>檢驗項目</th>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>檢驗方法</th>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>檢驗標準</th>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>組裝人員/檢驗人員</th>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>初檢(Yes/No)</th>
            <th style={{ verticalAlign: 'top', textAlign: 'center' }}>覆檢(Yes/No)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((section, secIndex) => {
            let isAssembleSignRendered = false;
            
            return (
              <React.Fragment key={secIndex}>
                {section.items && section.items.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    {item.methods && item.methods.map((methodObj, mIndex) => (
                      <React.Fragment key={mIndex}>
                        {methodObj.standards && methodObj.standards.map((standard, sIndex) => {
                         globalSIndex++; // 递增全局变量
                          
                          return (
                            <tr key={sIndex}>
                              {sIndex === 0 && mIndex === 0 && itemIndex === 0 && (
                                <td rowSpan={section.items.reduce((acc, i) => acc + i.methods.reduce((acc, m) => acc + m.standards.length, 0), 0)}>
                                  {section.section}
                                </td>
                              )}
                              {sIndex === 0 && mIndex === 0 && (
                                <td rowSpan={item.methods.reduce((acc, m) => acc + m.standards.length, 0)}>
                                  {item.item}
                                </td>
                              )}
                              {sIndex === 0 && (
                                <td rowSpan={methodObj.standards.length}>
                                  {methodObj.method.split('\n').map((method, i) => (
                                    <div key={i}>{method}</div>
                                  ))}
                                </td>
                              )}
                              <td>{renderStandardWithInput(standard)}</td>
                              {!isAssembleSignRendered && (
                                <td rowSpan={section.items.reduce((acc, i) => acc + i.methods.reduce((acc, m) => acc + m.standards.length, 0), 0)}>
                                  {selectedData?.assemblesign[assembleSignIndex.current++ + signcount] || 'N/A'}
                                  {isAssembleSignRendered = true}
                                </td>
                              )}
                              <td>{selectedData?.checkresult ? getResultText(selectedData.checkresult[2 * (globalSIndex  + radiocount ) - 1]) : 'N/A'}</td>
                              <td>{selectedData?.checkresult ? getResultText(selectedData.checkresult[2 * (globalSIndex  + radiocount) ]) : 'N/A'}</td>
                            </tr>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </React.Fragment>
            );
          })}
          <tr>
            <td colSpan="8">
              <div style={{ borderTop: '2px solid black', marginTop: '10px' }}></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SR_Table;
