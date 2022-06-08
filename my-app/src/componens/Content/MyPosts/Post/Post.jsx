import c from './Post.module.css';

const Post=(props)=>{
    return(
      <div className={c.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrhlwZbHj_ncqJXTuwthS1chdqn1wE_WYXw&usqp=CAU" alt="why" srcset="" />

          { props.message }
        <div>
          <span>like</span>
          <br />
          {props.why}
        </div>


      </div>
    
    )
}
export default Post;