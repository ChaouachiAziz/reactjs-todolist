import React from 'react'

export default function TodoCard(props) {
  const { children, handleTodosDelete, handleTodosEdit, index} = props;
  return (
    <div>
      <li  className='todoItem'>
        {children}
        <div className='actionsContainer'>
          <button onClick={() => {
            handleTodosEdit(index)
          }}>
          <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => {
            handleTodosDelete(index)
          }}>
          <i className="fa-solid fa-trash"></i>
          </button>
        </div>
          </li>
    </div>
  )
}
