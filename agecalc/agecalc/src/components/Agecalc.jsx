import React from 'react'

const Agecalc = () => {
    let date=new Date();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let month=monthNames[date.getMonth()];
  return (
    <div className='container'>
        <div className='main-container'>
      <h1>Age calculator</h1>
      <span>Date of birth</span>
      <input type='date' value={month}/>
    </div>
    </div>
  )
}

export default Agecalc
