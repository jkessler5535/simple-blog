import './App.css';
import Blog1 from "./components/Blog1.js";
import Home from "./components/Home.js";
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';


const App = ()=> {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/blog1' element={<Blog1/>} />
      </Routes>
    </div>
  );
}

export default App;
