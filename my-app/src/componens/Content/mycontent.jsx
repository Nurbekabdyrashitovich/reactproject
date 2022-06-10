import React from 'react';
import c from './mycontent.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content=()=>{
    return(
      
      <div>
        <ProfileInfo />
        <MyPosts />
      </div>
    
    )
}
export default Content;