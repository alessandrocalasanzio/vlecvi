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

import Fade from 'react-reveal/Fade';




const Progetti = () => {
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

          <Col className=" ProgettiColonna">
          <Fade left>

            <Card className='marginiCard' style={{ textAlign: "center" }}>
              <Card.Img variant="top" src={angolo} className='imgBordi1' />
              <Card.Body className='posizioneTesto'>
                <Card.Title>Sito Web - "Da Giannino L'Angolo D'Abruzzo"</Card.Title>
                <Card.Text>
                  Ideazione e creazione del Sito Web del ristorante Da Giannino l'Angolo d'Abruzzo.
                </Card.Text>
                <a className='buttonRadius btn btn-dark' href='http://www.da-giannino-langolo-dabruzzo.it' target="_blank">Apri il Progetto</a>
              </Card.Body>
            </Card>
            </Fade>
            
          </Col>
         
          <Col id="ColHover" className=' thumb1 colRight ' md={2}>
            <Fade right>
            <Link to="progetti">
              <h1 className='vertical-rl1'><small className='more'>More to</small>Progetti</h1>
            </Link>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Progetti;