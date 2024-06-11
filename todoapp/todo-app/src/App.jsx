import React, { useState } from 'react'
import "./App.css";
import Todo_input from './component/Todo_input'
import Todo_list from './component/Todo_list';
const App = () => {
  const [list,setlist]=useState([]);
  let addlist=(input)=>{
    if(input!==""){
    setlist([...list,input]);
  }}
  const deleteitem=(key)=>{
    let newlist=[...list];
    newlist.splice(key,1);
    setlist(newlist);
  }
  return (
    <div className='main-container'>
      <div className='center-Container'>
      <Todo_input addlist={addlist}/>
      <h1 className='app-heading'>TODO</h1>
      <hr/>
      {list.map((item,index)=>{
        return(<Todo_list key={index} deleteitem={deleteitem} index={index} item={item}/>)
      })}
      
      </div>
    </div>
  )
}

export default App
