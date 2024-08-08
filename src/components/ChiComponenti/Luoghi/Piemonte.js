import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.js';
import '../../../App.css';

import { Col, Row } from "react-bootstrap";



import panorama1 from "../../../img/PianiErna/Panorama1.jpg";
import panorama2 from "../../../img/PianiErna/Panorama2.jpg";
import panorama3 from "../../../img/PianiErna/Panorama3.jpg";



const Piemonte = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Piani D'erna</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={panorama1}/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={panorama2}/>
            </div>
          </div>
            
       
         
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={panorama3}/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Piani D'erna</h2>
                <p>Abbiamo trascorso una giornata divertente ai Piani d'Erna, raccogliendo castagne in compagnia.</p>
               <p> Emozionante è stata la vista della valle, che ci ha regalato panorami mozzafiato.</p>
              </div>
            </div>
          </div>
        
        
         
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default Piemonte;