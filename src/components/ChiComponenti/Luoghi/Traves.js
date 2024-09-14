import React from "react";
import Navbar from "../../1.Navbar.js";

import '../../../App.js';
import '../../../App.css';

import { Col, Row } from "react-bootstrap";


import strada from "../../../img/Traves/Strada.jpg";
import valle from "../../../img/Traves/Valle.jpg";
import valle3 from "../../../img/Traves/Valle3.jpg";
import valle2 from "../../../img/Traves/Valle2.jpg";
import sfuocato from "../../../img/Traves/Sfuocato.jpg";


const Traves = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Traves 2018</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={valle}/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={valle3}/>
            </div>
          </div>
            
       
         
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={strada}/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Traves</h2>

                <p>Abbiamo trascorso un Capodanno di 3/4 giorni a Traves, soggiornando in una  casa vacanze situata nelle vicinanze della Gold Cave, una suggestiva miniera d'oro abbandonata.</p>

                <p>Rifugio ideale per chi desidera immergersi in panorami montani mozzafiato e rilassarsi nella tranquillità della natura.</p>

                <p>La nostra avventura è iniziata con passeggiate esplorative nei dintorni, godendo della serenità e della bellezza incontaminata delle Valli di Lanzo.</p>

                <p> La vista delle montagne innevate e il silenzio della natura hanno reso ogni momento speciale, regalandoci un'esperienza di totale rigenerazione e gioia.</p>

                <p>Traves e la Gold Cave si sono dimostrati la scelta perfetta per un Capodanno all'insegna del relax e del divertimento</p>
              
              </div>
            </div>
          </div>
        
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={valle2}/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={sfuocato}/>
            </div>
          </div>
          
          
          
        
       
        
         
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default Traves;