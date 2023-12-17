import './App.css';
import React, {useState} from 'react';
import Blog1 from "./components/Blog1.js";
import Blog2 from "./components/Blog2.js";
import Blog3 from "./components/Blog3.js";
import Blog4 from "./components/Blog4.js";
import Home from "./components/Home.js";
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';





const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/blog1' element={<Blog1/>} />
        <Route path ='/blog2' element={<Blog2/>} />
        <Route path ='/blog3' element={<Blog3/>} />
        <Route path ='/blog4' element={<Blog4/>} />
      </Routes>  
      <Footer/>
    </div>
  );
}

export default App;
