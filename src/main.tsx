import React from 'react'
import ReactDOM from 'react-dom/client'
import { App , App2, App3, TareaTODO } from './App';
import './main.sass'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  <App2 />

  <React.StrictMode><TareaTODO/></React.StrictMode>
  */
 

 <BrowserRouter>
    <App3 />
  </BrowserRouter>
  
  
  
  
)
