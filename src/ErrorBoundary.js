import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // 更新 state，使下一次渲染可以显示出降级 UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // 你可以将错误日志上报给服务端
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级 UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
