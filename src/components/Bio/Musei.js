import '../../App.js';
import React, {useState, useEffect}  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import ny from '../../img/ny.jpg';
import play from '../../img/play.png';
import netflix from '../../img/netflix.jpg';
import books from '../../img/books.jpg';
import mic from '../../img/mic.jpeg';
import film from '../../img/film.jpg';
import music from '../../img/music.jpg';
import soon from '../../img/soon.jpg';
import Vinci from '../../img/Vinci.jpg';





const MuseiBio = () => {

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


    <Row style={{ marginLeft: "-15px"}}>


        <Col className=" ProgettiColonna" >
        <div className='containerCardBio'>
        <Slider {...settings}>


        <Card className='marginiCard1'>
      <Card.Img variant="top" src={Vinci} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>MOSTRA L. DA VINCI</Card.Title>
        <Card.Text>
          Mostra sulle 
        </Card.Text>
        <Link to="/leo">
        <Button className='buttonRadius' variant="btn btn-dark">Guarda la lista</Button>
        </Link>
      </Card.Body>
    </Card>


            <Card className='marginiCard1' >
      <Card.Img variant="top" src={soon} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>COMING SOON</Card.Title>
        <Card.Text>
          Coming Soon.
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark">Coming Soon...</Button>
      </Card.Body>
    </Card>


    <Card className='marginiCard1' >
      <Card.Img variant="top" src={soon} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>COMING SOON</Card.Title>
        <Card.Text>
          Coming Soon.
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark">Coming Soon...</Button>
      </Card.Body>
    </Card>
        
    <Card className='marginiCard1' >
      <Card.Img variant="top" src={soon} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>COMING SOON</Card.Title>
        <Card.Text>
        Coming Soon..
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark">Coming Soon...</Button>
      </Card.Body>
    </Card>


    <Card className='marginiCard1' >
      <Card.Img variant="top" src={soon} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>COMING SOON</Card.Title>
        <Card.Text>
        Coming Soon..
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark">Coming Soon...</Button>
      </Card.Body>
    </Card>





        </Slider>
      </div>
  
        
        </Col>


        <Col className=' thumb1 colRight ' md={2}>
        <h1 className='vertical-rl1'>Mostre Visitate</h1>
       </Col>



      </Row>
</Container>



</div>

    );
}

export default MuseiBio;