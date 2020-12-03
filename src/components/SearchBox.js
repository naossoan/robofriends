import React from 'react'
import AppCSS from '../containers/App.css'

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        id='searchbox'
        type='search'
        placeholder='search robots'
        className='pa3 ba b--green bg-lightest-blue'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
