import React, { useState } from 'react'
import SerchButton from './NowMachine'
import 'bootstrap/dist/css/bootstrap.min.css'

function Serch() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    const upperCaseTerm = event.target.value.toUpperCase()
    setSearchTerm(upperCaseTerm)
  }

  return (
    <div className='container mb-3'>
      <input
        type='text'
        className='form-control'
        placeholder='Search'
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <SerchButton searchTerm={searchTerm} />
    </div>
  )
}

export default Serch
