import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.js';
import '../../../App.css';

import { Col, Row } from "react-bootstrap";



import torre from '../../../img/PortoRecanati2/torre.jpg';
import alberi from '../../../img/PortoRecanati2/alberi.jpg';
import arco from '../../../img/PortoRecanati2/arco.jpg';
import caffe from '../../../img/PortoRecanati2/caffe.jpg';
import entratagiardino from '../../../img/PortoRecanati2/entratagiardino.jpg';
import gattino from '../../../img/PortoRecanati2/gattino.jpg';
import viti from '../../../img/PortoRecanati2/viti.jpg';
import viti2 from '../../../img/PortoRecanati2/viti2.jpg';
import panoramairti from '../../../img/PortoRecanati2/panoramairti.jpg';

import girasoli from '../../../img/PortoRecanati2/girasoli.jpg';


const PortoRecanati2 = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
        
         <h1 className='vertical-rl sticky-top '>Recanati & Gli Irti Colli
         </h1>
         
          </div>
        
          
        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={alberi}/>
            </div>
          </div>
            
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={caffe}/>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={gattino}/>
            </div>
          </div>
         
        
          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={entratagiardino}/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h3>Recanati & gli Irti Colli</h3>
                <p>Qualche scorcio di Recanati e dintorni visitata nel 2025.</p>
                <p>Con particolare attenzione all'orto sul colle dove si presume che Leopardi qui scrisse la poesia "L'Infinito".</p>

              </div>
            </div>
          </div>
        
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={viti}/>
            </div>
          </div>
           
        
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={torre}/>
            </div>
          </div>
          
           <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={girasoli}/>
            </div>
          </div>
         
          
           <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={arco}/>
            </div>
          </div>
        
            <div class="cardt cardt--2x">
                      <div class="cardt__image">
                        <img src={panoramairti}/>
                      </div>
                    </div>

         <div class="cardt cardt--2x">
                      <div class="cardt__image">
                        <img src={viti2}/>
                      </div>
                    </div>
          
          
        </div>
      </div>

      </Col>

      </Row>

   

      </div>

      
    );
}

export default PortoRecanati2;