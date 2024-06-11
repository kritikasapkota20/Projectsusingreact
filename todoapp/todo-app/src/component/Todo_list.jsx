import React from 'react'

const Todo_list = (props) => {
  return (
    <div className='list-container'>
      <li className="list-item">{props.item}
    <span className="icon">  <i  className="fa-solid fa-trash-can" onClick={e=>{
        props.deleteitem(props.index)
    }}></i></span>
    </li>
    </div>
  )
}

export default Todo_list
