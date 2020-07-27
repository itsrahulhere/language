import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q1O1YWB from './q1o1YWB';
import LangJAVA from './langJAVAq1o1YWBC';
import LangCH from './langCHq1o1YWBC';

class Q1O1YWBC extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O1YWBC"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O1YWBC") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Do you like Microsoft?</b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "langCH"})}}><b style={{color:"#2dda66"}}>Yes, I am fan of Microsoft</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "langJAVA"})}}><b style={{color:"#f5544e"}}>No / Not sure / I like FAANG</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "langJAVA"})}}><b style={{color:"#f5544e"}}>Meh (You say or You select for me!)</b> </div>
      
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
    if (this.state.whichComponentToShow === "langJAVA") {
      return (
        <div className="main">
          < LangJAVA />
          </div>
      );}
      if (this.state.whichComponentToShow === "langCH") {
        return (
          <div className="main">
            < LangCH />
            </div>
        );}
}}

export default Q1O1YWBC;
  
