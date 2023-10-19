import React, { useState } from 'react'

const Header = (props) => {
  const { totalItems, doneItems } = props

  return (

    <div className="Header">
      <span style={{ fontFamily: 'sans-serif' }}>
      <span style={{ fontSize: 30 }}>
      <b>Todo List</b></span> {doneItems} out of  {totalItems}</span>
     
    </div>


  );
}

export default Header;