import React, { useState } from 'react'
import {Data} from "../Data/Data.jsx"
import Quizresult from "./Quizresult.jsx"

const Quiz = () => {
  const [currentpos,setcurrentpos]=useState(0);
  const [click,setclick]=useState(0);
  const [score,setscore]=useState(0);
  const [showresult,setshowresult]=useState(false);
  
  let classe;
    const changeques=() =>{
      if(click===Data[currentpos].answer){
        setscore(score+1);
        
      }
      if(currentpos<Data.length-1){
      setcurrentpos(currentpos+1);
      setclick(0);}
      else{
        setshowresult(true);
      }
    }
    const reset=()=>{
setcurrentpos(0);
setshowresult(false);
setscore(0);
setclick(0);

    }
  
  
  const reverseques=()=>{
    setcurrentpos(currentpos-1);
  }

  return (
   
    <div>
      <h1>Quiz App</h1>
      <div className='container'>
      {showresult?<>
    <Quizresult  score={score} total={Data.length}/> 
    <button className='reset' onClick={reset}>Try again</button></>
    :(<>
        <div className='question'>
            <span className='question-number'>{currentpos+1} .</span>
            <span className='questionn'>    {Data[currentpos].question}</span>
        </div>
        <div className='option-container'>
            {Data[currentpos].options.map((option,i)=>{
              let btnclass="";
              if(click===i+1){
                btnclass=(click===Data[currentpos].answer)?"check":"uncheck"
              }
                return(
                    <button className={`btn-option ${btnclass}` } key={i} onClick={()=>{
                      setclick(i+1)
                    }}>{option}</button>
                )
            })}
        </div>
        { currentpos>0 &&
        <button className= "back-btn"  onClick={reverseques}>Back</button>}
        <button className='next-btn' onClick={changeques}>Next</button>
        
        </>)}
      </div>
    </div>
  )
}


export default Quiz
