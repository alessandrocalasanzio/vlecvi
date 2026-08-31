import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.css';

import { Col, Row } from "react-bootstrap";



import castello from '../../../img/Italia/Offagna/castello.jpg';
import finestrino from '../../../img/Italia/Offagna/finestrino.jpg';
import statualibro from '../../../img/Italia/Offagna/statualibro.jpg';
import battagliaporco from '../../../img/Italia/Offagna/battagliaporco.jpg';
import panoramaoffagna from '../../../img/Italia/Offagna/panoramaoffagna.jpg';
import statua from '../../../img/Italia/Offagna/statua.jpg';
import finestrino2 from '../../../img/Italia/Offagna/finestrino2.jpg';
import spiragliotorre from '../../../img/Italia/Offagna/spiragliotorre.jpg';
import panoramaalberi from '../../../img/Italia/Offagna/panoramaalberi.jpg';
import finestrino3 from '../../../img/Italia/Offagna/finestrino3.jpg';
import battagliaminiatura from '../../../img/Italia/Offagna/battagliaminiatura.jpg';
import spiragliocasa from '../../../img/Italia/Offagna/spiragliocasa.jpg';


const Offagna = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Offagna</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={finestrino} alt=""/>
            </div>
          </div>
            
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={statualibro} alt=""/>
            </div>
          </div>

          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={battagliaporco} alt=""/>
            </div>
          </div>
         
           
          <div class="cardt cardt--horizontal1">
            <div class="cardt__image">
              <img src={panoramaoffagna} alt=""/>
            </div>
          </div>

          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={castello} alt=""/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Offagna</h2>
               <p>Un'affascinante visita a Offagna, un borgo medievale noto per la sua Rocca e le Feste Medievali.</p>
               
             <p>La sua posizione strategica la rese teatro di scontri storici come la celebre Battaglia del Porco (1477) tra le forze di Ancona e Osimo, il cui nome deriva probabilmente dall'insegna di un cinghiale sottratta al nemico.</p>


              </div>
            </div>
          </div>
        
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={statua} alt=""/>
            </div>
          </div>
           
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={finestrino2} alt=""/>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={spiragliotorre} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={panoramaalberi} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={finestrino3} alt=""/>
            </div>
          </div>
         
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={battagliaminiatura} alt=""/>
            </div>
          </div>
        
          <div class="cardt">
            <div class="cardt__image">
              <img src={spiragliocasa} alt=""/>
            </div>
          </div>
        
       
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default Offagna;