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
        <center><b>Which platform / field?</b></center></div> 
      <div className="options">
      <div class="qsbtn" ><b>Web</b> </div>
      <div class="qsbtn" ><b>Big Tech Company</b> </div>
      <div class="qsbtn" ><b>Mobile</b> </div>
      <div class="qsbtn" ><b>Gaming</b> </div>
      <div class="qsbtn" ><b>Don't matter, I just want $$$</b> </div>
      </div>
      </div>
       </Col>
       </Row>
      </Container>
      <br />
      </div> 
    );
  }
  
  export default Q1O1Y;
  
