import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Row,Col, Container} from 'reactstrap';
function Appnav() {
  
    return (
      <div className="main">
          <Container>
             <Row>
                 <Col lg="10" md="10" xl="10" xs="12" sm="12">
                  <div class="wrapper float-left">
                    <span></span>
                  </div>
                  </Col>
                  <Col lg="2" md="2" xl="2" xs="12" sm="12">
                  <div className="navbtn float-right" >
                  <a href="language" >
                    <b >Home</b></a>
                    </div>
                  <div className="navbtn float-right"></div>
                 </Col>
             </Row>
            </Container>
      </div> 
   
    );
 
  }
  
  export default Appnav;
  