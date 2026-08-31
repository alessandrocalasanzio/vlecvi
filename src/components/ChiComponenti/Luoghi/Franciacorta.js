import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.css';

import { Col, Row } from "react-bootstrap";


import luna from "../../../img/Italia/Franciacorta/Luna.jpg";
import cancello from "../../../img/Italia/Franciacorta/CancelloBellavista.jpg";
import panorama from "../../../img/Italia/Franciacorta/PanoramaNuvolo.jpg";
import vigne from "../../../img/Italia/Franciacorta/Vigne.jpg";
import panoramavigna from "../../../img/Italia/Franciacorta/PanoramaVigna.jpg";
import uva from "../../../img/Italia/Franciacorta/Uva.jpg";
import quad from "../../../img/Italia/Franciacorta/Quad.jpg";
import albero from "../../../img/Italia/Franciacorta/albero.jpg";

const Franciacorta = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Franciacorta 2023</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={cancello} alt=""/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={panorama} alt=""/>
            </div>
          </div>
            
       
         
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={luna} alt=""/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Franciacorta</h2>
                <p>Giornata trascorsa in Franciacorta per festeggiare un addio al nubilato, immersi nella bellezza della tenuta Bellavista.</p>
                <p> In sella ai quad, abbiamo esplorato i vigneti, con un po di adrenalina per "l'avventura" che stavamo vivendo.</p>
                <p>Il divertimento è stato arricchito da momenti di scoperta, con cenni culturali sulla gestione delle vigne e sulla produzione dei rinomati spumanti Franciacorta.</p>
              </div>
            </div>
          </div>
        
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={vigne} alt=""/>
            </div>
          </div>
           
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={panoramavigna} alt=""/>
            </div>
          </div>

          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={uva} alt=""/>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={quad} alt=""/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={albero} alt=""/>
            </div>
          </div>
          
        
       
        
         
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default Franciacorta;