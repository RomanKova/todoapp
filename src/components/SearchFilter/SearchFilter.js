import React, { useState } from 'react'
import "./search-filter.css"

const SearchFilter = () => {
    const [inputValue, setInputValue] = useState("")
    const [activeButton, setActiveButtob] = useState("active")

  return (<div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="type to search" />
        <button>Add</button>
    <hr />
        <button onClick={() => setActiveButtob("all")} className={`filter-button ${activeButton === 'all' && 'active-button'}`}>All </button>
        <button onClick={() => setActiveButtob("active")} className={`filter-button ${activeButton === 'active' && 'active-button'}`}>Active </button>
        <button onClick={() => setActiveButtob("done")} className={`filter-button ${activeButton === 'done' && 'active-button'}`}>Done</button>
    <hr />
      </div>

  );
}

export default SearchFilter;