import './App.css';
import Blog1 from "./components/Blog1.js";
import Blog2 from "./components/Blog2.js";
import Home from "./components/Home.js";
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';


const App = ()=> {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/blog1' element={<Blog1/>} />
        <Route path ='/blog2' element={<Blog2/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
