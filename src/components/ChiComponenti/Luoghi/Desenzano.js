import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.js';
import '../../../App.css';

import { Col, Row } from "react-bootstrap";


import vigne1 from "../../../img/Desenzano/vigne.jpg";
import botte from "../../../img/Desenzano/botte.jpg";
import vista2 from "../../../img/Desenzano/vista2.jpg";
import rose from "../../../img/Desenzano/rose.jpg";
import gattino from "../../../img/Desenzano/gattino.jpg";
import vista from "../../../img/Desenzano/vista.jpg";
import esposizione from "../../../img/Desenzano/esposizione.jpg";



const Desenzano = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h3 className='vertical-rl sticky-top '>Az. Montonale - Desenzano</h3>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={vigne1}/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={botte}/>
            </div>
          </div>
            
       
         
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={vista2}/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Az. Montonale - Desenzano</h2>
               <p>Gita all'azienda agricola Montonale a Desenzano del Garda per un tour e una piacevole degustazione
                dei vini di loro produzione.
               </p>
              </div>
            </div>
          </div>
        
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={rose}/>
            </div>
          </div>
           
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={esposizione}/>
            </div>
          </div>

          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={gattino}/>
            </div>
          </div>
          
          <div class="cardt cardt--horizontal1">
            <div class="cardt__image">
              <img src={vista}/>
            </div>
          </div>

          
          
        
       
        
         
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default Desenzano;