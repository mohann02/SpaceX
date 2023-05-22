import React from 'react';
import './App.css'
import MainHead from './components/MainHead';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './Register';
import Login from './Login';

const App = () => {
  return (
    <div>
{/*  
      <MainHead/> */}
      <BrowserRouter>
      <Routes>
        
        <Route path="/main" element={<MainHead  />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
