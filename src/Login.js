import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    // 发送登录请求到后端
    try {
      const response = await fetch('http://192.168.2.176:8000/login/', {
        method: 'POST',
        body: formData,
      })
      if (response.ok) {
        navigate('/Machine') // 登录成功后重定向到用户仪表盘或其他页面
      } else {
        // 处理登录失败的情况
        console.error('Login failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
