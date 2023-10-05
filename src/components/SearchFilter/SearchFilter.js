import React, { useState } from 'react'
import "./search-filter.css"

const SearchFilter = () => {
    const [inputValue, setInputValue] = useState("")

  return (<div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="type to search" />
        <button>Add</button>
    <hr />
        <button className="filter-button active">All </button>
        <button className="filter-button">Active </button>
        <button className="filter-button">Done</button>
    <hr />
      </div>

  );
}

export default SearchFilter;