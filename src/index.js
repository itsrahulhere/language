import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Q1 from './components/q1';
import Q2 from './components/q2';
import Q3 from './components/q3';
import Q4 from './components/q4';
import Head from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
 
    <Head />
    <Q1 />
    <Q2 />  
    <Q3 /> 
     <Q4 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
