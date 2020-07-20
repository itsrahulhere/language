import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row,Col, Container} from 'reactstrap';
function Q4() {
    return (
      <div className="main">
       <Container>
       <Row>
             <Col lg="6" md="6" xl="6" xs="12" sm="12">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>How you want to learn</b></center></div> 
      <div className="options">
      <div class="qsbtn" ><b>Learn the easy way</b> </div>
      <div class="qsbtn" ><b>Learn the slighty harder way</b> </div>
      <div class="qsbtn" ><b><center>Learn the hard way but easier to pick up other languages</center></b> </div>
      
      </div>
      </div>
       </Col>
       </Row>
      </Container>
      <br />
      </div> 
    );
  }
  
  export default Q4;
  
