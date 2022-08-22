import React from 'react'
import ReactDOM from 'react-dom/client'
import { App , App2, App3, TareaTODO } from './App';
import './main.sass'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from "react-router-dom";

const renderAPP = {
  app1:() => {ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode><App/></React.StrictMode>
    )
  },
  app2:() => {ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode><App2/></React.StrictMode>
    )
  },
  app3:() => {ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter><React.StrictMode><App3/></React.StrictMode></BrowserRouter>
    )
  },
  app4:() => {ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode><TareaTODO/></React.StrictMode>
    )
  },
}

renderAPP.app1();
