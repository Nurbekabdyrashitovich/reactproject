import React from 'react';
import c from './mycontent.module.css';
import MyPosts from './MyPosts/MyPosts';

const Content=()=>{
    return(
      
      <div>
        <img src="http://zviazda.by/sites/default/files/field/image/30-6_kopiya_3.jpg" />
        <div >
          <a>Post</a>
        </div>
        <MyPosts />
      </div>
    
    )
}
export default Content;