import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LangJAVA from './langJAVA';
import LangC from './langC';
import Q1O1N from './q1o1N';

class Q1O1NO2 extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O1NO2"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O1NO2") {
      return (
      <div className="main">
      
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Which type of car do you like? </b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangJAVA"})}}><b>Auto car</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangC"})}}><b>Manual</b> </div>
      
      </div>
      <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1N"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
      </div>
     
      <br />
      </div> 
    );
  }
  if (this.state.whichComponentToShow === "LangJAVA") {
    return (
      <div className="main">
        < LangJAVA />
        </div>
    );}
    if (this.state.whichComponentToShow === "Q1O1N") {
      return (
        <div className="main">
          < Q1O1N />
          </div>
      );}
  if (this.state.whichComponentToShow === "LangC") {
    return (
      <div className="main">
        < LangC />
        </div>
    );}

  

}}
  export default Q1O1NO2;
  
