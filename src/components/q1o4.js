import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Q1O1Y from './q1o1Y';

import Q1 from './q1';

class Q1O4 extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O4"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O4") {
      return (
      <div className="main">
     
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>How do you want to make money?</b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1Y"})}}><b>To get a job</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1Y"})}}><b>I have a startup idea!</b> </div>

      </div>
      <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
      </div>
     
      <br />
      </div> 
    );
  }
  
  if (this.state.whichComponentToShow === "Q1O1Y") {
    return (
      <div className="main">
        < Q1O1Y />
        </div>
    );}
    if (this.state.whichComponentToShow === "Q1") {
      return (
        <div className="main">
          < Q1 />
          </div>
      );}
  

  }}
  export default Q1O4;
  
