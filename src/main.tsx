import React from 'react'
import ReactDOM from 'react-dom/client'
import { App , App2 } from './App';
import './main.sass'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>
  */
  <App2 />
)
