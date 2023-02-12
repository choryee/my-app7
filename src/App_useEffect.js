
import React, { useState, useEffect } from 'react';
import "./App.css";
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Button } from 'bootstrap';


//별코딩 useEffect 강의
function App(){
  let [count, setCount]=useState(1);
  const[name,setName]=useState("");
  

  const changeCount=(e)=>{
    console.log('e====>', e)
    let newCount;

    if(count>12){ count=1;
    }else{
      newCount=count+1;
      setCount(newCount); //이거 함으로서 state인 count가 업데이트되므로, 계속 새로 그림 그려짐.
    }    
  }

  const changeText=(e)=>{
    //console.log('onchange e==>', e )
    console.log('e.target.value==>',e.target.value)
    setName(e.target.value);

  }

  useEffect(()=>{
    console.log('렌더링 됨!!')
  },[count]    )

   
  return(  
    <div>  
      <button onClick={changeCount} variant="warning">Update</button>    
    <p>cound : {count}</p>
    <hr/>
    <input type="text" id='word' onChange={changeText}/> 
    <hr/>
    <input type="text" onChange={changeText}/>
    <p>name:{name}</p>



     </div> 
  );
};
export default App;