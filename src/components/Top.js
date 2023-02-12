import React from 'react';
import { useSelector } from 'react-redux';
//import { useSelector } from 'redux';
import "../App.css";


//const Top = () => {
const Top = (props) => {
 const {number}=props;    

//const number=useSelector((store)=>store.number); //react hooks함수

    return (
        <div className='sub_container'>
            <h1>Top!!</h1>
            {/*번호 : {number}*/}
            번호 : {number}
        </div>
    );
};

export default Top;