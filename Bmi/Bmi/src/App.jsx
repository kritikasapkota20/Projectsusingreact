import React from 'react'
import { useState } from 'react';
import "./App.css"
const App = () => {
  const [weight,setweight]=useState(0);
  const [height,setheight]=useState(0);
  const [bmi,setbmi]=useState();
  const [msg,setmsg]=useState();
  const bmicalc=(event)=>{
    event.preventDefault();
    if(weight===0||height===0){
      alert("Please enter the valid weight and height!");
    }else{
     let bmi=(weight/(height*height));
     setbmi(bmi.toFixed(1));
    
    if(bmi<18.5){
      setmsg("You are underweight!");
    }else if(bmi>=18.5 && bmi<24.9){
      setmsg("You are a healthy weight!");
    }else{
      setmsg("You are overweight!");
    }

  }}
  let reload=()=>{
    window.location.reload();
  }



  return (
    <div className='app'>
      <div className='Container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={bmicalc}>
      <div>
        <label>Weight (Kg)</label>
        <input placeholder='Enter your weight'  onChange={(e)=>{
         setweight( e.target.value)
        }} />
      </div>
      <div>
        <label>Height (meter)</label>
        <input placeholder='Enter your height' onChange={e=>{
          setheight(e.target.value)
        }} />
      </div>
      <div >
        <button type='submit' className='submit'>Submit</button>
        <button type='button' className="reload"  onClick={reload}>Reload</button>
      </div>
      </form>
      <div >
        <p>Your BMI is:{bmi}</p>
        <p className='msg' >{msg}</p>
      </div>
      </div>
    </div>
  )
}

export default App
