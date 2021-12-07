import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss'
import  {BrowserRouter} from "react-router-dom";

const X=(
    <React.StrictMode>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </React.StrictMode>
)

const Y=document.getElementById('root')

const render=()=>{
    console.log(312221);
    ReactDOM.render(X,Y);
}

render()

reportWebVitals();
