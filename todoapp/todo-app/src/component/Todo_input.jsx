import React, { useState } from 'react'

const Todo_input = (props) => {
  const [input,setinput]=useState("");
  const handlekeydown=(e)=>{
    if(e.keyCode===13){
      props.addlist(input)
        setinput("")
    }
    
  }
  return (
    <div className='input-container'>
      <input type="text"onChange={e=>{
        setinput(e.target.value)
      }} value={input}  placeholder="Enter your todo"className='input-box'/>
      <button className='btn' onClick={()=>{
        props.addlist(input)
        setinput("")
      }} onKeyDown={handlekeydown}>+</button>
      
    </div>
  )
}

export default Todo_input
