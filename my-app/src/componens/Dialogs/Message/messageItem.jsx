import React from 'react';
import { NavLink } from 'react-router-dom';
import c from '.././dialogs.module.css';


const Messege = (props)=>{
    return<div className={c.dialog}>{props.messege}</div>
}


export default Messege;