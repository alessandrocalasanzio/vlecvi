import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.js';
import '../../../App.css';

import { Col, Row } from "react-bootstrap";

import fogli from '../../../img/Brescia/fogli.jpg';
import finestra from '../../../img/Brescia/finestra.jpg';
import strettoia from '../../../img/Brescia/strettoia.jpg';
import torre from '../../../img/Brescia/torre.jpg';
import cipressi from '../../../img/Brescia/cipressi.jpg';
import tettochiesa from '../../../img/Brescia/tettochiesa.jpg';
import giardino from '../../../img/Brescia/giardino.jpg';
import piovra from '../../../img/Brescia/piovra.jpg';
import vedetta from '../../../img/Brescia/vedetta.jpg';
import municipio from '../../../img/Brescia/municipio.jpg';
import salita from '../../../img/Brescia/salita.jpg';
import ponte from '../../../img/Brescia/ponte.jpg';
import panchiesa from '../../../img/Brescia/panchiesa.jpg';
import scalinata from '../../../img/Brescia/scalinata.jpg';
import panorama from '../../../img/Brescia/panorama.jpg';
const Brescia = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Brescia 2017</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={fogli}/>
            </div>
          </div>
            
          <div class="cardt">
            <div class="cardt__image">
              <img src={finestra}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={strettoia}/>
            </div>
          </div>
        
           
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
              <img src={torre}/>
            </div>
          </div>
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={tettochiesa}/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Brescia</h2>
                <p>Una breve escursione nella città di Brescia si è rivelata un'esperienza sorprendente, affascinante per i suoi intricati vicoli che si intrecciano come fili di una storia millenaria.</p>
                 <p>Il castello aggiunge un tocco di maestosità alla città, incorniciando un paesaggio che sprigiona storia e cultura, simili alle opere ammirate e alla presenza di antiche rovine romane.</p>
                 <p> Mi ha colpito molto il fascino di questa città che sembra nascondersi dietro ogni angolo.</p>
                  <p> E' una destinazione che ha saputo colpirmi in un solo giorno.</p>
              </div>
            </div>
          </div>
        
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={cipressi}/>
            </div>
          </div>
           
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={piovra}/>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={vedetta}/>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={municipio}/>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={salita}/>
            </div>
          </div>
          
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={ponte}/>
            </div>
          </div>
        
          <div class="cardt">
            <div class="cardt__image">
              <img src={panchiesa}/>
            </div>
          </div>
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
              <img src={panorama}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={scalinata}/>
            </div>
          </div>
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default Brescia;