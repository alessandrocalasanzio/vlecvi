import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Mappa = () => {

    return(
       <div>
<Container fluid>
    <Row>

   
      
        <Col className=" ProgettiColonna" >
          
        <iframe title="Mappa Luoghi" className='mappa ' src="https://www.google.com/maps/d/embed?mid=1hFjx57FbLxaBhLVXa2CL1SSkq231mxQ&ehbc=2E312F"></iframe>

       
        </Col>
       
      </Row>
      </Container>

 

      </div>

    );
}

export default Mappa;