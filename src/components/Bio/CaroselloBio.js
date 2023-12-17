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






const CaroselloBio = () => {

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
      <Card.Img variant="top" src={play} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>LISTA VIDEOGIOCHI</Card.Title>
        <Card.Text>
          Crono-storia videoludica dei giochi giocati e da giocare.
        </Card.Text>
       
        <Button className='buttonRadius' variant="btn btn-dark"><a class="noClassfora" href="https://vlecvi.notion.site/LISTA-VIDEOGIOCHI-8fd7e24f4ddc4ab2a2cb0183d9752b62?pvs=4">Guarda la lista</a></Button>
        
      </Card.Body>
    </Card>


            <Card className='marginiCard1' >
      <Card.Img variant="top" src={netflix} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>LISTA SERIE TV</Card.Title>
        <Card.Text>
          Crono-storia delle serie tv guardate e da guardare.
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark"><a class="noClassfora" href="https://vlecvi.notion.site/LISTA-SERIE-TV-9cf6a6ec82dc4b00ba048b0f8ffabd5d?pvs=4">Guarda la lista</a></Button>
      </Card.Body>
    </Card>


    <Card className='marginiCard1' >
      <Card.Img variant="top" src={books} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>LISTA LIBRI</Card.Title>
        <Card.Text>
          Crono-storia dei libri letti e da leggere
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark"><a class="noClassfora" href="https://vlecvi.notion.site/LISTA-SERIE-TV-9cf6a6ec82dc4b00ba048b0f8ffabd5d?pvs=4">Guarda la lista</a></Button>
      </Card.Body>
    </Card>
        
    <Card className='marginiCard1' >
      <Card.Img variant="top" src={mic} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>LISTA PODCAST</Card.Title>
        <Card.Text>
          Crono-storia dei podcast ascoltati e da ascoltare
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark"><a class="noClassfora" href="https://vlecvi.notion.site/LISTA-SERIE-TV-9cf6a6ec82dc4b00ba048b0f8ffabd5d?pvs=4">Guarda la lista</a></Button>
      </Card.Body>
    </Card>


    <Card className='marginiCard1' >
      <Card.Img variant="top" src={film} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>LISTA FILM</Card.Title>
        <Card.Text>
          Crono-storia dei film visti e da vedere
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark"><a class="noClassfora" href="https://vlecvi.notion.site/LISTA-SERIE-TV-9cf6a6ec82dc4b00ba048b0f8ffabd5d?pvs=4">Guarda la lista</a></Button>
      </Card.Body>
    </Card>


    <Card className='marginiCard1'>
      <Card.Img variant="top" src={music} className='imgBordi' />
      <Card.Body className='posizioneTesto'>
        <Card.Title className='bordiTitle'>LISTA MUSICA</Card.Title>
        <Card.Text>
          Playlist personali musicali direttamente su Spotify.
        </Card.Text>
        <Button className='buttonRadius' variant="btn btn-dark">Coming Soon..</Button>
      </Card.Body>
    </Card>


        </Slider>
      </div>
  
        
        </Col>


        <Col className=' thumb1 colRight ' md={2}>
        <h1 className='vertical-rl1'>Liste Personali</h1>
       </Col>



      </Row>
</Container>



</div>

    );
}

export default CaroselloBio;