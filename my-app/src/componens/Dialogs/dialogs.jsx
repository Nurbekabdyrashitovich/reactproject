import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './dialogs.module.css';

const Dialogs =(props)=>{
    return(
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={c.dialogs + '' + c.active}>
                   <NavLink to="dialogs/1">Dimych</NavLink> 
                </div>
                <div className={c.dialog}>
                <NavLink to="dialogs/2"> Andrei</NavLink>
                   
                </div>
                <div className={c.dialog}>
                <NavLink to="dialogs/3"> Sveta</NavLink>
                    
                </div>
                <div className={c.dialog}>
                <NavLink to="dialogs/4"> Sashs</NavLink>
                    
                </div>
                <div className={c.dialog}>
                <NavLink to="dialogs/5">  Vitor</NavLink>
                   
                </div>

            </div>
            <div className={c.messeges}>
                <div className={c.messege}>
                    Hi
                </div>
                <div className={c.messege}>
                    How is your it kurs?
                </div>
                <div className={c.messege}>
                    Yo
                </div>
            </div>

          
        </div>
    )
}

export default Dialogs;