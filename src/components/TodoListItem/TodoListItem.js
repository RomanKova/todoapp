import React, { useState } from 'react'
import './todo-list-item.css';

const TodoListItem = (props) => {

  const { name, id, done, onDeleteItem, onDoneItem } = props
 
  return (

    <div className="Task" key={id}>

      <div className="Element">
        <span style={{ fontSize: 30, fontFamily: 'sans-serif', paddingRight: 30 }}>
          <b className={`${done ? 'done' : ""}`}>{name}</b>
        </span>

        <span>
          <button className='Button' onClick={() => onDeleteItem(id)}>Delete</button>
          <button className='Button' onClick={() => onDoneItem(id)}>Done</button>

        </span>
      </div>

    </div>


  );
}

export default TodoListItem;