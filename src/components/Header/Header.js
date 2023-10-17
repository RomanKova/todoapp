import React, { useState } from 'react'

const Header = () => {
  // const [count, setCount] = useState(0)
  // const [inputValue, setInputValue] = useState("")

  // var search;


  var tobedone = 1;

  return (

    <div className="Header">
      <span style={{ fontFamily: 'sans-serif' }}>
      <span style={{ fontSize: 30 }}>
      <b>Todo List</b></span> {tobedone} more to do</span>
     
    </div>


  );
}

export default Header;