import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col} from 'reactstrap';

function Appleft() {
  
    return (
      <div className="main">
         <div className="my">
         <div className="myname">  
           <b>Hi, my name is <text style={{color:"#00cdac" }} > Rahul</text><br />
               I am unknown developer </b>
               <br />  
          </div>
          <div class="btn-container" >
          <a href="https://www.instagram.com/itsrahulhere_" style={{color:"#e8eff5"}} target="_blank" rel="noopener noreferrer">
          <div class="btn btnig">
  <i class="fab fa-instagram"></i>
</div></a>
<a href="https://www.linkedin.com/in/itsrahulhere" style={{color:"#e8eff5"}} target="_blank" rel="noopener noreferrer">
<div class="btn btnli">
  <i class="fab fa-linkedin"></i>
</div></a>
<a href="https://twitter.com/itsrahulhere_"  style={{color:"#e8eff5"}} target="_blank" rel="noopener noreferrer" > 
<div class="btn btntw">
  <i class="fab fa-twitter"></i>
</div></a>
</div>
       </div>
       <Row>
       <Col lg="12" md="12" xl="12" xs="12" sm="12">
        <div className="my">
          <b>Which <text style={{color:"#33C0FF" }} >programming language </text> should I learn? <br />
                I get asked this question and  <text style={{color:"#12011b" }} >"Which is the best programming language?"</text>, all the time. I've now created this web page on which is the best programming language and on this web page,
                I will cover which one you should pick. <br />  <br />
                It all starts with one simple question:   <br /><text style={{color:"#FF5733" }} >Why do you want to learn programming? </text> <br />
                <br />Hopefully, this web page will help you pick a language that you can start learning right away.
                <br />  <br />
                Source: <a href="http://carlcheo.com/startcoding" target="_blank" rel="noopener noreferrer" >http://carlcheo.com/startcoding</a>
          </b>
         </div>
         
      </Col>
      </Row>
          
      </div> 
   
    );
 
  }
  
  export default Appleft;
  