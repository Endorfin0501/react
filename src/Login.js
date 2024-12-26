import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { URL } from './url'
import './style.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function goRegister() {
    // 跳转到注册页面
    window.location.href = 'http://127.0.0.1/information_platform/signIn.html'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    // 发送登录请求到后端
    try {
      const response = await fetch(`${URL}/login/`, {
        method: 'POST',
        body: formData,
      })
      if (response.ok) {
        const data = await response.json()
        if (data.user.Authorize == 0) {
          alert('你的帳號未啟用')
          window.location.reload()
        } else {
          if (data.user.permission > 1) {
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
          } else {
            navigate('/Machine') // 登录成功后重定向到用户仪表盘或其他页面
          }
        }
      } else {
        // 处理登录失败的情况
        console.error('Login failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className='login-container'>
      <h2>銓寶資訊平台系統</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>
            使用者帳號:
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className='form-group'>
          <label>
            密碼:
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          登入
        </button>
        <button type='button' className='btn btn-info' onClick={goRegister}>
          註冊
        </button>
      </form>
    </div>
  )
}

export default Login
