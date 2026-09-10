import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.css';

import { Col, Row } from "react-bootstrap";


import costa from "../../../img/Italia/Varenna/Costa.jpg";
import lago from "../../../img/Italia/Varenna/lago.jpg";
import alberi from "../../../img/Italia/Varenna/alberi.jpg";
import statua from "../../../img/Italia/Varenna/statua.jpg";
import vasi from "../../../img/Italia/Varenna/vasi.jpg";




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

        <div className="maint-container">
        <div className="gridt-container">
          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={lago} alt=""/>
            </div>
          </div>

          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={alberi} alt=""/>
            </div>
          </div>
            
       
         
          <div className="cardt cardt--featured">
            <div className="cardt__side-by-side--m">
              <div className="cardt__image">
                <img src={costa} alt=""/>
              </div>
              <div className="cardt__content paddingt-large--l">
                <h2>Varenna</h2>
                <p>Gita a Varenna per ammirare questo incantevole paesino situato sul Lago di Como. </p>
                <p>Menzione d'onore va alla Villa Monastero, una delle principali attrazioni di Varenna, famosa per i suoi splendidi giardini botanici</p>
                 
              </div>
            </div>
          </div>
        
          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={statua} alt=""/>
            </div>
          </div>

          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={vasi} alt=""/>
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