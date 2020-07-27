import React,{Component} from 'react';
import csharp from './images/c-sharp.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appright from '../Appright';
import Q1O1YB from './q1o1YB'
class LangCH extends Component {
  state = {
    visible: true,
    whichComponentToShow: "LangCH"
  };

  render() {
    if (this.state.whichComponentToShow === "LangCH") {
      return (
      <div className="main">
             <div className="qrightinside"> 
             <center> <div className="qselect" style={{margin:"35px 0 0 0"}}><h5>Go with</h5></div></center>
              <div class="testimonials">
                <div class="card">
                <div class="layer">
                </div>
                  <div class="content">
                  <p className="langhead">C#</p>
                  <div class="image"><img src={csharp} alt={""}  /></div>
                  <div class="details">
                    <h2><b>A popular choice for enterprise to create websites and Windows application using .NET framework<br />
                    <span>Can be used to bluid website with ASP.NET, a web framework from Microsoft</span></b></h2>
                  </div>
                  </div>
                </div>
              </div>
              
              <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1YB"})}}><b style={{color:"#FF4033"}}>Back</b> </div>
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
    if (this.state.whichComponentToShow === "Q1O1YB") {
      return (
        <div className="main">
          < Q1O1YB />
          </div>
      );}


}}
  export default LangCH;
  
