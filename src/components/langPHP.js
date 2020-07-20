import React from 'react';
import php from './images/php.svg';
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
                  <p className="langhead">J</p>
                  <div class="image"><img src={php} alt={""}  /></div>
                  <div class="details">
                    <h2><b>Suitable for building small and simple sites within a short time frame <br />
                    <span>Supported by almost every web hosting servies with lower price </span></b></h2>
                  </div>
                  </div>
                </div>
              </div>
              
              <div class="backbtn float-left" ><b style={{color:"#FF4033"}}>Back</b> </div>
              <div class="backbtn float-right" style={{right:"35px"}} ><b style={{color:"#25B779"}}>Want to do it again</b> </div>
              
             </div>
             </Col>
       </Row>
      </Container>
      <br />
      </div> 
    );
  }
  
  export default LangJS;
  
