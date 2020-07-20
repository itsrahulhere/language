import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row,Col, Container} from 'reactstrap';


function Q1() {
  
    return (
      <div className="main">
       <Container>
       <Row>
             <Col lg="6" md="6" xl="6" xs="12" sm="12">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Why do you want to learn programming?</b></center></div> 
      <div className="options">
      <div class="qsbtn" ><b>For fun / Interested / Improve myself</b> </div>
      <div class="qsbtn" ><b>I'm not sure. Pick for me</b> </div>
      <div class="qsbtn" ><b>For my kids</b> </div>
      <div class="qsbtn" ><b>To make money</b> </div>
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
  
  export default Q1;
  
