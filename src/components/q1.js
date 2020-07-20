import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ques.css';
import { Button } from 'reactstrap';
function Q1() {
    return (
      <div className="ques-main">
       <br/><br/><br/><br/><br/><br/>

      <div className="ques">Why do you want to learn programming?</div>
      <div className="options">
      <div className="opt-btn" ><Button >For fun / Interested / Improve myself</Button> </div>
      <div className="opt-button"><Button>For my kids</Button> </div>
      <div className="opt-button"><Button>For my kids</Button> </div>
      <div className="opt-button"><Button>For my kids</Button> </div>
      </div>
      <div className="ques-head">WHICH PROGRAMMING LANGUAGE SHOULD YOU LEARN</div>
       
      
      </div> 
    );
  }
  
  export default Q1;
  
