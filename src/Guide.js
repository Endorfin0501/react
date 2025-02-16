import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './style.css'

function Guide() {
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location.state.name)
  const username = location.state.name

  function goWindows() {
    // 获取当前时间
    let now = new Date()

    // 设置cookie的过期时间为当前时间加1秒
    now.setSeconds(now.getSeconds() + 3600)
    document.cookie =
      'LoginStatus2=PASS; expires=' + now.toUTCString() + '; path=/'
    document.cookie = document.cookie = `USER=${encodeURIComponent(
      username
    )}; expires=${now.toUTCString()}; path=/`
    // 跳转到目标页面
    window.location.href =
      'http://127.0.0.1/information_platform/a-repairauthor.html'
  }

  function goPhone() {
    navigate('/Machine')
  }
  return (
    <div className='button-container'>
      <h1>請選擇要進入的頁面</h1>
      <button
        type='button'
        className='btn btn-primary custom-btn'
        onClick={goWindows}
      >
        網頁版
      </button>
      <button
        type='button'
        className='btn btn-info custom-btn'
        onClick={goPhone}
      >
        手機板
      </button>
    </div>
  )
}

export default Guide
