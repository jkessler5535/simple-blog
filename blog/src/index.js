import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  
);


reportWebVitals();
