import './App.css';
import Blog from "./components/Blog.js";
import Home from "./components/Home.js";
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';


const App = ()=> {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/blog' element={<Blog/>} />
      </Routes>
    </div>
  );
}

export default App;
