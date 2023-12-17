import React, {useState, useEffect}  from 'react';
import '../../App.js';
import '../../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import me from '../../img/me.jpg';
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import CaroselloBio from '../Bio/CaroselloBio.js';
import Mappa from '../Bio/Mappa.js';
import Musei from '../Bio/Musei.js';

const Bio = () => {

    return(
        <div>

      <Container fluid  className='noBarra no-gutters noOver'>
      <Row>
       <Col  id="ColHover" className="bordoColonna" md={1}  >
          <div>
       <img class="resizeImg" src={me}/>
          </div>
        
          
        </Col>
        
        <Col className=' thumbMobile bordoColonnaimg'>

        <Col  id="ColHover" className="bordoColonnaContatti"  >
          <div className='sticky-top'>
       
         <h1 className='vertical-rl sticky-top '>Biografia</h1>
          </div>
       </Col>
       <div className='testoBio'>
       <h1><em>“Ciò che ci sta alle spalle e ciò che ci sta di fronte, sono ben poca cosa rispetto a ciò che è dentro di noi.”</em></h1>
       <small><em className="text-muted2">Ralph Emerson</em></small>

       <p>Ciao, sono Alessandro</p>
<p>In arte mi chiamo "Vlecvi (Alecai),"  semplice fusione tra il mio nome e cognome: un modo carino per "firmare" vari progetti futuri che vedranno la luce.(O almeno spero)</p>

<p>La mia storia ha radici in luoghi diversi: Milano, dove nasco, cresco e mi formo, e Bergamo, dove, per esigenze lavorative e amicizie, trascorro l'altra parte dei miei anni.<br/> Porto Recanati, invece, è diventata parte della mia realtà solo da circa due anni a questa parte, rappresentando un luogo speciale dove cerco evasione e tranquillità dalla frenetica vita di dove vivo.</p>

<p>Cosa dire di me? Sono un (ormai) trentenne con una, non ancora quantificata, passione per la matematica e l'informatica. Appassionato di numeri e tutto ciò che è "informatico" fin da giovane, tanto da conseguire sia il diploma in ragioneria sia quello in ambito informatico.</p>

<p>Attualmente, la mia vita si articola in tre sfere distintive:</p>

  <p>- Lavoro come contabile per uno noto studio di Milano</p>
  <p>- Sono il social media manager dei vari ristoranti:<br/> "Da Giannino- L'Angolo d'Abruzzo".</p>
  <p>- E nel mio tempo libero, studio e creo progetti in ambito informatico.(Principalemente progetti personali)</p>

<p>Ma la mia vita non è solo codice e calcoli, e per fortuna, non tutto riguarda il lavoro. Sono un amante dell'arte digitale, che spazia tra film, serie TV, videogiochi e podcast. Tutto questo mi permette di vedere il mondo da prospettive diverse. Sul sito, troverete una vetrina dedicata alle liste, di ciò che ho guardato e di cosa invece vorrei guardare.</p>

<p>Ci sarà uno spazio dedicato anche al blog, dove condividerò articoli e informazioni che ho raccolto durante il mio percorso, offrendo il mio contributo a chiunque desideri esplorare questi argomenti.</p>

<p>Ma la vita è fatta anche di esperienze al di fuori dell'ambito digitale, ed è per questo che ho anche una passione per viaggi e mostre, che mi hanno permesso di scoprire nuovi luoghi e nuove prospettive, anche se, al momento, non sono ancora riuscito a dar loro il giusto peso che vorrei.</p>

<p>Ti ho detto a grandi linee chi sono, ma se vuoi conoscermi davvero, c'è un solo modo:    
  <Link to="/contatti">
  <Button className='buttonRadius' variant="btn btn-dark">Contattami</Button>
</Link>
</p>

<p>Grazie per essere qui e condividere questo viaggio con me.</p>

<p>Alessandro.</p>
</div>
       </Col>
      </Row>


       
</Container>



</div>

    );
}

export default Bio;