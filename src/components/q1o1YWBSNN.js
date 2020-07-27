import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Q1O1YWBSN from './q1o1YWBSN';
import LangPY from './langPYq1o1YWBSNN';
import LangRUBY from './langRUBY';
import LangPHP from './langPHP';

class Q1O1YWBSNN extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O1YWBSNN"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O1YWBSNN") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>What is your favorite toy?</b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangPY"})}}><b>Lego</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangRUBY"})}}><b>Play-Doh</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangPHP"})}}><b>I have an old and ugly toy but I love it so much</b> </div>
      </div>
      <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YWBSN"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
      </div>
   
      <br />
      </div> 
    );
  }

  if (this.state.whichComponentToShow === "Q1O1YWBSN") {
    return (
      <div className="main">
        < Q1O1YWBSN />
        </div>
    );} 
    
  if (this.state.whichComponentToShow === "LangPY") {
    return (
      <div className="main">
        < LangPY />
        </div>
    );} 
    
  if (this.state.whichComponentToShow === "LangRUBY") {
    return (
      <div className="main">
        < LangRUBY />
        </div>
    );} 
    
  if (this.state.whichComponentToShow === "LangPHP") {
    return (
      <div className="main">
        < LangPHP />
        </div>
    );} 

}}
  export default Q1O1YWBSNN;
  
