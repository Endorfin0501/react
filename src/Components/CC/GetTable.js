import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../url';

function GetTable({ data: propData, url }) {
  const [fetchedData, setFetchedData] = useState([]);
 
  useEffect(() => {
    axios.get(`${URL}/${url}`)
    .then(response => {
      console.log(response.data)
      setFetchedData(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the data!', error);
    });
  }, []);

  if (!propData) {
    return <div><h2>表單不存在，請確認PC版是否有建置表單</h2></div>;
  }

  const filteredData = fetchedData.filter(item => item.version === `${parseFloat(propData.version).toFixed(1)}`);

  const groupedData = filteredData.reduce((acc, item) => {
    if (!acc[item.assembly]) {
      acc[item.assembly] = [];
    }
    acc[item.assembly].push(item);
    return acc;
  }, {});

  let globalIndex = 1;

  console.log('the data :', filteredData);

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
          <tr>
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
          <tr>
            <td>{propData?.finalinspection_day || 'N/A'}</td>
            <td>{propData?.number_5s_day || 'N/A'}</td>
            <td>{propData?.repair_name || 'N/A'}</td>
          </tr>
        </tbody>
      </table>

      {Object.keys(groupedData).map((assembly) => (
        <div key={assembly}>
          <h2>{assembly}</h2>
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
            {groupedData[assembly].map((item, ) => {
                const currentIndex = globalIndex++;
                return (
                  <tr key={item.id}>
                    <td>{item.number}</td> {/* Display cumulative index */}
                    <td>{item.testitems}</td>
                    <td>{propData?.remark[currentIndex - 1]}</td>
                    <td>{item.category}</td>
                    <td>{item.responsibilities}</td>
                    <td>{propData?.self_check[currentIndex - 1] || 'N/A'}</td> 
                    <td>{propData?.quality_assurance[currentIndex - 1] || 'N/A'}</td> 
                    <td>{propData?.completion_date[currentIndex - 1] || 'N/A'}</td> 
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default GetTable;
