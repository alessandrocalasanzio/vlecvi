import React from 'react';
import '../../../App.js';
import Navbar from '../../1.1Navbar1.js';
import { Col, Row } from 'react-bootstrap';



import bancodalavoro from '../../../img/casaLeopardi/bancodalavoro.jpg';
import dinastialeopardi from '../../../img/casaLeopardi/dinastialeopardi.jpg';
import finestraasilvia from '../../../img/casaLeopardi/finestraasilvia.jpg';
import infinitoreplica from '../../../img/casaLeopardi/infinitoreplica.jpg';
import leopardi from '../../../img/casaLeopardi/leopardi.jpg';
import proibiti from '../../../img/casaLeopardi/proibiti.jpg';
import quadroamano from '../../../img/casaLeopardi/quadroamano.jpg';
import silviareplica from '../../../img/casaLeopardi/silviareplica.jpg';
import volumiproibiti from '../../../img/casaLeopardi/volumiproibiti.jpg';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel styles
import { Carousel } from 'react-responsive-carousel';


    const CasaLeopardi = () => {
      return (

        <div>
          <Navbar />

          <Row>

<Col   className="bordoColonna" md={2} >
  <div className='sticky-top'>

 <h1 className='vertical-rl sticky-top '>Bliblioteca Leopardi</h1>
 
  </div>

  
</Col>
    
    <Col>
    <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
              <Carousel showThumbs={false} infiniteLoop showArrows={false} autoPlay={true} stopOnHover={true} interval={4000}>
                    
                    <img src={leopardi} alt="Leopardi" />
                    <img src={dinastialeopardi} alt="dinastia" />
                    <img src={proibiti} alt="sezioni proibiti" />
                    <img src={bancodalavoro} alt="tavoloLeopardi" />
                    <img src={finestraasilvia} alt="finestra" />
                    <img src={volumiproibiti} alt="volumi proibiti" />
                    <img src={quadroamano} alt="quadro" />
                    <img src={silviareplica} alt="ASilvia" />
                    <img src={infinitoreplica} alt="Infinito" />


                </Carousel>  
                            </div>
              <div class="cardt__content paddingt-large--l">
              <h2>Tour Guidato Bliblioteca Giacomo Leopardi</h2>
                   <p>A Recanati è possibile visitare il Palazzo Leopardi. Non una semplice dimora, ma il luogo dove Giacomo Leopardi visse, compose le sue opere e dove, ancora oggi, risiede la sua dinastia.</p>
                   <p>Il punto cruciale del complesso è la Biblioteca, voluta dal padre Monaldo, che in breve tempo riuscì a costituire un imponente patrimonio librario di circa 20.000 volumi.</p>
      <div className="timeline-container">
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 1 - Raffigurazione</h3>
            <p>Una semplice raffigurazione di Giacomo Leopardi</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 2 - Rappresentazione Albero Genealogico</h3>
            <p> Ricostruzione & Rappresentazione dell'albero genealogico della dinastia di Giacomo Leopardi</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 3 - Volumi Proibiti</h3>
            <p>Una delle varie raccolte di Volumi che a quel tempo venivano cosiderati come proibiti.</p>
            <p>All'interno troviamo Testi fondamentali dell'Illuminismo francese e europeo (come quelli di Voltaire o Rousseau), che erano visti con sospetto per le loro critiche alla religione e all'autorità monarchica</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 4 - Scrittoio</h3>
            <p>Scrittoio originale di Giacomo Leopardi dove scriveva e lavorava all'interno della Bliblioteca</p>
         <p>(Era cosi piccolo, per sua volontà, cosi da poterlo spostare comodamente seguendo la luce del sole che entrava all'interno della bliblioteca)</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 5 - Finestra</h3>
            <p>Da qui, Leopardi vedeva un panorama limitato: principalmente la piazzetta di Recanati, che lui chiamava "la piazzuola del Sabato del Villaggio", e l'austero muro della casa di Teresa Fattorini ("Silvia"), dove si trovavano le scuderie.</p>
            <p>La vista limitata intensificò la sua capacità di immaginare e teorizzare l'Infinito e la sua visione pessimistica sulla vita.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 6 - Volumi proibiti del pensiero illuminista e filosofico francese del Settecento</h3>
          <p>Contengono opere di autori chiave dell'Illuminismo francese. Dove troviamo:</p>
<ul>
<li>Voltaire: Filosofo e polemista, le cui opere mettevano in discussione l'autorità religiosa e politica.</li> <br/>

<li>Rousseau: Con le sue teorie sull'educazione, la politica e la natura umana.</li> <br/>

<li>Altri Enciclopedisti come Diderot e d'Alembert (o i loro testi), che promuovevano il sapere razionale e scientifico.</li>
 </ul>

        
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 7 - Disegno Collage</h3>
            <p>Disegno creato da Paolina, sorella di Giacomo. Quadro particolare in quanto a primo impatto sembra un collage; in realtà è un disegno fatto completamente a mano. </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 8 - Poesia a Silvia</h3>
            <p> Riproduzione originale della poesia "A Silvia".</p>
          </div>
        </div>

         <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 9 - Poesia L'Infinito</h3>
            <p> Riproduzione originale della poesia "L'infinito".</p>
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

export default CasaLeopardi;
