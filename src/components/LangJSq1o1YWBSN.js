import React,{Component} from 'react';
import javascript from './images/javascript.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appright from '../Appright';
import Q1O1YWBSN from './q1o1YWBSN';
class LangJS extends Component {
  state = {
    visible: true,
    whichComponentToShow: "LangJS"
  };

  render() {
    if (this.state.whichComponentToShow === "LangJS") {
      return (
      <div className="main">

             <div className="qrightinside"> 
             <center> <div className="qselect" style={{margin:"35px 0 0 0"}}><h5>Go with</h5></div></center>
              <div class="testimonials">
                <div class="card">
                <div class="layer">
                </div>
                  <div class="content">
                  <p className="langhead">JAVASCRIPT</p>
                  <div class="image"><img src={javascript} alt={""}  /></div>
                  <div class="details">
                    <h2><b>Most popular clients-side web scripting language<br /><span>One of the hottest programming language now, due to its increasing popularity as server-side language(node.js)</span></b></h2>
                  </div>
                  </div>
                </div>
              </div>
              
              <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YWBSN"})}} ><b style={{color:"#FF4033"}}>Back</b> </div>
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
    if (this.state.whichComponentToShow === "Q1O1YWBSN") {
      return (
        <div className="main">
          < Q1O1YWBSN />
          </div>
      );}

}}
  export default LangJS;
  
