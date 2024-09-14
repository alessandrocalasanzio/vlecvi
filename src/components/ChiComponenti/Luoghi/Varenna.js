import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.js';
import '../../../App.css';

import { Col, Row } from "react-bootstrap";


import costa from "../../../img/Varenna/Costa.png";
import lago from "../../../img/Varenna/lago.png";
import alberi from "../../../img/Varenna/alberi.png";
import statua from "../../../img/Varenna/statua.png";
import vasi from "../../../img/Varenna/vasi.jpg";




const Varenna = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Varenna 2016</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={lago}/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={alberi}/>
            </div>
          </div>
            
       
         
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={costa}/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Varenna</h2>
                <p>Gita a Varenna per ammirare questo incantevole paesino situato sul Lago di Como. </p>
                <p>Menzione d'onore va alla Villa Monastero, una delle principali attrazioni di Varenna, famosa per i suoi splendidi giardini botanici</p>
                 
              </div>
            </div>
          </div>
        
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={statua}/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={vasi}/>
            </div>
          </div>
          
          
          
        
       
        
         
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default Varenna;