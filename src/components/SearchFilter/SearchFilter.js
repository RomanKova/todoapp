import React, { useState } from 'react'
import "./search-filter.css"

const SearchFilter = (props) => {
  const { activeButton, setActiveButton, onSaveListItem} = props
  const [inputValue, setInputValue] = useState("")

const saveListItem = (text) => {
  onSaveListItem(text)
}
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="type to search" />
      <button onClick={() => saveListItem(inputValue)}>Add</button>
      <hr />
      <button onClick={() => setActiveButton("all")} className={`filter-button ${activeButton === 'all' && 'active-button'}`}>All </button>
      <button onClick={() => setActiveButton("active")} className={`filter-button ${activeButton === 'active' && 'active-button'}`}>Active </button>
      <button onClick={() => setActiveButton("done")} className={`filter-button ${activeButton === 'done' && 'active-button'}`}>Done</button>
      <hr />
    </div>

  );
}

export default SearchFilter;