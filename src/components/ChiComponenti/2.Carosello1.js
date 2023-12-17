import React, {useState, useEffect}  from 'react';
import '../../App.js';
import '../../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import me from '../../img/me.jpg';
import ny from '../../img/ny.jpg';

import Slider from "react-slick";

const Carosello1 = () => {

   var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
      responsive: [
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },

        ]
    };


    return(
        <div>

      <Container fluid  className='noBarra no-gutters noOver'>

    
    <Row>
      
    <Col className=' thumb1 colRight ' md={2}>
        <h1 className='vertical-rl'>Liste Personali</h1>
       </Col>


        <Col className=" ProgettiColonna" >
        <div className='containerCard'>
        <Slider {...settings}>


        <Card className='marginiCard1'>
      <Card.Img variant="top" src={ny} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>LISTA FILM</Card.Title>
        <Card.Text>
          In costruzione il sito ufficiale dell'Angolo d'Abruzzo.
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark">Coming Soon..</Button>
      </Card.Body>
    </Card>


            <Card className='marginiCard1' >
      <Card.Img variant="top" src={ny} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>LISTA SERIE TV</Card.Title>
        <Card.Text>
          In costruzione il sito ufficiale dell'Angolo d'Abruzzo.
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark">Coming Soon..</Button>
      </Card.Body>
    </Card>


    <Card className='marginiCard1' >
      <Card.Img variant="top" src={ny} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>LISTA LIBRI</Card.Title>
        <Card.Text>
          In costruzione il sito ufficiale dell'Angolo d'Abruzzo.
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark">Coming Soon..</Button>
      </Card.Body>
    </Card>
        
    <Card className='marginiCard1' >
      <Card.Img variant="top" src={ny} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>LISTA PODCAST</Card.Title>
        <Card.Text>
          In costruzione il sito ufficiale dell'Angolo d'Abruzzo.
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark">Coming Soon..</Button>
      </Card.Body>
    </Card>


    <Card className='marginiCard1' >
      <Card.Img variant="top" src={ny} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>LISTA VIDEOGIOCHI</Card.Title>
        <Card.Text>
          In costruzione il sito ufficiale dell'Angolo d'Abruzzo.
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark">Coming Soon..</Button>
      </Card.Body>
    </Card>


    <Card className='marginiCard1'>
      <Card.Img variant="top" src={ny} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>LISTA MUSICA</Card.Title>
        <Card.Text>
          In costruzione il sito ufficiale dell'Angolo d'Abruzzo.
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark">Coming Soon..</Button>
      </Card.Body>
    </Card>


        </Slider>
      </div>
  
        
        </Col>


       



      </Row>
</Container>



</div>

    );
}

export default Carosello1;