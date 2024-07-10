import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './Components/NowMachine'
import SearchBar from './Components/Search'
import { useNavigate } from 'react-router-dom'


function Mechine() {
  const navigate = useNavigate()
  const switchpage = () => {
    const url = '/HistoryMachine'
    navigate(url)
  }

  return (
    <div className="mechine-container">
      {/* <button
        type="button"
        className="btn btn-info switch-button"
        onClick={() => switchpage()}
      >
        切換至歷史機台
      </button> */}
      <SearchBar />
      <Button />
    </div>
  )
}

export default Mechine
