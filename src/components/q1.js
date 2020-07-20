import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ques.css';
import { Button } from 'reactstrap';
function Q1() {
    return (
      <div className="ques-main">
      <div className="ques">Why do you want to learn programming?</div>
      <div className="options">
      <div className="opt-button"><Button color="primary">For fun / Interested / Improve myself</Button> </div>
      <div className="opt-button"><Button color="primary">For my kids</Button> </div>
      <div className="opt-button"><Button color="primary">For my kids</Button> </div>
      <div className="opt-button"><Button color="primary">For my kids</Button> </div>
      </div>
         
      
      </div>
    );
  }
  
  export default Q1;
  
