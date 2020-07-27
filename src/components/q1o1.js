import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q1O1Y from './q1o1Y';
import Q1O1N from './q1o1N';
import Q1 from './q1';


class Q1O1 extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O1"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O1") {
      return (
      <div className="main">
     
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Do you have an idea or platform in mind?</b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1Y"})}}><b style={{color:"#2dda66"}}>Yes</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1N"})}}><b style={{color:"#f5544e"}}>No</b> </div>
     
      </div>
      <div class="backbtn float-left"  onClick={ () => {this.setState({ whichComponentToShow: "Q1"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
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
    if (this.state.whichComponentToShow === "Q1O1N") {
      return (
        <div className="main">
          < Q1O1N />
          </div>
      );}
  if (this.state.whichComponentToShow === "Q1") {
    return (
      <div className="main">
        < Q1 />
        </div>
    );}

  }}
  export default Q1O1;
  
