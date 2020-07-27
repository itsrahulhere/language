import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Row,Col, Container} from 'reactstrap';
function Appnav() {
  
    return (
      <div className="main">
          <Container>
             <Row>
                 <Col lg="12" md="12" xl="12" xs="12" sm="12">
                  <div class="wrapper float-left">
                    <span></span>
                  </div>
                  <div className="navbtn float-right" ><b>Home</b></div>
                  <div className="navbtn float-right"></div>
                 </Col>
             </Row>
            </Container>
      </div> 
   
    );
 
  }
  
  export default Appnav;
  