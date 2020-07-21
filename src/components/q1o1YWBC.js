import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row,Col, Container} from 'reactstrap';
function Q1O1YWBC() {
    return (
      <div className="main">
       <Container>
       <Row>
             <Col lg="6" md="6" xl="6" xs="12" sm="12">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Do you like Microsoft?</b></center></div> 
      <div className="options">
      <div class="qsbtn" ><b style={{color:"#2dda66"}}>Yes, I am fan of Microsoft</b> </div>
      <div class="qsbtn" ><b style={{color:"#f5544e"}}>No / Not sure / I like FAANG</b> </div>
      <div class="qsbtn" ><b style={{color:"#f5544e"}}>Meh (You say or You select for me!)</b> </div>
      
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
  
  export default Q1O1YWBC;
  
