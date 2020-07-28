
import React from "react";
import "./App.css";
import Appright from './Appright';
import Appleft from './Appleft';

import { Row,Col, Container} from 'reactstrap';
function App() {
  
  return (

        <div className="heading">
  
       
 <Container>
   <Row> 
     <Col lg="6" md="6" xl="6" xs="12" sm="12">
       <Appleft />
     </Col>
     <Col lg="6" md="6" xl="6" xs="12" sm="12">
       <Appright />
      </Col>
     </Row>
   <Row>

   </Row>
 </Container>
 <Container><Row> 
   <Col lg="8" md="7" xl="6" xs="2" sm="2">
  <hr style={{margin:"15px 0 0 10px",border:"1px solid lightgrey"}} /></Col>
   <Col lg="2" md="7" xl="6" xs="10" sm="10">
 <div  style={{fontFamily:"Pristina", fontSize:"27px",color:"#4E8EFE",fontWeight:"550"}}>
   Keep learning! </div>
   </Col>
   <Col lg="2" md="6" xl="6" xs="2" sm="2">
   <hr style={{margin:"15px 10px 0 0px",border:"1px solid lightgrey"}} /></Col>
    </Row></Container>
</div> 

      );
    }

  


export default App;