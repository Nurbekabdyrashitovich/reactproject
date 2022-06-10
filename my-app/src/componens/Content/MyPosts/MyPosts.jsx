import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts=(props)=>{

  let postData = [
    {id:1, messege:'Hi, how are you', LikesCount:12},
    {id:2, messege:'How is you it', LikesCount:13}
       
    ]

    return(
      <div className={c.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          
          <div>
            <button>add post</button>
          </div>
        </div>

        <div className={c.posts}>
          <Post message ={postData[0].messege} LikesCount={postData[0].LikesCount}/>
          <Post message ={postData[1].messege} LikesCount={postData[1].LikesCount}/>

        </div>
  
      </div>
     
    
    )
}
export default MyPosts;