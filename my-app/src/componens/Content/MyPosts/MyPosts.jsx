import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts=()=>{
    return(
      <div>
        <div>
          <textarea></textarea>
          <button>add post</button>
        </div>

        <div className={c.posts}>
          <Post message ='hi how are you' why='hello'/>
          <Post />

        </div>
  
      </div>
     
    
    )
}
export default MyPosts;