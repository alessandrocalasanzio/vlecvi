import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.css';

import { Col, Row } from "react-bootstrap";


import panorama from "../../../img/Italia/Cassiglio/CassiglioPanorama.jpg";
import fiori from "../../../img/Italia/Cassiglio/Fiori.jpg";
import mappa from "../../../img/Italia/Cassiglio/Mappa.jpg";
import ruota from "../../../img/Italia/Cassiglio/Ruota.jpg";
import paesaggio from "../../../img/Italia/Cassiglio/Paesaggio.jpg";
import paesaggio1 from "../../../img/Italia/Cassiglio/Paesaggio1.jpg";

const Cassiglio = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Cassiglio 2023</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={fiori} alt=""/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={mappa} alt=""/>
            </div>
          </div>
            
       
         
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={panorama} alt=""/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Cassiglio</h2>
                <p>Abbiamo trascorso un paio d'ore in una piacevole passeggiata a Cassiglio, sperando di ammirare il famoso lago.</p>
                <p>Attesa  delusa quando abbiamo scoperto che il corso d'acqua era stato deviato a causa di lavori in corso.</p>
                <p> Nonostante ciò, i panorami mozzafiato non sono mancati, come dimostra la foto qui sotto che è una delle più belle che abbia mai scattato.</p>
              </div>
            </div>
          </div>
        
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={ruota} alt=""/>
            </div>
          </div>
           
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={paesaggio} alt=""/>
            </div>
          </div>

          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={paesaggio1} alt=""/>
            </div>
          </div>
          
          
          
        
       
        
         
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default Cassiglio;