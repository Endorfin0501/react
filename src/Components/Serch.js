import React, { useState } from 'react'
import SerchMechineButton from './SerchMachineButton'

function Serch() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchClick = () => {
    ;<SerchMechineButton></SerchMechineButton>
  }

  return (
    <div className='container mt-3'>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Search'
          aria-label='Search'
          aria-describedby='search-button'
        />
        <button
          className='btn btn-primary'
          type='button'
          id='search-button'
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Serch
