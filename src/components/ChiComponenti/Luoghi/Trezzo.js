import React from "react";
import Navbar from "../../1.Navbar.js";

import '../../../App.js';
import '../../../App.css';

import { Col, Row } from "react-bootstrap";




import fiume from "../../../img/Trezzo/fiume.jpg";
import cielo from "../../../img/Trezzo/cielo.jpg";
import oca from "../../../img/Trezzo/oca.jpg";
import panorama from "../../../img/Trezzo/panorama.jpg";
import luna from "../../../img/Trezzo/luna.jpg";




const Trezzo = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Trezzo Sull'adda</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={cielo}/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={oca}/>
            </div>
          </div>
            
       
         
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={fiume}/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Trezzo Sull'adda</h2>
                <p>Raccoglierò in questa scheda le migliori foto scattate di Trezzo sull'Adda, la citta dove sono cresciuto 🙂
                </p>
              </div>
            </div>
          </div>
        
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={panorama}/>
            </div>
          </div>


          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={luna}/>
            </div>
          </div>
        
         
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default Trezzo;