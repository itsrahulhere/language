import React,{Component} from 'react';
import java from './images/java.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appright from '../Appright';
import Q1O1NO2 from './q1o1No2';
class LangJAVA extends Component {
  state = {
    visible: true,
    whichComponentToShow: "LangJAVA"
  };

  render() {
    if (this.state.whichComponentToShow === "LangJAVA") {
      return (
      <div className="main">
    
             <div className="qrightinside"> 
             <center> <div className="qselect" style={{margin:"35px 0 0 0"}}><h5>Go with</h5></div></center>
              <div class="testimonials">
                <div class="card">
                <div class="layer">
                </div>
                  <div class="content">
                  <p className="langhead">JAVA</p>
                  <div class="image"><img src={java} alt={""}  /></div>
                  <div class="details">
                    <h2><b>Very popular on all platforms, OS, and devices due to its portability<br />
                    <span>One of the most in demand and highest paying programing languages</span></b></h2>
                  </div>
                  </div>
                </div>
              </div>
              
              <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1NO2"})}} ><b style={{color:"#FF4033"}}>Back</b> </div>
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
    if (this.state.whichComponentToShow === "Q1O1NO2") {
      return (
        <div className="main">
          < Q1O1NO2 />
          </div>
      );}


}}
  export default LangJAVA;
  
