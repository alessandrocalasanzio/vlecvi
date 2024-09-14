import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.js';
import '../../../App.css';

import { Col, Row } from "react-bootstrap";



import lagogarda from "../../../img/Garda/lagogarda.jpg";
import lungovia from "../../../img/Garda/lungovia.jpg";
import palme from "../../../img/Garda/palme.jpg";
import palme2 from "../../../img/Garda/palme2.jpg";
import piscina from "../../../img/Garda/piscina.jpg";




const LagoGarda = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Lago di Garda 2017</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={lungovia}/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={palme}/>
            </div>
          </div>
            
       
         
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={lagogarda}/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Lago di Garda</h2>
                <p>Gita presso il lungo corso nei pressi del Lago di Garda.</p>
          
              </div>
            </div>
          </div>
        
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={palme2}/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={piscina}/>
            </div>
          </div>
          
          
          
        
       
        
         
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default LagoGarda;