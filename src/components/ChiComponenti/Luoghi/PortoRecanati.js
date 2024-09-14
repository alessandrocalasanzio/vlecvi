import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.js';
import '../../../App.css';

import { Col, Row } from "react-bootstrap";




import piazzacastello from '../../../img/PortoRecanati/PiazzaCastello.jpg';
import portachiesa from '../../../img/PortoRecanati/PortaChiesa.jpg';
import scritta1 from '../../../img/PortoRecanati/Scritta1.jpg';
import panoramacastello from '../../../img/PortoRecanati/PanCastello.jpg';
import mare from '../../../img/PortoRecanati/Mare.jpg';
import fotoprincipale from '../../../img/PortoRecanati/FotoPrincipale.jpg';
import miami from '../../../img/PortoRecanati/MiamiMood.jpg';
import chiesa from '../../../img/PortoRecanati/Chiesa.jpg';
import chiesa1 from '../../../img/PortoRecanati/Chiesa1.jpg';
import chiesa3 from '../../../img/PortoRecanati/Chiesa3.jpg';
import panorama1 from '../../../img/PortoRecanati/Panorama1.jpg';
import panorama from '../../../img/PortoRecanati/Panorama.jpg';
import scritta2 from '../../../img/PortoRecanati/Scritta2.jpg';
import mare2 from '../../../img/PortoRecanati/Mare2.jpg';
const PortoRecanati = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Porto Recanati 2023</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={piazzacastello}/>
            </div>
          </div>
            
          <div class="cardt">
            <div class="cardt__image">
              <img src={portachiesa}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={scritta1}/>
            </div>
          </div>
         
           
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
              <img src={panoramacastello}/>
            </div>
          </div>
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={fotoprincipale}/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Porto Recanati</h2>
                <p>Porto Recanti diventata ormai come una seconda casa</p>
                <p>Unica per il tipo di paesaggi che offre come le case colorate e decorate con affreschi,
                con il suo lungomare ideale per belle passeggiate e per la sua cultura e storia come la  Santa Casa di Loreto considerata una delle chiese piu importanti nel panorama italiano.</p>


              </div>
            </div>
          </div>
        
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={miami}/>
            </div>
          </div>
           
          <div class="cardt">
            <div class="cardt__image">
              <img src={mare}/>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={chiesa}/>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={chiesa1}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={chiesa3}/>
            </div>
          </div>
         
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={panorama1}/>
            </div>
          </div>
        
          <div class="cardt">
            <div class="cardt__image">
              <img src={scritta2}/>
            </div>
          </div>
          <div class="cardt cardt--horizontal1">
            <div class="cardt__image">
              <img src={panorama}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={mare2}/>
            </div>
          </div>
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default PortoRecanati;