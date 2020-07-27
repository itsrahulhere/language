import React,{Component} from 'react';
import php from './images/php.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q1O1YWBSNN from './q1o1YWBSNN';
import Appright from '../Appright';

class LangPHP extends Component {
  state = {
    visible: true,
    whichComponentToShow: "LangPHP"
  };

  render() {
    if (this.state.whichComponentToShow === "LangPHP") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <center> <div className="qselect" style={{margin:"35px 0 0 0"}}><h5>Go with</h5></div></center>
              <div class="testimonials">
                <div class="card">
                <div class="layer">
                </div>
                  <div class="content">
                  <p className="langhead">PHP</p>
                  <div class="image"><img src={php} alt={""} style={{margin:"10px 0 0 0"}}  /></div>
                  <div class="details">
                    <h2><b>Suitable for building small and simple sites within a short time frame <br />
                    <span>Supported by almost every web hosting servies with lower price </span></b></h2>
                  </div>
                  </div>
                </div>
              </div>
              
              <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YWBSNN"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
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
  export default LangPHP;
  
