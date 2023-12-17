import React, { useEffect } from 'react';
import '../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import angolo from '../img/angolo2.jpg'; // Imposta il percorso corretto per l'immagine originale
import angoloGrigio from '../img/angoloGrigio.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel styles
import { Carousel } from 'react-responsive-carousel';

const Progetti1 = () => {
  useEffect(() => {
    function updateImageBasedOnWidth() {
      const cardImage = document.querySelector('.imgBordi1');
      const windowWidth = window.innerWidth;

      if (windowWidth <= 525) {
        cardImage.src = angoloGrigio; // Cambia l'immagine quando la larghezza è inferiore o uguale a 600px
      } else {
        cardImage.src = angolo; // Ripristina l'immagine originale quando la larghezza è superiore a 600px
      }
    }

    window.addEventListener('resize', updateImageBasedOnWidth);

    // Chiama la funzione all'inizio per impostare l'immagine iniziale in base alla larghezza corrente
    updateImageBasedOnWidth();

    // Rimuovi il listener quando il componente si smonta per evitare memory leak
    return () => {
      window.removeEventListener('resize', updateImageBasedOnWidth);
    };
  }, []); // Assicura che useEffect venga eseguito solo una volta durante il montaggio del componente

  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="ProgettiColonna1">


          

            <Card className='marginiCard' style={{ textAlign: "center" }}>
              <Card.Img variant="top" src={angolo} className='imgBordi1' />
              <Card.Body className='posizioneTesto'>
                <Card.Title>SITO WEB - "DA GIANNINO"</Card.Title>
                <Card.Text>
                  In costruzione il sito ufficiale dell'Angolo d'Abruzzo.
                </Card.Text>
                <Button className='buttonRadius' variant="btn btn-dark">Coming Soon..</Button>
              </Card.Body>
            </Card>

         

          </Col>



          <Col id="ColHover" className=' thumb2 colRight ' md={2}>
            <Link to="progetti">
              <h1 className='vertical-rl1'>Progetti</h1>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Progetti1;
