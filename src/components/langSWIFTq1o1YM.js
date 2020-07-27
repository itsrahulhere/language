import React,{Component} from 'react';
import swift from './images/swift.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q1O1YM from './q1o1YM';
import Appright from '../Appright';
class LangSWIFT extends Component {
  state = {
    visible: true,
    whichComponentToShow: "LangSWIFT"
  };

  render() {
    if (this.state.whichComponentToShow === "LangSWIFT") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <center> <div className="qselect" style={{margin:"35px 0 0 0"}}><h5>Go with</h5></div></center>
              <div class="testimonials">
                <div class="card">
                <div class="layer">
                </div>
                  <div class="content">
                  <p className="langhead">SWIFT</p>
                  <div class="image"><img src={swift} alt={""}  /></div>
                  <div class="details">
                    <h2><b>Powerful and intuitive programming language for OS devices and beyond<br />
                    <span>General-purpose programming language built using a modern approach to safety, performance, and software design patterns</span></b></h2>
                  </div>
                  </div>
                </div>
              </div>
              
              <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YM"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
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
    if (this.state.whichComponentToShow === "Q1O1YM") {
      return (
        <div className="main">
          < Q1O1YM />
          </div>
      );}


}}
  export default LangSWIFT;
  
