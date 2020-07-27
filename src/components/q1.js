import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q1O1 from './q1o1';
import Q1O4 from './q1o4';
import LangPY from './langPY';
import Appright from '../Appright';




class Q1 extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Why do you want to learn programming?</b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1"})}}><b>For fun / Interested / Improve myself</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangPY"})}}><b>I'm not sure. Pick for me</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangPY"})}}><b>For my kids</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O4"})}}><b>To make money</b> </div>
      </div>
      <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Appright"})}} ><b style={{color:"#FF4033"}}>Back</b> </div>
      </div>
      
      <br />
      </div>
    );
  }
  if (this.state.whichComponentToShow === "LangPY") {
    return (
      <div>
        < LangPY/>
        </div>
    );}
  if (this.state.whichComponentToShow === "Q1O1") {
    return (
      <div>
        < Q1O1 />
        </div>
    );}
    if (this.state.whichComponentToShow === "Q1O4") {
      return (
        <div>
          < Q1O4 />
          </div>
      );}
      if (this.state.whichComponentToShow === "Appright") {
        return (
          <div>
            < Appright />
            </div>
        );}
  }}

  
  export default Q1;
  
