import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row,Col, Container} from 'reactstrap';
function Q1O1NO2() {
    return (
      <div className="main">
       <Container>
       <Row>
             <Col lg="6" md="6" xl="6" xs="12" sm="12">
             <div className="qrightinside"> 
             <div className="qselect">Select an option</div>
      <div className="ques">
        <center><b>Which type of car do you like? </b></center></div> 
      <div className="options">
      <div class="qsbtn" ><b>Auto car</b> </div>
      <div class="qsbtn" ><b>Manual</b> </div>
      
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
  
  export default Q1O1NO2;
  
