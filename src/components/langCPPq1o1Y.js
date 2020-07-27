import React,{Component} from 'react';
import cpp from './images/c++.svg';
import Appright from '../Appright';
import Q1O1Y from './q1o1Y';
import 'bootstrap/dist/css/bootstrap.min.css';
class LangCPP extends Component {
  state = {
    visible: true,
    whichComponentToShow: "LangCPP"
  };

  render() {
    if (this.state.whichComponentToShow === "LangCPP") {
      return (
      <div className="main">
    
             <div className="qrightinside"> 
             <center> <div className="qselect" style={{margin:"35px 0 0 0"}}><h5>Go with</h5></div></center>
              <div class="testimonials">
                <div class="card">
                <div class="layer">
                </div>
                  <div class="content">
                  <p className="langhead">CPP</p>
                  <div class="image"><img src={cpp} alt={""}  /></div>
                  <div class="details">
                  <h2><b>Widely used for developing games, industrail and performance-critical applicatons<br />
                    <span>Learning C++ is like lerning how to drive a car</span></b></h2>
                  </div>
                  </div>
                </div>
              </div>
              
              <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1Y"})}} ><b style={{color:"#FF4033"}}>Back</b> </div>
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
    if (this.state.whichComponentToShow === "Q1O1Y") {
      return (
        <div className="main">
          < Q1O1Y />
          </div>
      );}

}}

  export default LangCPP;
  
