import React, { useState } from 'react'
import { DeleteIcon } from "../../icons/icon-delete"
import { ActiveIcon } from "../../icons/icon-active"
import { DoneIcon } from "../../icons/icon-done"

import './todo-list-item.css';

const TodoListItem = (props) => {

  const { name, id, done, onDeleteItem, onDoneItem } = props

  return (

    <div className="task" key={id}>

      <span style={{ fontSize: 30, fontFamily: 'sans-serif', paddingRight: 30 }}>
        <b className={`${done ? 'done' : ""}`}>{name}</b>
      </span>

      <span className="action-buttons">
        <button className="filter-button delete-btn" onClick={() => onDeleteItem(id)}>
          <DeleteIcon />
          Delete
        </button>
        <button className="filter-button done-btn" onClick={() => onDoneItem(id)}>
          <DoneIcon />
          Done
        </button>
        <button className="filter-button active-btn" >
          <ActiveIcon />
          Active
        </button>
      </span>

    </div>


  );
}

export default TodoListItem;