import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row,Col, Container} from 'reactstrap';
function Q1O1Y() {
    return (
      <div className="main">
       <Container>
       <Row>
             <Col lg="6" md="6" xl="6" xs="12" sm="12">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>What is your favorite toy?</b></center></div> 
      <div className="options">
      <div class="qsbtn" ><b>Lego</b> </div>
      <div class="qsbtn" ><b>Play-Doh</b> </div>
      <div class="qsbtn" ><b>I have an old and ugly toy but I love it so much</b> </div>
      </div>
      <div class="backbtn float-left" ><b style={{color:"#FF4033"}}>Back</b> </div>
      </div>
       </Col>
       </Row>
      </Container>
      <br />
      </div> 
    );
  }
  
  export default Q1O1Y;
  
