import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q1O1 from './q1o1';
import LangCPP from './langCPPq1o1Y';
import Q1O1YB from './q1o1YB';
import Q1O1YM from './q1o1YM';
import Q1O1YW from './q1o1YW';
import LangJAVA from './langJAVAq1o1Y';
class Q1O1Y extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O1Y"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O1Y") {
      return (
      <div className="main">
      
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="quesq1">
        <center><b>Which platform / field?</b></center></div> 
      <div className="options">
      <div class="newqsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YW"})}}><b>Web</b> </div>
      <div class="newqsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YB"})}}><b>Big Tech Company</b> </div>
      <div class="newqsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YM"})}}><b>Mobile</b> </div>
      <div class="newqsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangCPP"})}}><b>Gaming</b> </div>
      <div class="newqsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangJAVA"})}}><b>Don't matter, I just want <text style={{color:"#25B779"}}>$$$</text></b> </div>
      </div>
      <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
      </div>
     
      <br />
      </div> 
    );
  }
  if (this.state.whichComponentToShow === "Q1O1") {
    return (
      <div className="main">
        < Q1O1 />
        </div>
    );}
    if (this.state.whichComponentToShow === "Q1O1YM") {
      return (
        <div className="main">
          < Q1O1YM />
          </div>
      );}
      if (this.state.whichComponentToShow === "Q1O1YB") {
        return (
          <div className="main">
            < Q1O1YB />
            </div>
        );}
        if (this.state.whichComponentToShow === "Q1O1YW") {
          return (
            <div className="main">
              < Q1O1YW />
              </div>
          );}
          if (this.state.whichComponentToShow === "LangJAVA") {
            return (
              <div className="main">
                < LangJAVA />
                </div>
            );}
            if (this.state.whichComponentToShow === "LangCPP") {
              return (
                <div className="main">
                  < LangCPP />
                  </div>
              );}
}}
  export default Q1O1Y;
  
