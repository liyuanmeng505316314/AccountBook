import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.scss'

const X=(
    <React.StrictMode>
        <HashRouter>
        <App/>
        </HashRouter>
    </React.StrictMode>
)

const Y=document.getElementById('root')

const render=()=>{
    console.log(312221);
    ReactDOM.render(X,Y);
}

render()

reportWebVitals();
