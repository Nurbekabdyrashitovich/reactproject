import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Navbar.module.css' 

const Navbar=()=>{
    return(
      <nav className={c.nav}>
        <div className={c.item}>
          <NavLink to ="/mycontent" className = { navData => navData.isActive ? c.active : c.item } >Content</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to='/dialogs'>Messege</NavLink>
        </div>
        {/* <div className={c.item}>
          <a>Messege</a>
        </div>
        <div className={c.item}>
          <a>Text</a>
        </div> */}
      
    </nav>
    )
}
export default Navbar;
