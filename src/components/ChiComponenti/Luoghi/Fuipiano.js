import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.js';
import '../../../App.css';

import { Col, Row } from "react-bootstrap";



import caminetto from '../../../img/Fuipiano/Caminetto.jpg';
import gufopiccolo from '../../../img/Fuipiano/gufopiccolo.jpg';
import poesia from '../../../img/Fuipiano/Poesia.jpg';
import casaprincipale from '../../../img/Fuipiano/CasaPrincipale.jpg';
import gufo from '../../../img/Fuipiano/gufo.jpg';
import foresta from '../../../img/Fuipiano/Foresta.jpg';
import minipanorama from '../../../img/Fuipiano/MiniPanorama.jpg';
import panoramanuvolo from '../../../img/Fuipiano/PanoramaNuvolo.jpg';
import valle from '../../../img/Fuipiano/Valle.jpg';
import casarustica from '../../../img/Fuipiano/CasaRustica.jpg';
import alberi from '../../../img/Fuipiano/AlberiForesta.jpg';
import casaprofilo from '../../../img/Fuipiano/CasaRusticaProfilo.jpg';
import casarustica3 from '../../../img/Fuipiano/CasaRustica3.jpg';
import nuvolo from '../../../img/Fuipiano/Nuvolo.jpg';
const Fuipiano = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Fuipiano</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={caminetto}/>
            </div>
          </div>
            
          <div class="cardt">
            <div class="cardt__image">
              <img src={panoramanuvolo}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={gufopiccolo}/>
            </div>
          </div>
         
           
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
              <img src={foresta}/>
            </div>
          </div>
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={casaprincipale}/>
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
              <img src={poesia}/>
            </div>
          </div>
           
          <div class="cardt">
            <div class="cardt__image">
              <img src={minipanorama}/>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={gufo}/>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={valle}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={casarustica}/>
            </div>
          </div>
       
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={alberi}/>
            </div>
          </div>
        
          <div class="cardt">
            <div class="cardt__image">
              <img src={casaprofilo}/>
            </div>
          </div>
          <div class="cardt cardt--horizontal1">
            <div class="cardt__image">
              <img src={casarustica3}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={nuvolo}/>

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