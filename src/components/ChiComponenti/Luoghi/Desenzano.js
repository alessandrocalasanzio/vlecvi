import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.css';

import { Col, Row } from "react-bootstrap";


import vigne1 from "../../../img/Italia/Desenzano/vigne.jpg";
import botte from "../../../img/Italia/Desenzano/botte.jpg";
import vista2 from "../../../img/Italia/Desenzano/vista2.jpg";
import rose from "../../../img/Italia/Desenzano/rose.jpg";
import gattino from "../../../img/Italia/Desenzano/gattino.jpg";
import vista from "../../../img/Italia/Desenzano/vista.jpg";
import esposizione from "../../../img/Italia/Desenzano/esposizione.jpg";



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

        <div className="maint-container">
        <div className="gridt-container">
          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={vigne1} alt=""/>
            </div>
          </div>

          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={botte} alt=""/>
            </div>
          </div>
            
       
         
          <div className="cardt cardt--featured">
            <div className="cardt__side-by-side--m">
              <div className="cardt__image">
                <img src={vista2} alt=""/>
              </div>
              <div className="cardt__content paddingt-large--l">
                <h2>Az. Montonale - Desenzano</h2>
               <p>Gita all'azienda agricola Montonale a Desenzano del Garda per un tour e una piacevole degustazione
                dei vini di loro produzione.
               </p>
              </div>
            </div>
          </div>
        
          <div className="cardt cardt--vertical">
            <div className="cardt__image">
              <img src={rose} alt=""/>
            </div>
          </div>
           
          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={esposizione} alt=""/>
            </div>
          </div>

          <div className="cardt cardt--vertical">
            <div className="cardt__image">
              <img src={gattino} alt=""/>
            </div>
          </div>
          
          <div className="cardt cardt--horizontal1">
            <div className="cardt__image">
              <img src={vista} alt=""/>
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