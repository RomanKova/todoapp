import React, { useState } from 'react'
import './todo-list-item.css';

const TodoListItem = (props) => {

  const { name, id } = props

  return (

    <div className="Task" key={id}>

      <div className="Element">
        <span style={{ fontSize: 30, fontFamily: 'sans-serif', paddingRight: 30 }}>
          <b>{name}</b>
        </span>

        <span>
          <button className='Button'>Delete</button>
          <button className='Button'>Add</button>

        </span>
      </div>

    </div>


  );
}

export default TodoListItem;