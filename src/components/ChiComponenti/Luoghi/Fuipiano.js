import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.css';

import { Col, Row } from "react-bootstrap";



import caminetto from '../../../img/Italia/Fuipiano/Caminetto.jpg';
import gufopiccolo from '../../../img/Italia/Fuipiano/gufopiccolo.jpg';
import poesia from '../../../img/Italia/Fuipiano/Poesia.jpg';
import casaprincipale from '../../../img/Italia/Fuipiano/CasaPrincipale.jpg';
import gufo from '../../../img/Italia/Fuipiano/gufo.jpg';
import foresta from '../../../img/Italia/Fuipiano/Foresta.jpg';
import minipanorama from '../../../img/Italia/Fuipiano/MiniPanorama.jpg';
import panoramanuvolo from '../../../img/Italia/Fuipiano/PanoramaNuvolo.jpg';
import valle from '../../../img/Italia/Fuipiano/Valle.jpg';
import casarustica from '../../../img/Italia/Fuipiano/CasaRustica.jpg';
import alberi from '../../../img/Italia/Fuipiano/AlberiForesta.jpg';
import casaprofilo from '../../../img/Italia/Fuipiano/CasaRusticaProfilo.jpg';
import casarustica3 from '../../../img/Italia/Fuipiano/CasaRustica3.jpg';
import nuvolo from '../../../img/Italia/Fuipiano/Nuvolo.jpg';
const Fuipiano = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Fuipiano 2019</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={caminetto} alt=""/>
            </div>
          </div>
            
          <div class="cardt">
            <div class="cardt__image">
              <img src={panoramanuvolo} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={gufopiccolo} alt=""/>
            </div>
          </div>
         
           
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
              <img src={foresta} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={casaprincipale} alt=""/>
              </div>
              <div class="cardt__content paddingt-large--l">
              <h2>Fuipiano Valle Imagna</h2>
              <p>Giornata trascorsa a Fuipiano: un piccolo comune della Valle Imagna.</p>
              <p>un luogo ideale se ti piace lo stile rustico e sei in cerca di clima e tranquillità per farti lunghe passeggiate nei boschi.</p> 
              </div>
            </div>
          </div>
        
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={poesia} alt=""/>
            </div>
          </div>
           
          <div class="cardt">
            <div class="cardt__image">
              <img src={minipanorama} alt=""/>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={gufo} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={valle} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={casarustica} alt=""/>
            </div>
          </div>
       
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={alberi} alt=""/>
            </div>
          </div>
        
          <div class="cardt">
            <div class="cardt__image">
              <img src={casaprofilo} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--horizontal1">
            <div class="cardt__image">
              <img src={casarustica3} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={nuvolo} alt=""/>

            </div>
          </div>
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default Fuipiano;