import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Context/App';
import reportWebVitals from './reportWebVitals';
import Callback from './Callback'
import CreateContex from './CreateContex';
import Useref from './Useref/Useref';
import Linkks from './Usecontext/Linkks';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <
      App/>
    {/* <Linkks/> */}
    {/* <Useref/> */}
    {/* <CreateContex/> */}
    {/* <App /> */}
{/* <Callback /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
