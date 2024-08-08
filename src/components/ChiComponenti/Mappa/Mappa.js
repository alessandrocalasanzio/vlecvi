import React, {useState, useEffect}  from 'react';
import '../../../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


const Mappa = () => {

    return(
       <div>
<Container fluid>
    <Row>

   
      
        <Col className=" ProgettiColonna" >
          
        <iframe className='mappa ' src="https://www.google.com/maps/d/embed?mid=1hFjx57FbLxaBhLVXa2CL1SSkq231mxQ&ehbc=2E312F"></iframe>

       
        </Col>
       
      </Row>
      </Container>

 

      </div>

    );
}

export default Mappa;