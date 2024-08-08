import React from 'react';
import '../../../App.js';
import Navbar from '../../1.1Navbar1.js';
import { Col, Row } from 'react-bootstrap';

import cannone from '../../../img/leo/cannone.jpg';
import cannone1 from '../../../img/leo/cannone1.jpg';
import carro from '../../../img/leo/carro.jpg';
import cena from '../../../img/leo/cena.jpg';
import deltaplano from '../../../img/leo/deltaplano.jpg';
import paracadute from '../../../img/leo/paracadute.jpg';
import uomo from '../../../img/leo/uomo.jpg';
import Vinci from '../../../img/Vinci.jpg';

import Slider from "react-slick";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel styles
import { Carousel } from 'react-responsive-carousel';


    const Leo = () => {
      return (

        <div>
          <Navbar />

          <Row>

<Col   className="bordoColonna" md={2} >
  <div className='sticky-top'>

 <h1 className='vertical-rl sticky-top '>Opere Leonardo Da Vinci</h1>
 
  </div>

  
</Col>
    
    <Col>
    <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
              <Carousel showThumbs={false} infiniteLoop showArrows={false} autoPlay={true} stopOnHover={true} interval={4000}>
                    
                    <img src={Vinci} alt="Vinci" />
                    <img src={cena} alt="cena" />
                    <img src={uomo} alt="Uomo Vitruviano" />
                    <img src={carro} alt="carro" />
                    <img src={deltaplano} alt="deltaplano" />
                    <img src={cannone} alt="cannone" />
                    <img src={paracadute} alt="paracadute" />
                    <img src={cannone1} alt="cannone2" />

                </Carousel>  
                            </div>
              <div class="cardt__content paddingt-large--l">
              <h2>Mostra Opere "Leonardo Da Vinci"</h2>
                    <p>Nel 2019 è stata allestita un'eccezionale mostra a grandezza naturale delle opere più celebri di Leonardo Da Vinci presso la struttura presente al castello a Trezzo sull'adda.<br/> Questa straordinaria esposizione ha offerto ai visitatori l'opportunità unica di immergersi<br/> nell'arte e nel genio di uno dei più grandi maestri della storia, consentendo loro di ammirare capolavori come l' "Uomo Vitruviano" e "L'Ultima Cena".</p>
                    <p>Anche se, ovviamente non sono presenti tutte le opere da lui realizzate, ho cercato di racchiudere quelle che mi hanno colpito di piu.</p>
                    <div className="timeline-container">
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 1 - Raffigurazione</h3>
            <p>Una semplice raffigurazione degli appunti di Da Vinci riguardante il macchinario per produrre viti</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 2 - Ultima Cena</h3>
            <p>L’Ultima Cena, nota anche con il nome di 'Cenacolo', dipinta fra il 1494 e il principio del 1498, è considerato il dipinto murale forse più importante al mondo.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 3 - Uomo Vitruviano</h3>
            <p>L'Uomo Vitruviano mostra le proporzioni ideali del corpo umano, inserendole all'interno di due forme geometriche al tempo considerate perfette: il quadrato (simbolo della Terra) e il cerchio (rappresentazione dell'universo).</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immaigne 4 - Carro Armato</h3>
            <p>Si muove su quattro ruote motrici azionate da un sistema di meccanismi a manovella e può sparare in ogni direzione</p>
            <p>Una delle opere che permise a Leonardo nel 1502 di essere assunto da Cesare Borgia come ingegnere ed architetto militare.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 5 - Ornitotteto</h3>
            <p>L'ornitottero è un progetto ideato da Leonardo da Vinci nel XV secolo.</p>
            <p>Non vide mai una realizazione pratica rimanendo un progetto teorico in quanto le conoscenze scientifiche e tecniche dell'epoca non erano sufficienti.</p>
            <p>Tuttavia, il lavoro di Leonardo sulla progettazione dell'ornitottero ha contribuito a gettare le basi per lo sviluppo futuro delle macchine volanti.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 6 - Bombarda a Frammentazione</h3>
            <p>Enorme bombarda in grado di sparare proiettili esplosivi che, una volta in aria, si frammentano e cadono a grappolo sui nemici</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 7 - Paracadute</h3>
            <p>Una delle sue prime invenzioni a riguardo del volo, datata tra il 1483 e il 1486, è il
paracadute. </p>
<p>Un paracadute a forma di piramide a base quadrata. La struttura è rivestita di tela di lino
inamidata, per renderla compatta ed impermeabile all'aria. Le dimensioni sono
considerevoli ben 7,2 metri il lato di base e 7,2 metri l'altezza. </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 8 - La macchina per affilare gli aghi</h3>
            <p>La macchina per affilare gli aghi era concepita per semplificare e automatizzare il processo di affilatura degli aghi da cucito</p>
         <p>L'idea alla base di questa invenzione era quella di risparmiare tempo e fatica alle sarte e alle persone che dovevano affilare frequentemente gli aghi</p>
         
          </div>
        </div>

      </div>
    </div>
               
                
              </div>
            </div>
          </div>


          </Col>
          </Row>
        </div>

  );
};

export default Leo;
