import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LangSWIFT from './langSWIFTq1o1YM';
import LangKOTLIN from './langKOTLIN';

import Q1O1Y from './q1o1Y';

class Q1O1YM extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O1YM"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O1YM") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Which operating system? </b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangSWIFT"})}}><b>iOS</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangKOTLIN"})}}><b>Android</b> </div>
      </div>
      <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1Y"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
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
  if (this.state.whichComponentToShow === "LangSWIFT") {
    return (
      <div className="main">
        < LangSWIFT />
        </div>
    );}
    if (this.state.whichComponentToShow === "LangKOTLIN") {
      return (
        <div className="main">
          < LangKOTLIN />
          </div>
      );}
    
}}
  export default Q1O1YM;
  
