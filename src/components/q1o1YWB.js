import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q1O1YWBC from './q1o1YWBC';
import Q1O1YWBS from './q1o1YWBS';

import Q1O1YW from './q1o1YW';

class Q1O1YWB extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O1YWB"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O1YWB") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Backend</b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YWBS"})}}><b>Work for a startup</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YWBC"})}}><b>Work for corporate</b> </div>
      </div>
      <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YW"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
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
    if (this.state.whichComponentToShow === "Q1O1YW") {
      return (
        <div className="main">
          < Q1O1YW />
          </div>
      );}
      if (this.state.whichComponentToShow === "Q1O1YWBC") {
        return (
          <div className="main">
            < Q1O1YWBC />
            </div>
        );}
}}
  
  export default Q1O1YWB;
  
