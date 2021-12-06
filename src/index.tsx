import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const X=(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

const Y=document.getElementById('root')

const render=()=>{
    console.log(31221);
    ReactDOM.render(X,Y);
}

render()

reportWebVitals();
