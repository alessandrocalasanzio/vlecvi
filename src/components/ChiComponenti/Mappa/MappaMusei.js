import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const MappaMusei = () => {

    return(
       <div>
<Container fluid>
    <Row>

   
      
        <Col className=" ProgettiColonna" >
          
        <iframe title="Mappa Musei e Mostre" className='mappa' src="https://www.google.com/maps/d/embed?mid=1B3TqaaNvj-bcRSc7CBr4sbw7NYVgGmw&ehbc=2E312F" width="640" height="480"></iframe>

       
        </Col>
       
      </Row>
      </Container>

 

      </div>

    );
}

export default MappaMusei;