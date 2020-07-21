import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row,Col, Container} from 'reactstrap';
function Q1O1YWBS() {
    return (
      <div className="main">
       <Container>
       <Row>
             <Col lg="6" md="6" xl="6" xs="12" sm="12">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Does your web app idea provide real-time info like twitter or facebook?</b></center></div> 
      <div className="options">
      <div class="qsbtn" ><b style={{color:"#2dda66"}}>Yes</b> </div>
      <div class="qsbtn" ><b style={{color:"#f5544e"}}>No</b> </div>
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
  
  export default Q1O1YWBS;
  
