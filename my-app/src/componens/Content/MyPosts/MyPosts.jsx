import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts=(props)=>{

  let postElement= props.
  posts.map(p=> <Post message ={p.messege} LikesCount={p.LikesCount}/>); 

  let newPostElement= React.createRef();

  let addPost =()=>{
  let text=newPostElement.current.value; props.addPost(text);}
debugger;
 

    return(
      <div className={c.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement} ></textarea>
          </div>
          
          <div>
            <button onClick={addPost}>add post</button>
          </div>
        </div>

        <div className={c.posts}>

          {postElement}


          {/* <Post message ={postData[0].messege} LikesCount={postData[0].LikesCount}/>
          <Post message ={postData[1].messege} LikesCount={postData[1].LikesCount}/> */}

        </div>
  
      </div>
     
    
    )
}
export default MyPosts;