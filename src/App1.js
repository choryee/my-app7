
import React, { useState } from 'react';
import "./App.css";
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function App(){

 
  const[time, setTime]=useState(1); 
  

   const handleClick=()=>{
    let newtime;

    if(time>=12)
    newtime=1;
    else {
    newtime=time+1;
   }

   setTime(newtime);
  }
   
  return(  
    <div>  
    <div className="container">   
      <h1 >최상단 화면</h1>   
    </div>

    <span>현재시각:{time} 시</span>
    <button onClick={handleClick}>update</button>

     </div> 
  );
};
export default App;