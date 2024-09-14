import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.js';
import '../../../App.css';

import { Col, Row } from "react-bootstrap";

import ponte from "../../../img/Portogallo/ponte.jpg"
import casanatura from "../../../img/Portogallo/casanatura.jpg"
import graffiti from "../../../img/Portogallo/graffiti.jpg"
import porto from "../../../img/Portogallo/porto.jpg"
import castello from "../../../img/Portogallo/castello.jpg"
import operachiesa from "../../../img/Portogallo/operachiesa.jpg"
import sentiero from "../../../img/Portogallo/sentiero.jpg"
import oceano from "../../../img/Portogallo/oceano.jpg"
import metro from "../../../img/Portogallo/metro.jpg"
import fiori from "../../../img/Portogallo/fiori.jpg"
import vetrate from "../../../img/Portogallo/vetrate.jpg"
import verde from "../../../img/Portogallo/verde.jpg"
import scalechiesa from "../../../img/Portogallo/scalechiesa.jpg"
import palme from "../../../img/Portogallo/palme.jpg"


const Portogallo = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Portogallo 2018</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={ponte}/>
            </div>
          </div>
            
          <div class="cardt">
            <div class="cardt__image">
              <img src={casanatura}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={graffiti}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__content1">
              <p><em>Per me non esistono fiori in grado di reggere il confronto<br/>
con la varietà dei colori che assume Lisbona alla luce del sole.<br/>
</em></p>
              <p>— Fernando Pessoa</p>
            </div>
          </div>
         
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
              <img src={porto}/>
            </div>
          </div>
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={castello}/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Portogallo</h2>
                <p>Il più avventuroso viaggio che abbia mai intrapreso si è esteso per un'intera settimana, un on the road che ha abbracciato diverse tappe indimenticabili.</p>
                <p>Abbiamo iniziato da Porto e ci siamo spinti fino a raggiungere Lisbona, attraversando panorami mozzafiato e luoghi suggestivi come Sintra, l'atmosfera incantata di Obidos, la storia palpabile di Guimares e la grandiosità spettacolare di Cabo Da Roca.</p>
                <p>Senza dimenticare una menzione alla cucina portoghese, un'esperienza culinaria che resterà per sempre nei miei ricordi, arricchendo il viaggio con sapori indimenticabili.</p> 
              </div>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={operachiesa}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={sentiero}/>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={oceano}/>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={metro}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={fiori}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__content1">
              <p><em>C’è sempre un passaggio, una scala, un vicolo attraverso il quale Lisbona scappa al turista che credeva di averla conquistata per sempre.
</em></p>
              <p>— Fabrizio Caramagna</p>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={vetrate}/>

            </div>
          </div>
        
          <div class="cardt">
            <div class="cardt__image">
              <img src={verde}/>
            </div>
          </div>
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
            <img src={scalechiesa}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={palme}/>
            </div>
          </div>
         
        </div>
      </div>
  
      </Col>

      </Row>

   

      </div>

      
    );
}

export default Portogallo;