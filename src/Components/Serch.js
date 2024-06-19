import React, { useState } from 'react'
import SerchMechineButton from './SerchMachineButton'
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

      <SerchMechineButton searchTerm={searchTerm} />
    </div>
  )
}

export default Serch
