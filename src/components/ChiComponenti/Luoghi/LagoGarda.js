import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.css';

import { Col, Row } from "react-bootstrap";



import lagogarda from "../../../img/Italia/Garda/lagogarda.jpg";
import lungovia from "../../../img/Italia/Garda/lungovia.jpg";
import palme from "../../../img/Italia/Garda/palme.jpg";
import palme2 from "../../../img/Italia/Garda/palme2.jpg";
import piscina from "../../../img/Italia/Garda/piscina.jpg";




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

        <div className="maint-container">
        <div className="gridt-container">
          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={lungovia} alt=""/>
            </div>
          </div>

          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={palme} alt=""/>
            </div>
          </div>
            
       
         
          <div className="cardt cardt--featured">
            <div className="cardt__side-by-side--m">
              <div className="cardt__image">
                <img src={lagogarda} alt=""/>
              </div>
              <div className="cardt__content paddingt-large--l">
                <h2>Lago di Garda</h2>
                <p>Gita presso il lungo corso nei pressi del Lago di Garda.</p>
          
              </div>
            </div>
          </div>
        
          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={palme2} alt=""/>
            </div>
          </div>

          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={piscina} alt=""/>
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