import React,{Component} from 'react';
import c from './images/c.svg';
import Appright from '../Appright';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q1O1NO2 from './q1o1No2'
class LangC extends Component {
  state = {
    visible: true,
    whichComponentToShow: "LangC"
  };

  render() {
    if (this.state.whichComponentToShow === "LangC") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <center> <div className="qselect" style={{margin:"35px 0 0 0"}}><h5>Go with</h5></div></center>
              <div class="testimonials">
                <div class="card">
                <div class="layer">
                </div>
                  <div class="content">
                  <p className="langhead">C</p>
                  <div class="image"><img src={c} alt={""}  /></div>
                  <div class="details">
                    <h2><b>One of the oldest and widely used language in the world<br /><span>Popular language for system and hardware programming</span></b></h2>
                  </div>
                  </div>
                </div>
              </div>
              
              <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1NO2"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
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
  export default LangC;
  
