import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import "../App.css";
import { increase } from '../store';


//const Bottom = () => {
const Bottom = (props) => {
 const {addNumber}=props;

//const dispatcher=useDispatch();
    


    return (
        <div className='sub_container'>
            <h1>bottom!!</h1>
            {/*<button onClick={()=>dispatcher(increase())}>증가</button>*/}
            <button onClick={addNumber}>증가</button>
            
        </div>
    );
};

export default Bottom;