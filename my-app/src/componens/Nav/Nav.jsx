import n from './Nav.module.css' 

const Nav=()=>{
    return(
      <nav className={n.nav}>
        <div className={n.item}>
          <a>Profile</a>
        </div>
        <div className={n.item}>
          <a>Messege</a>
        </div>
        <div className={n.item}>
          <a>Content</a>
        </div>
        <div className={n.item}>
          <a>Text</a>
        </div>
      
    </nav>
    )
}
export default Nav;