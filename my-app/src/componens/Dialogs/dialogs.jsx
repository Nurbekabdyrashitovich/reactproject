import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DilogsItem/dialogsItem';
import Messege from './Message/messageItem';
import c from './dialogs.module.css';

// const DialogItem = (props)=>{
//     let path = "/dialogs/" + props.id;
//     return<div className={c.dialog + ' ' + c.active}>
//         <NavLink to= {path}>{props.name}</NavLink>
//     </div>
// }
// const Messege = (props)=>{
//     return<div className={c.dialog}>{props.messege}</div>
// }

const Dialogs =(props)=>{

    // let dialogsData = [
    //     {id:1, name:'Dimych'},
    //     {id:2, name:'Andrei'},
    //     {id:3, name:'Sveta'},
    //     {id:4, name:'Sasha'},
    //     {id:5, name:'Victor'}
    // ];

    // let messegesData = [
    //     {id:1, messege:'Hi'},
    //     {id:1, messege:'Hellow'},
    //     {id:3, messege:'yo'},
    //     {id:4, messege:'yo'},
    //     {id:5, messege:'yo'}
    // ]
    
    
    // [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
    // ];

    

    

    let dialogsElements=props.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>);

    let messegesElement=props.messeges.map(m=><Messege messege={m.messege}/>)
       
    
    return(
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>

            {dialogsElements}

            {/* <DialogItem/> */}
            {/* <Messege/> */}
            

             {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
             <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/> */}

             {/* <DialogItem name="Sveta" id="3"/>
             <DialogItem name="Sasha" id="4"/>
             <DialogItem name="Victor" id="5"/>
                */}
            </div>

            <div className={c.messeges}>
                 {messegesElement}

                 {/* <Messege messege = {messegesData [0].messege} />
                 <Messege messege = {messegesData [1]. messege} /> */}
                 {/* <Messege messege ="Hi"/>
                 <Messege messege = "Yo "/> */}
            </div>
        </div>
    );
}

export default Dialogs;