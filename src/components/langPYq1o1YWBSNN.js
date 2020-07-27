import React, {Component} from 'react';
import python from './images/python.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appright from '../Appright';

import Q1O1YWBSNN from './q1o1YWBSNN';
class LangPY extends Component {
  state = {
    visible: true,
    whichComponentToShow: "LangPY"
  };

  render() {
    if (this.state.whichComponentToShow === "LangPY") {
      return (
      <div className="main">
    
             <div className="qrightinside"> 
             <center> <div className="qselect" style={{margin:"35px 0 0 0"}}><h5>Go with</h5></div></center>
              <div class="testimonials">
                <div class="card">
                <div class="layer">
                </div>
                  <div class="content">
                  <p className="langhead">PYTHON</p>
                  <div class="image"><img src={python} alt={""}  /></div>
                  <div class="details">
                    <h2><b>Widely used in scientific, technical and academic field, i.e. Artifical Intelligence <br /><span>You can build website using Django, a popular Python web framework</span></b></h2>
                  </div>
                  </div>
                </div>
              </div>
              
              <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YWBSNN"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
              <div class="backbtn float-right" style={{right:"35px"}} onClick={ () => {this.setState({ whichComponentToShow: "Appright"})}} ><b style={{color:"#25B779"}}>Want to do it again</b> </div>
              
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
  export default LangPY;
  
