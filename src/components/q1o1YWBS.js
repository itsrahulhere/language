import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q1O1YWB from './q1o1YWB';
import Q1O1YWBSN from './q1o1YWBSN';
import LangJS from './LangJSq1o1YWBS';
class Q1O1YWBS extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O1YWBS"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O1YWBS") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Does your web app idea provide real-time info like twitter or facebook?</b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangJS"})}}><b style={{color:"#2dda66"}}>Yes</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YWBSN"})}}><b style={{color:"#f5544e"}}>No</b> </div>
      </div>
      <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YWB"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
      </div>
      
      <br />
      </div> 
    );
  }
  if (this.state.whichComponentToShow === "Q1O1YWB") {
    return (
      <div className="main">
        < Q1O1YWB />
        </div>
    );}
    if (this.state.whichComponentToShow === "LangJS") {
      return (
        <div className="main">
          < LangJS />
          </div>
      );}
      if (this.state.whichComponentToShow === "Q1O1YWBSN") {
        return (
          <div className="main">
            < Q1O1YWBSN />
            </div>
        );}
  }}
  export default Q1O1YWBS;
  
