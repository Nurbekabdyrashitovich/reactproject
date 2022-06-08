import c from './mycontent.module.css';
import MyPost from './MyPosts/MyPost';

const Content=()=>{
    return(
      <div className={c.content}>
        <img src="http://zviazda.by/sites/default/files/field/image/30-6_kopiya_3.jpg" alt="why" srcset="" />
        <div className={c.item}>
          <a>Post</a>
        </div>
        <MyPost />
      </div>
    
    )
}
export default Content;