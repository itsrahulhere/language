import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Q1 from './components/q1';
import java from './components/images/java.svg';
import c from './components/images/c.svg';
import ch from './components/images/c-sharp.svg';
import cpp from './components/images/c++.svg';
import javascript from './components/images/javascript.svg';
import php from './components/images/php.svg';
import kotlin from './components/images/kotlin.svg';
import python from './components/images/python.svg';
import swift from './components/images/swift.svg';
import ruby from './components/images/ruby.svg';

class Appright extends Component {
  state = {
    visible: true,
    whichComponentToShow: "first"
  };

  render() {
    if (this.state.whichComponentToShow === "first") {
      return (
      <div className="main">
         
          
             <div className="my">
               <div className="myname">   
               <div className="rightinside" style={{margin:"15px 0 0 0"}}> 
                <center  style={{margin:"20px 0 0 0"}}> <b>
                   Which programming language should you learn?
                 </b>
                 </center>     
                  <div class="logo">
                   <img src={python} alt="" style={{left:"10%"}}/>
                   <img src={java} alt="" style={{left:"25%", margin:"55px 0 5px 0"}}   />
                   <img src={cpp} alt="" style={{left:"40%"}} />
                   <img src={kotlin} alt="" style={{right:"25%", margin:"55px 0 5px 0"}}  />
                   <img src={javascript} alt="" style={{right:"10%"}} /></div>
                  <div class="lsbtn" onClick={ () => {this.setState({ whichComponentToShow: "Q1"})}}>
                    <b style={{fontFamily: "Varela Round"}}> <center>Click here to find that </center></b>
                    </div>
                    <div class="logo">
                    <img src={ruby} alt="" style={{left:"10%"}} />
                    <img src={c} alt="" style={{left:"25%", margin:"60px 0 0 0"}}/>
                    <img src={php} alt=""  style={{left:"40%", margin:"0 0 0 8px"}} />
                    <img src={ch} alt=""  style={{right:"25%", margin:"60px 0 0 0"}} />
                    <img src={swift} alt="" style={{right:"10%"}} />
                    </div>
                   </div>
               </div>
             </div>
           
   
      <br />
      </div> 
   
    );
  }
  
  else if (this.state.whichComponentToShow === "Q1") {
    return (
     <div className="main">
         <Q1 />
     </div>
    );
  }


}
}

  export default Appright;
  