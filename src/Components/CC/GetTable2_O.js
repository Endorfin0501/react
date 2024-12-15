import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'
import CCEdit2 from '../../FormEdit/CC/Table2_O'
import { URL } from '../../url'
import Sidebar from './sidebar'
import '../../style.css'

function GetTable({ data: propData, url }) {
  const [fetchedData, setFetchedData] = useState([])
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [pressTimer, setPressTimer] = useState(null)
  const [isSidebarVisible, setIsSidebarVisible] = useState(false) // 控制侧边栏显示状态
  let globalIndex = 0

  useEffect(() => {
    axios
      .get(`${URL}/${url}`)
      .then((response) => {
        setFetchedData(response.data)
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error)
      })
  }, [url])

  const filteredData = fetchedData.filter(
    (item) => item.version === `${parseFloat(propData.version).toFixed(1)}`
  )

  const groupedData = filteredData.reduce((acc, item) => {
    if (!acc[item.assembly]) {
      acc[item.assembly] = []
    }
    acc[item.assembly].push(item)
    return acc
  }, {})

  const startPress = (item) => {
    setPressTimer(
      setTimeout(() => {
        setSelectedItem(item)
        setShowEditModal(true)
      }, 500)
    ) // 长按 0.5 秒触发
  }

  const cancelPress = () => {
    if (pressTimer) {
      clearTimeout(pressTimer)
      setPressTimer(null)
    }
  }

  const handleCloseModal = () => {
    setShowEditModal(false)
    setSelectedItem(null)
  }

  const handleAssemblyClick = (assembly) => {
    const element = document.getElementById(assembly)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsSidebarVisible(false) // 点击后隐藏侧边栏
  }

  return (
    <div>
      {/* <Button onClick={() => setIsSidebarVisible(true)}>Show Sidebar</Button> 控制侧边栏显示的按钮 */}
      {/* <Sidebar 
        groupedData={groupedData} 
        onAssemblyClick={handleAssemblyClick} 
        isVisible={isSidebarVisible} 
        onClose={() => setIsSidebarVisible(false)} 
      /> */}

      <div>
        {Object.keys(groupedData).map((assembly) => (
          <div key={assembly} id={assembly}>
            <h2>{assembly}</h2>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>項次</th>
                  <th>檢驗項目</th>
                  <th>標準</th>
                  <th>等級</th>
                  <th>檢驗結果(OK/NG)</th>
                </tr>
              </thead>
              <tbody>
                {groupedData[assembly].map((item) => {
                  const currentIndex = globalIndex // 使用当前的globalIndex
                  globalIndex++ // 每次迭代后递增

                  return (
                    <tr
                      key={item.id}
                      onPointerDown={() =>
                        startPress({ ...item, currentIndex })
                      } // 在startPress调用时传递currentIndex
                      onPointerUp={cancelPress}
                      onPointerLeave={cancelPress}
                    >
                      <td>{item.number}</td>
                      <td>{item.testitems}</td>
                      <td>{item.category}</td>
                      <td>{item.responsibilities}</td>
                      <td>{propData?.checkresult[currentIndex] || 'N/A'}</td>
                    </tr>
                  )
                })}
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
              <CCEdit2
                initialData={selectedItem}
                onSave={handleCloseModal}
                onCancel={handleCloseModal}
                id={propData.id}
                index={selectedItem.currentIndex} // 将currentIndex传递给CCEdit2组件
              />
            </Modal.Body>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default GetTable
