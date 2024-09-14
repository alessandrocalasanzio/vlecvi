import React from "react";
import Navbar from "../../1.Navbar.js";

import '../../../App.js';
import '../../../App.css';

import { Col, Row } from "react-bootstrap";

import moulin from "../../../img/Parigi/moulin.jpg";
import boxoffice from "../../../img/Parigi/boxoffice.jpg";
import graffiti from "../../../img/Parigi/graffiti.jpg";
import erba from "../../../img/Parigi/erba.jpg";
import riassunto from "../../../img/Parigi/riassunto.jpg";
import tour from "../../../img/Parigi/tour.jpg";
import scrittaneon from "../../../img/Parigi/scrittaneon.jpg";
import arco from "../../../img/Parigi/arco.jpg";
import lucitour from "../../../img/Parigi/lucitour.jpg";
import ponte from "../../../img/Parigi/ponte.jpg";
import notre from "../../../img/Parigi/notre.jpg";
import chiesa from "../../../img/Parigi/chiesa.jpg";
import parlamento from "../../../img/Parigi/parlamento.jpg";
import scrittastrada from "../../../img/Parigi/scrittastrada.jpg";

const Parigi = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Parigi 2017</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={moulin}/>
            </div>
          </div>
            
          <div class="cardt">
            <div class="cardt__image">
              <img src={boxoffice}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={graffiti}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__content">
              <p><em>Ci sono solo due posti al mondo dove possiamo vivere felicemente: a casa e a Parigi</em></p>
              <p>— Hemingway</p>
            </div>
          </div>
           
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
              <img src={erba}/>
            </div>
          </div>
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={riassunto}/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Parigi, "La vie en Rose"</h2>
                <p>La  gita a Parigi fatta con amici è stata un'avventura intensa, immortalata in questa foto che ho scelto con cura. Questo scatto rappresenta ciò che siamo riusciti a visitare, tra le meraviglie della città, nel breve lasso di tempo di 48 ore.</p>
<p>È stata un'esperienza appagante e sfiancante allo stesso tempo. Abbiamo avuto l'opportunità di esplorare luoghi iconici come il suggestivo Moulin Rouge e di godere della magnifica vista dalla cima della Torre Eiffel.</p>
<p>Nonostante l'entusiasmo di aver visto così tanti luoghi d'interesse, c'è un sottile velo di malinconia che ci avvolge per non aver dedicato più tempo all'atmosfera di questà città.</p>
              </div>
            </div>
          </div>
        
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={tour}/>
            </div>
          </div>
           
          <div class="cardt">
            <div class="cardt__image">
              <img src={scrittaneon}/>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={arco}/>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={lucitour}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={ponte}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__content">
              <p><em>Respirare Parigi, conserva l’anima.
</em></p>
              <p>— Victor Hugo</p>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={notre}/>
            </div>
          </div>
        
          <div class="cardt">
            <div class="cardt__image">
              <img src={chiesa}/>
            </div>
          </div>
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
              <img src={parlamento}/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={scrittastrada}/>
            </div>
          </div>
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default Parigi;