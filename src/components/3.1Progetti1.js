import React, { useEffect } from 'react';
import '../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel, Card, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import angolo from '../img/angolo2.jpg'; // Imposta il percorso corretto per l'immagine originale
import angoloGrigio from '../img/angoloGrigio.png';
import excel4 from '../img/excel4.jpg';
import notionwall from '../img/Notionwall.png';

import vlecvihurst from '../img/vlecvi/sfondoVlecvi.jpg';
import vlecvihurstLogo from '../img/vlecvi/VlecviLogo1.png';

import Fade from 'react-reveal/Fade';


import leftArrow from '../img/next.png'; 
import rightArrow from '../img/back.png';

const Progetti = () => {
  useEffect(() => {
    function updateImageBasedOnWidth() {
      const cardImage = document.querySelector('.imgBordi1');
      const cardImage1 = document.querySelector('.imgBordi2');
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

          <Carousel prevIcon={<img  src={rightArrow} alt="Previous" style={{ width: '30px', height: '30px' }} />}
      nextIcon={<img  src={leftArrow} alt="Next" style={{ width: '40px', height: '30px' }} />}>
      
      
      
      <Carousel.Item>
            <Card className='marginiCard' style={{ textAlign: "center" }}>
              <Card.Img variant="top" src={angolo} className='imgBordi1' />
              <span className="badge bg-light text-dark ms-auto"> Progetto</span>
              <Card.Body className='posizioneTesto'>
             
                <Card.Title>Sito Web - "Da Giannino L'Angolo D'Abruzzo"</Card.Title>
                
                <Card.Text>
                  Ideazione e creazione del Sito Web del ristorante Da Giannino l'Angolo d'Abruzzo.
                </Card.Text>
                
                <a className='buttonRadius btn btn-dark' href='http://www.da-giannino-langolo-dabruzzo.it' target="_blank">Apri il Progetto</a>
               
              </Card.Body>
             
            </Card>
            </Carousel.Item>

               <Carousel.Item>
        <Card className='marginiCard' style={{ textAlign: "center" }}>
          <Card.Img variant="top" src={vlecvihurst} className='imgBordi2' />
          <span className="badge bg-light text-dark ms-auto"> Progetto</span>
          <Card.Body className='posizioneTesto'>
            <Card.Title>VlecviBot - Dolcevita</Card.Title>
            <Card.Text>
           Progetto inerente la costruzione di un software algoritmico per operare sui mercati finanziari in particolare sul mercato dell'oro.
           </Card.Text>
           <Link to="/vlecvibot">
            <a className='buttonRadius btn btn-dark buttonSpacing' href='#' target="_blank">Apri il Progetto</a>
           </Link>
          </Card.Body>
        </Card>
      </Carousel.Item>

            <Carousel.Item>
        <Card className='marginiCard' style={{ textAlign: "center" }}>
          <Card.Img variant="top" src={notionwall} className='imgBordi1' />
          <span className="badge bg-light text-dark ms-auto"> Mini-Progetto</span>
          <Card.Body className='posizioneTesto'>
            <Card.Title>Il mondo di Notion+Template</Card.Title>
            <Card.Text>
           Mini-Progetto sul mondo di Notion che permette di organizzare in modo efficente il tuo lavoro e il tuo tempo</Card.Text>
           <Link to="/notion">
            <a className='buttonRadius btn btn-dark buttonSpacing' href='#' target="_blank">Scopri come funziona</a>
           </Link>
          </Card.Body>
        </Card>
      </Carousel.Item>



            <Carousel.Item>
        <Card className='marginiCard' style={{ textAlign: "center" }}>
          <Card.Img variant="top" src={excel4} className='imgBordi1' />
          <span className="badge bg-light text-dark ms-auto"> Mini-Progetto</span>
          <Card.Body className='posizioneTesto'>
            <Card.Title>Excel Expense Tracking</Card.Title>
            <Card.Text>
           Mini-Progetto in Excel che permette di tenere traccia delle proprie entrate e uscite.</Card.Text>
           <Link to="/excel">
            <a className='buttonRadius btn btn-dark buttonSpacing' href='#' target="_blank">Scopri come funziona</a>
           </Link>
           <a className="buttonRadius btn btn-dark" href="https://drive.google.com/uc?export=download&id=1Hh8TRrJRiuB9kAvzVp-11onDvOZ_YCAw" download="Vlecvi Financial Tracker.ods">Scarica il Mini-Progetto</a>


          </Card.Body>
        </Card>
      </Carousel.Item>


            </Carousel>
            </Fade>
            


          </Col>
         
          <Col id="ColHover" className=' thumb2 colRight ' md={2}>
          
              <h1 className='vertical-rl1'>Progetti</h1>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Progetti;
