import React, { useEffect, useState } from 'react';
import MainData from '../Components/FormMainData';
import GetTable from '../Components/CC/GetTable';
import Order from '../Components/CC/order'
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CC() {
  const location = useLocation();
  const { state } = location;
  const { repairName, type, model, name } = state;

  const [selectedData, setSelectedData] = useState([]);

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

   // Ensure `selectedData` is updated correctly
   useEffect(() => {
    // Any side effects related to `selectedData` can go here
  }, [selectedData]);

  return (
    <div>
      <h1>{name}</h1>
      <MainData
        repairName={repairName}
        type={type}
        form={`${formtitle(model)}CC`}
      >
        {(data) => {
          // Avoid setting state directly in the render method
          if (data !== selectedData) {
            setSelectedData(data);
          }
        }}
      </MainData>
      <GetTable data={selectedData} url = {`${formtitle(model)}SCC`}  />
      <div style={{ borderTop: '2px solid black', marginTop: '10px' }}></div>
      <Order data={selectedData} />
    </div>
  );
}

export default CC;
