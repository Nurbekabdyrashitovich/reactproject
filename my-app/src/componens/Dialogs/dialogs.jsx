import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './dialogs.module.css';

const DialogItem = (props)=>{
    let path = "/dialogs/" + props.id;
    return<div className={c.dialog + ' ' + c.active}>
        <NavLink to= {path}>{props.name}</NavLink>
    </div>
}
const Messege = (props)=>{
    return<div className={c.dialog}>{props.messege}</div>
}

const Dialogs =(props)=>{

    let dialogsData = [
        {id:1, name:'Dimych'},
        {id:2, name:'Andrei'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sasha'},
        {id:5, name:'Victor'}
    ]

    let messegesData = [
        {id:1, messege:'Hi'},
        {id:1, messege:'Hellow'},
        {id:3, messege:'yo'},
        {id:4, messege:'yo'},
        {id:5, messege:'yo'}
    ]

       
    
    return(
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
             <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
             <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
             {/* <DialogItem name="Sveta" id="3"/>
             <DialogItem name="Sasha" id="4"/>
             <DialogItem name="Victor" id="5"/>
                */}
            </div>

            <div className={c.messeges}>
                 <Messege messege = {messegesData [0].messege} />
                 <Messege messege = {messegesData [1]. messege} />
                 {/* <Messege messege ="Hi"/>
                 <Messege messege = "Yo "/> */}
            </div>
        </div>
    );
}

export default Dialogs;