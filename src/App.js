import React  from 'react';
import './App.css';
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
import { Col, Row, Container } from 'reactstrap';
function Head() {
    return (
      <div className="heading">
        <Container>
         <Row>
           <Col lg="12" md="12" xl="12" xs="12" sm="12">
           
          
           <div className="navbtn float-right" style={{color:"#fff"}}><b>Home</b></div>
           <div className="navbtn float-right"></div>
           </Col>

    </Row>
    </Container>

       <Container>
         <Row>
           <Col lg="6" md="6" xl="6" xs="12" sm="12">
             <div className="my">
               <div className="myname">  
                 <b>Hi, my name is <text style={{color:"#00cdac" }} > Rahul</text><br />
                     I am unknown developer </b>
                     <br />  
                </div>


                <div class="btn-container">
                <a href="https://www.instagram.com/itsrahulhere_" style={{color:"#e8eff5"}} target="_blank" rel="noopener noreferrer">
                <div class="btn btnig">
        <i class="fab fa-instagram"></i>
      </div></a>
      <a href="https://www.linkedin.com/in/itsrahulhere" style={{color:"#e8eff5"}} target="_blank" rel="noopener noreferrer">
      <div class="btn btnli">
        <i class="fab fa-linkedin"></i>
      </div></a>
      <a href="https://twitter.com/itsrahulhere_" style={{color:"#e8eff5"}} target="_blank" rel="noopener noreferrer" > 
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
           </Col>
         
           <Col lg="6" md="6" xl="6" xs="12" sm="12">
             <div className="my">
               <div className="myname">   
               <div className="rightinside"> 
               <br /> 
                <center> <b>
                   Which programming language should you learn?
                 </b>
                 </center>     
             
                  <div class="logo">
                   <img src={python} alt="" style={{left:"10%"}}/>
                   <img src={java} alt="" style={{left:"25%", margin:"55px 0 5px 0"}}   />
                   <img src={cpp} alt="" style={{left:"40%"}} />
                   <img src={kotlin} alt="" style={{right:"25%", margin:"55px 0 5px 0"}}  />
                   <img src={javascript} alt="" style={{right:"10%"}} /></div>
         
                    <div class="lsbtn" >
                    <b> <center>Click here to find that </center></b>
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
            </Col>
         </Row>
         <Row>
   
         </Row>
       </Container>

     

      
      </div>
    );
  }
  
  export default Head;
  
