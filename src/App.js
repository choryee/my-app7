
import React, { useState, useEffect } from 'react';
import "./App.css";
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Button } from 'bootstrap';
import Timer from './components/Timer';


function App(){
 
   const [showTimer, setShowTimer]=useState(false);

  return(  
    <div>  
     {showTimer && <Timer/>}
    <button onClick={()=>setShowTimer(!showTimer)}>toggle timer</button>


     </div> 
  );
};
export default App;