import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LangJS from './langJS';
import Q1O1YWB from './q1o1YWB';

import Q1O1Y from './q1o1Y';

class Q1O1YW extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O1YW"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O1YW") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Web</b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangJS"})}}><b>Frontend</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YWB"})}}><b>Backend</b> </div>
      
      </div>
      <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1Y"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
      </div>
     
      <br />
      </div> 
    );
  }
  if (this.state.whichComponentToShow === "LangJS") {
    return (
      <div className="main">
        < LangJS />
        </div>
    );}
    if (this.state.whichComponentToShow === "Q1O1YWB") {
      return (
        <div className="main">
          < Q1O1YWB />
          </div>
      );}
      if (this.state.whichComponentToShow === "Q1O1Y") {
        return (
          <div className="main">
            < Q1O1Y />
            </div>
        );}
    
}}
  export default Q1O1YW;
  
