import React from 'react';

function Order({ data: propData }) {

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
      <tr key={index}>
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
  

  return (
    <div>
        <h1>客戶廠訂特殊需求</h1>
          <table class="table table-striped">
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
        </div>
      )}

export default Order;
