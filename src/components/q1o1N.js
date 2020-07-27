import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LangCPP from './langCPP';
import Q1O1NO2 from './q1o1No2';
import LangPY from './langPYq1o1N';
import Q1O1 from './q1o1';
class Q1O1N extends Component {
  state = {
    visible: true,
    whichComponentToShow: "Q1O1N"
  };

  render() {
    if (this.state.whichComponentToShow === "Q1O1N") {
      return (
      <div className="main">
      
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>How you want to learn?</b></center></div> 
      <div className="options">
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangPY"})}}><b>Learn the easy way</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1NO2"})}}><b>Learn the slighty harder way</b> </div>
      <div class="qsbtn" onClick={ () => {this.setState({ whichComponentToShow: "LangCPP"})}}><b><center>Learn the hard way but easier to pick up other languages</center></b> </div>
      
      </div>
      <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
      </div>
     
      <br />
      </div> 
    );
  }
  if (this.state.whichComponentToShow === "LangPY") {
    return (
      <div className="main">
        < LangPY />
        </div>
    );}
    if (this.state.whichComponentToShow === "Q1O1NO2") {
      return (
        <div className="main">
          < Q1O1NO2 />
          </div>
      );}
      if (this.state.whichComponentToShow === "Q1O1") {
        return (
          <div className="main">
            < Q1O1 />
            </div>
        );}
  if (this.state.whichComponentToShow === "LangCPP") {
    return (
      <div className="main">
        < LangCPP />
        </div>
    );}


}}
  export default Q1O1N;
  
