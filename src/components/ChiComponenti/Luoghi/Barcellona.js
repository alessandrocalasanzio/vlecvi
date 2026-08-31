import React from "react";
import Navbar from "../../1.Navbar.js";

import '../../../App.css';

import { Col, Row } from "react-bootstrap";

import tubineri from "../../../img/Estero/Barcellona/tubineri.jpg";
import palme from "../../../img/Estero/Barcellona/palme.jpg";
import panorama from "../../../img/Estero/Barcellona/panorama.jpg";
import castello from "../../../img/Estero/Barcellona/castello.jpg";
import sagrada from "../../../img/Estero/Barcellona/sagrada.jpg";
import aereo from "../../../img/Estero/Barcellona/aereo.jpg";
import mappa from "../../../img/Estero/Barcellona/mappa.jpg";
import sagrada1 from "../../../img/Estero/Barcellona/sagrada1.jpg";
import battlo from "../../../img/Estero/Barcellona/battlo.jpg";
import battlo1 from "../../../img/Estero/Barcellona/battlo1.jpg";
import palazzo from "../../../img/Estero/Barcellona/palazzo.jpg";
import opere from "../../../img/Estero/Barcellona/opere.jpg";
import gaudi from "../../../img/Estero/Barcellona/gaudi.jpg";
import arco from "../../../img/Estero/Barcellona/arco.jpg";



const Barcellona = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Barcellona 2017</h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={tubineri} alt=""/>
            </div>
          </div>
          
          <div class="cardt">
            <div class="cardt__image">
              <img src={palme} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={panorama} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__content1">
              <p><em>Barcellona, un orizzonte così incantevole,<br/>
Barcellona come un gioiello al sole.<br/>
Per te sarò un gabbiano<br/>
che vola sopra il tuo bel mare — (Freddie Mercury)
</em></p>
              
            </div>
          </div>
           
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
              <img src={castello} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={sagrada} alt=""/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Barcellona</h2>
                <p>Tre giorni avvincenti,dove ho esplorato con entusiasmo i luoghi più iconici di Barcellona:</p><p> Dalla maestosa Sagrada Familia alla Casa Battlò, passeggiando lungo la vivace atmosfera della Rambla fino a giungere all'incantevole Barceloneta:</p><p>Qui, tra spiagge e  strade costiere, ho sperimentato un connubio magico tra la storia della città e la bellezza del mare, lasciandomi rapire completamente dal fascino senza tempo di questo quartiere. </p>
               
                
              </div>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={aereo} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={mappa} alt=""/>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={sagrada1} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={battlo} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={battlo1} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__content">
              <p><em>Barcellona ti entra nel sangue e ti ruba l’anima
</em></p>
              <p>— Carlos Ruiz Zafón</p>
            </div>
          </div>
          
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={palazzo} alt=""/>
            </div>
          </div>
          
          <div class="cardt">
            <div class="cardt__image">
              <img src={opere} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
              <img src={gaudi} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={arco} alt=""/>
            </div>
          </div>
          
          
        </div>
      </div>
          
          
       

      </Col>

      </Row>

   

      </div>

      
    );
}

export default Barcellona;