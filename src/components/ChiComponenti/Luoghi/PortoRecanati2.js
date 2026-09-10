import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.css';

import { Col, Row } from "react-bootstrap";



import torre from '../../../img/Italia/PortoRecanati2/torre.jpg';
import alberi from '../../../img/Italia/PortoRecanati2/alberi.jpg';
import arco from '../../../img/Italia/PortoRecanati2/arco.jpg';
import caffe from '../../../img/Italia/PortoRecanati2/caffe.jpg';
import entratagiardino from '../../../img/Italia/PortoRecanati2/entratagiardino.jpg';
import gattino from '../../../img/Italia/PortoRecanati2/gattino.jpg';
import viti from '../../../img/Italia/PortoRecanati2/viti.jpg';
import viti2 from '../../../img/Italia/PortoRecanati2/viti2.jpg';
import panoramairti from '../../../img/Italia/PortoRecanati2/panoramairti.jpg';

import girasoli from '../../../img/Italia/PortoRecanati2/girasoli.jpg';


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

        <div className="maint-container">
        <div className="gridt-container">
          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={alberi} alt=""/>
            </div>
          </div>
            
          <div className="cardt cardt--vertical">
            <div className="cardt__image">
              <img src={caffe} alt=""/>
            </div>
          </div>
          <div className="cardt cardt--vertical">
            <div className="cardt__image">
              <img src={gattino} alt=""/>
            </div>
          </div>
         
        
          <div className="cardt cardt--featured">
            <div className="cardt__side-by-side--m">
              <div className="cardt__image">
                <img src={entratagiardino} alt=""/>
              </div>
              <div className="cardt__content paddingt-large--l">
                <h3>Recanati & gli Irti Colli</h3>
                <p>Qualche scorcio di Recanati e dintorni visitata nel 2025.</p>
                <p>Con particolare attenzione all'orto sul colle dove si presume che Leopardi qui scrisse la poesia "L'Infinito".</p>

              </div>
            </div>
          </div>
        
          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={viti} alt=""/>
            </div>
          </div>
           
        
          <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={torre} alt=""/>
            </div>
          </div>
          
           <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={girasoli} alt=""/>
            </div>
          </div>
         
          
           <div className="cardt cardt--2x">
            <div className="cardt__image">
              <img src={arco} alt=""/>
            </div>
          </div>
        
            <div className="cardt cardt--2x">
                      <div className="cardt__image">
                        <img src={panoramairti} alt=""/>
                      </div>
                    </div>

         <div className="cardt cardt--2x">
                      <div className="cardt__image">
                        <img src={viti2} alt=""/>
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