import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
// import{addPost} from './redux/state';
// import { BrowserRouter } from 'react-router-dom';
import {rerenderEntireTree} from "./render";



 



rerenderEntireTree();
  
//    <React.StrictMode>
//      <App  
     
//      dialogs={state.dialogs} 
//      messeges={state.messeges}
//     //  post={state.profilePage.posts}
//      />
         
//    </React.StrictMode>,
//     document.getElementById('root')
// );
// }



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
