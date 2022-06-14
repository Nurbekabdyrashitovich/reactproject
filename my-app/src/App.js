import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componens/Header/Header';
import Navbar from './componens/Navbar/Navbar';
import Content from './componens/Content/mycontent';
import Dialogs from './componens/Dialogs/dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App (props) {
  return (
    <BrowserRouter>

      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            

             <Route path="/dialogs" element={<Dialogs dialogs ={props.dialogs} messeges={props.messeges}/>} />
            <Route path="/mycontent" element={<Content />} /> 
           
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

