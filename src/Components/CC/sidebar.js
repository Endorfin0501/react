import React from 'react';

function Sidebar({ groupedData, onAssemblyClick, isVisible, onClose }) {
  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
      <ul>
        {Object.keys(groupedData).map((assembly) => (
          <li key={assembly}>
            <a href={`#${assembly}`} onClick={() => onAssemblyClick(assembly)}>
              {assembly}
            </a>
          </li>
        ))}
      </ul>
      <button className="info" onClick={onClose}>
        關閉
      </button>
    </div>
  );
}

export default Sidebar;
