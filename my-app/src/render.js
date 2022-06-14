import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import{addPost} from './redux/state';
import { BrowserRouter } from 'react-router-dom';



 

export let rerenderEntireTree = ()=>{


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <React.StrictMode>
     <App  
     posts={state.profilePage.posts} addPost={addPost}
     dialogs={state.messegesPage.dialogs} 
     messeges={state.messegesPage.messeges}
     />
   </React.StrictMode>
  </BrowserRouter>
);
}

