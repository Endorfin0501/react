import React, { useState, useRef } from 'react'
import { Button, Modal } from 'react-bootstrap'
import RCEdit from '../../FormEdit/RC/Table.js' // 引入弹出表单组件
import { packge, items, fill, revi } from '../../Components/RC/Table_Data'

function RCTable({ selectedData }) {
  const [selectedRow, setSelectedRow] = useState(null)
  const [showEditForm1, setShowEditForm1] = useState(false)
  const [showEditForm2, setShowEditForm2] = useState(false)
  const [showMenu, setShowMenu] = useState(false) // 控制菜单显示
  const [editType, setEditType] = useState('') // 保存编辑表单的类型
  const touchTimeout = useRef(null)

  // 长按处理函数
  const handleLongPress = (rowData) => {
    setSelectedRow(rowData)
    setShowMenu(true) // 显示菜单
  }

  // 处理鼠标和触摸长按开始
  const handleStart = (e, rowData) => {
    touchTimeout.current = setTimeout(() => {
      handleLongPress(rowData)
    }, 500) // 500ms 的长按时间
  }

  // 处理鼠标和触摸长按结束
  const handleEnd = () => {
    clearTimeout(touchTimeout.current)
  }

  // 处理表单关闭
  const handleCloseEditForm = () => {
    setShowEditForm1(false)
    setShowEditForm2(false)
    setSelectedRow(null)
    setShowMenu(false)
  }

  // 处理菜单选择
  const handleMenuSelect = (type) => {
    setEditType(type)
    setShowMenu(false)
  }

  console.log('--------', selectedData)

  return (
    <div className='container'>
      <table className='table table-striped-columns' id='top1'>
        <thead>
          <tr>
            <th>機號</th>
            <th>電壓</th>
            <th>赫茲</th>
            <th>預交日期</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onMouseDown={(e) => handleStart(e, selectedData)}
            onMouseUp={handleEnd}
            onTouchStart={(e) => handleStart(e, selectedData)}
            onTouchEnd={handleEnd}
          >
            <td>{selectedData.repair_name || ''}</td>
            <td>{selectedData.voltage || ''}</td>
            <td>{selectedData.hertz || ''}</td>
            <td>{selectedData.prepaid_date || ''}</td>
          </tr>
        </tbody>
      </table>

      <table className='table table-striped-columns' id='top2'>
        <thead>
          <tr>
            <th>高壓</th>
            <th>預吹</th>
            <th>回收</th>
            <th>循環</th>
            <th>輸送銘牌機序號</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onMouseDown={(e) => handleStart(e, selectedData)}
            onMouseUp={handleEnd}
            onTouchStart={(e) => handleStart(e, selectedData)}
            onTouchEnd={handleEnd}
          >
            <td>{selectedData.high_pressure || ''}</td>
            <td>{selectedData.pre_blow || ''}</td>
            <td>{selectedData.recycle || ''}</td>
            <td>{selectedData.cycle || ''}</td>
            <td>{selectedData.serial_num || ''}</td>
          </tr>
        </tbody>
      </table>

      <table className='table table-striped-columns' id='mid1'>
        <thead>
          <tr>
            <th>組裝人員</th>
            <th>製令單號</th>
            <th>廠訂</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onMouseDown={(e) => handleStart(e, selectedData)}
            onMouseUp={handleEnd}
            onTouchStart={(e) => handleStart(e, selectedData)}
            onTouchEnd={handleEnd}
          >
            <td>{packge[selectedData.package_person - 1]}</td>
            <td>{selectedData.order_num || ''}</td>
            <td>{selectedData.factory_order || ''}</td>
          </tr>
        </tbody>
      </table>

      <table className='table table-striped-columns' id='mid2'>
        <thead>
          <tr>
            <th>項目</th>
            <th>預計日期</th>
            <th>完成日期</th>
            <th>填寫人員</th>
            <th>覆核人員</th>
          </tr>
        </thead>
        <tbody>
          {selectedData.estimated_date.map((_, index) => (
            <tr
              key={index}
              onMouseDown={(e) => handleStart(e, selectedData)}
              onMouseUp={handleEnd}
              onTouchStart={(e) => handleStart(e, selectedData)}
              onTouchEnd={handleEnd}
            >
              <td>
                <b>{items[index]}</b>
              </td>
              <td>{selectedData.estimated_date[index] || ''}</td>
              <td>{selectedData.completion_date[index] || ''}</td>
              <td>
                <b>{fill[index]}</b>:{selectedData.fill_person[index] || ''}
              </td>
              <td>
                <b>{revi[index]}</b>:{selectedData.reviewer[index] || ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className='table table-striped-columns' id='under1'>
        <thead>
          <tr>
            <th>出貨日期</th>
            <th>客戶名稱</th>
            <th>機台編號</th>
            <th>機種名稱</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onMouseDown={(e) => handleStart(e, selectedData)}
            onMouseUp={handleEnd}
            onTouchStart={(e) => handleStart(e, selectedData)}
            onTouchEnd={handleEnd}
          >
            <td>{selectedData.ship_date || ''}</td>
            <td>{selectedData.country || ''}</td>
            <td>{selectedData.repair_name}</td>
            <td>{selectedData.model_name || ''}</td>
          </tr>
        </tbody>
      </table>

      {showMenu && (
        <Modal show onHide={handleCloseEditForm}>
          <Modal.Header closeButton>
            <Modal.Title>選擇編輯表單</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button
              variant='primary'
              onClick={() => {
                handleMenuSelect('general')
                setShowEditForm1(true)
              }}
              className='m-2'
            >
              一般表格
            </Button>
            <Button
              variant='primary'
              onClick={() => {
                handleMenuSelect('details')
                setShowEditForm2(true)
              }}
              className='m-2'
            >
              項目表格
            </Button>
            <Button variant='secondary' onClick={handleCloseEditForm}>
              取消
            </Button>
          </Modal.Body>
        </Modal>
      )}

      {showEditForm1 && (
        <RCEdit
          selectedData={selectedRow}
          onClose={handleCloseEditForm}
          formType={1}
        />
      )}

      {/* 显示第二个表单 */}
      {showEditForm2 && (
        <RCEdit
          selectedData={selectedRow}
          onClose={handleCloseEditForm}
          formType={2}
        />
      )}
    </div>
  )
}

export default RCTable
