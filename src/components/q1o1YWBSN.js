import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q1O1YWBS from './q1o1YWBS';
import Q1O1YWBSNN from './q1o1YWBSNN';
import LangJS from './LangJSq1o1YWBSN';
class Q1O1YWBSN extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O1YWBSN"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O1YWBSN") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Do you want to try something new with huge potential but less mature?</b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangJS"})}}><b style={{color:"#2dda66"}}>Yes</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YWBSNN"})}}><b style={{color:"#f5544e"}}>No</b> </div>
      
      </div>
      <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YWBS"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
      </div>
     
      <br />
      </div> 
    );
  }
  if (this.state.whichComponentToShow === "Q1O1YWBS") {
    return (
      <div className="main">
        < Q1O1YWBS />
        </div>
    );} 
    if (this.state.whichComponentToShow === "LangJS") {
      return (
        <div className="main">
          < LangJS />
          </div>
      );} 
  
  
  if (this.state.whichComponentToShow === "Q1O1YWBSNN") {
    return (
      <div className="main">
        < Q1O1YWBSNN />
        </div>
    );} 

  }}
  export default Q1O1YWBSN;
  
