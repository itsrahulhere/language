import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Q1 from './components/q1';
import Q1O1 from './components/q1o1';
import Q1O1Y from './components/q1o1Y';
import Q1O1N from './components/q1o1N';
import LangJS from './components/langJS';
import LangSWIFT from './components/langSWIFT';
import LangRUBY from './components/langRUBY';
import LangPY from './components/langPY';
import LangPHP from './components/langPHP';
import LangKOTLIN from './components/langKOTLIN';
import LangCPP from './components/langCPP';
/*
import Proglang from './components/proglang';*/
import LangCH from './components/langCH';
import LangC from './components/langC';
import LangJAVA from './components/langJAVA';
import Head from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
 
     <Head />
  <br /><br />
    <Q1 />
    
    <Q1O1 />  
    <Q1O1Y /> 
     <Q1O1N />
     <LangJS />
     <LangJAVA />
     <LangC />
     <LangCH />
     <LangCPP />
     <LangKOTLIN />
     <LangRUBY />
     <LangSWIFT />
     <LangPHP />
     <LangPY />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
