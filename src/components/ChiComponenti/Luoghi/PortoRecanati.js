import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.css';

import { Col, Row } from "react-bootstrap";




import piazzacastello from '../../../img/Italia/PortoRecanati/PiazzaCastello.jpg';
import portachiesa from '../../../img/Italia/PortoRecanati/PortaChiesa.jpg';
import scritta1 from '../../../img/Italia/PortoRecanati/Scritta1.jpg';
import panoramacastello from '../../../img/Italia/PortoRecanati/PanCastello.jpg';
import mare from '../../../img/Italia/PortoRecanati/Mare.jpg';
import fotoprincipale from '../../../img/Italia/PortoRecanati/FotoPrincipale.jpg';
import miami from '../../../img/Italia/PortoRecanati/MiamiMood.jpg';
import chiesa from '../../../img/Italia/PortoRecanati/Chiesa.jpg';
import chiesa1 from '../../../img/Italia/PortoRecanati/Chiesa1.jpg';
import chiesa3 from '../../../img/Italia/PortoRecanati/Chiesa3.jpg';
import panorama1 from '../../../img/Italia/PortoRecanati/Panorama1.jpg';
import panorama from '../../../img/Italia/PortoRecanati/Panorama.jpg';
import scritta2 from '../../../img/Italia/PortoRecanati/Scritta2.jpg';
import mare2 from '../../../img/Italia/PortoRecanati/Mare2.jpg';
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
              <img src={piazzacastello} alt=""/>
            </div>
          </div>
            
          <div class="cardt">
            <div class="cardt__image">
              <img src={portachiesa} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={scritta1} alt=""/>
            </div>
          </div>
         
           
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
              <img src={panoramacastello} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={fotoprincipale} alt=""/>
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
              <img src={miami} alt=""/>
            </div>
          </div>
           
          <div class="cardt">
            <div class="cardt__image">
              <img src={mare} alt=""/>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={chiesa} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={chiesa1} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={chiesa3} alt=""/>
            </div>
          </div>
         
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={panorama1} alt=""/>
            </div>
          </div>
        
          <div class="cardt">
            <div class="cardt__image">
              <img src={scritta2} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--horizontal1">
            <div class="cardt__image">
              <img src={panorama} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={mare2} alt=""/>
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