import React, { useRef, useState } from 'react'
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";
import "./TicTacToe.css";

const TicTacToe = () => {
  let [count,setcount]=useState(0);
  let [lock,setlock]=useState(false);
  let reftitle=useRef(null);
  let box1=useRef(null);
  let box2=useRef(null);
  let box3=useRef(null);
  let box4=useRef(null);
  let box5=useRef(null);
  let box6=useRef(null);
  let box7=useRef(null);
  let box8=useRef(null);
  let box9=useRef(null);
  let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];
  let data=["","","","","","","","",""];
  const toggle=(e,num)=>{
    if(lock){
      return 0;
    }
    if(count%2===0){
e.target.innerHTML=`<img src="${cross}"/>`;
data[num]='x';
setcount(++count);
    }else{
      e.target.innerHTML=`<img src="${circle}"/>`;
      data[num]='o';
      setcount(++count);
    }
    


   

    checkwin();
  }
  const checkwin=()=>{
    // console.log(data[0]);
    // if(data[0]===data[1] ){
    //   console.log("ohh");
    // }
    
    if(data[0]===data[1] && data[1]===data[2] && data[2]!==null){
      console.log("ohh");
      // win(data[2]);
    }else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      win(data[6]);
    } else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      win(data[7]);
    }else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      win(data[8]);
    }else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
      win(data[8]);
    }else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
      win(data[6]);
    }else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      win(data[5]);
    }else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      win(data[8]);
    }
   
    
  }
  const win=(winner)=>{
    
    setlock(true);
    

//     if(winner==='x'){
//       reftitle.current.innerHTML=`Congratulations:<img src="${cross}"/>`;
//     }else {
// reftitle.current.innerHTML=`Congratulations:<img src="${circle}"/> `;
//     }
//     console.log("win");
  }
//   const reset=(e)=>{
//     let data=["","","","","","","","",""];
//     setlock(false);
//     reftitle.current.innerHTML="Tic Tac Toe Game";
//     box_array.map((e)=>{
// e.current.innerHTML="";

//     });
    

//   }
  // reftitle.current.innerHTML=`Congratulations:<img src=${cross}/> `;
  
  return (
    <div>
      <div className='container'>
        <h1 className='title' ref={reftitle}>Tic Tac Toe Game </h1>
        <div className='board'>
          <div className='row1'>
            <div className="box"ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
            <div className="box"ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
            <div className="box"ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
          </div>
          <div className='row2'>
            <div className="box" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
            <div className="box"ref={box5}onClick={(e)=>{toggle(e,4)}}></div>
            <div className="box"ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
          </div>
          <div className='row3'>
            <div className="box"ref={box7}onClick={(e)=>{toggle(e,6)}}></div>
            <div className="box"ref={box8}onClick={(e)=>{toggle(e,7)}}></div>
            <div className="box"ref={box9}onClick={(e)=>{toggle(e,8)}}></div>
          </div>
        </div>
        <button className='btn' >Reset</button>
        
      </div>
    </div>
  )
}

export default TicTacToe
