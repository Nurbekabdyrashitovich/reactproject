import React from 'react';
import c from './mycontent.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content=(props)=>{


 
    return(
      
      <div>
        <ProfileInfo />
        <MyPosts posts = {props.posts} addPost={props.addPost} />
      </div>
    
    )
}
export default Content;