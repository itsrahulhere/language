import React from 'react';
import javascript from './images/javascript.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row,Col, Container} from 'reactstrap';
function LangJS() {
    return (
      <div className="main">
       <Container>
       <Row>
             <Col lg="6" md="6" xl="6" xs="12" sm="12">
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
              
              <div class="backbtn float-left" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1Y"})}} ><b style={{color:"#FF4033"}}>Back</b> </div>
              <div class="backbtn float-right" onClick={ () => {this.setState({ whichComponentToShow: "Q1O1Y"})}} style={{right:"35px"}} ><b style={{color:"#25B779"}}>Want to do it again</b> </div>
              
             </div>
             </Col>
       </Row>
      </Container>
      <br />
      </div> 
    );
  }
  
  export default LangJS;
  
