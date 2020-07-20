import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Q1 from './components/q1';
import Q1O1 from './components/q1o1';
import Q1O1Y from './components/q1o1Y';
import Q1O1N from './components/q1o1N';
import LangJS from './components/langJS';
import Head from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
 
    <Head />
    <LangJS />
    <Q1 />
    
    <Q1O1 />  
    <Q1O1Y /> 
     <Q1O1N />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
