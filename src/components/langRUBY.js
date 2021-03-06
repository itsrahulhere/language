import React,{Component} from 'react';
import ruby from './images/ruby.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q1O1YWBSNN from './q1o1YWBSNN';
import Appright from '../Appright';

class LangRUBY extends Component {
  state = {
    visible: true,
    whichComponentToShow: "LangRUBY"
  };

  render() {
    if (this.state.whichComponentToShow === "LangRUBY") {
      return (
      <div className="main">
    
             <div className="qrightinside"> 
             <center> <div className="qselect" style={{margin:"35px 0 0 0"}}><h5>Go with</h5></div></center>
              <div class="testimonials">
                <div class="card">
                <div class="layer">
                </div>
                  <div class="content">
                  <p className="langhead">RUBY</p>
                  <div class="image"><img src={ruby} alt={""}  /></div>
                  <div class="details">
                    <h2><b>Mostly known for its popular web framework, Ruby on Rails<br /><span>Best for fun and personal projects, startups, and rapid development</span></b></h2>
                  </div>
                  </div>
                </div>
              </div>
              
              <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YWBSNN"})}} ><b style={{color:"#FF4033"}}>Back</b> </div>
              <div class="backbtn float-right" onClick={ () => {this.setState({ whichComponentToShow: "Appright"})}} style={{right:"35px"}} ><b style={{color:"#25B779"}}>Want to do it again</b> </div>
              
             </div>
          
      <br />
      </div> 
    );
  }
  
  if (this.state.whichComponentToShow === "Appright") {
    return (
      <div className="main">
        < Appright />
        </div>
    );}
    if (this.state.whichComponentToShow === "Q1O1YWBSNN") {
      return (
        <div className="main">
          < Q1O1YWBSNN />
          </div>
      );}

}}
  export default LangRUBY;
  
