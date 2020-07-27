import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LangSWIFT from './langSWIFT';
import LangPY from './langPYq1o1YB';

import LangCH from './langCH';
import Q1O1Y from './q1o1Y';

class Q1O1YB extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O1YB"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O1YB") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Which big tech company? </b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangSWIFT"})}}><b>Apple</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangPY"})}}><b>Google</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangPY"})}}><b>Facebook</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangCH"})}}><b>Microsoft</b> </div>
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
    if (this.state.whichComponentToShow === "LangCH") {
      return (
        <div className="main">
          < LangCH />
          </div>
      );}
      if (this.state.whichComponentToShow === "LangPY") {
        return (
          <div className="main">
            < LangPY />
            </div>
        );}
}}
  export default Q1O1YB;
  
