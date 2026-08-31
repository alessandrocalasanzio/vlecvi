import React from "react";
import Navbar from "../../1.Navbar";

import '../../../App.css';

import { Col, Row } from "react-bootstrap";

import occhio from "../../../img/Estero/Grecia/occhio.jpg"
import vicolo from "../../../img/Estero/Grecia/vicolo.jpg"
import vetrate from "../../../img/Estero/Grecia/vetrate.jpg"
import giardino from "../../../img/Estero/Grecia/giardino.jpg"
import fontana from "../../../img/Estero/Grecia/fontana.jpg"
import souvenir from "../../../img/Estero/Grecia/souvenir.jpg"
import ristorante from "../../../img/Estero/Grecia/ristorante.jpg"
import notturna from "../../../img/Estero/Grecia/notturna.jpg"
import gatto from "../../../img/Estero/Grecia/gatto.jpg"
import athenanike from "../../../img/Estero/Grecia/athenanike.jpg"
import acropoli from "../../../img/Estero/Grecia/acropoli.jpg"
import bandiera from "../../../img/Estero/Grecia/bandiera.jpg"
import partenone from "../../../img/Estero/Grecia/partenone.jpg"
import cipressi from "../../../img/Estero/Grecia/cipressi.jpg"
import agora from "../../../img/Estero/Grecia/agora.jpg"
import vistamuseo from "../../../img/Estero/Grecia/vistamuseo.jpg"
import lego from "../../../img/Estero/Grecia/lego.jpg"


const Grecia = () => {

    return(
<div>
        <Navbar/>

        <Row>

        <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>

         <h1 className='vertical-rl sticky-top '>Grecia 2026</h1>

          </div>


        </Col>
        <Col>

        <div class="maint-container">
        <div class="gridt-container">
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={vicolo} alt=""/>
            </div>
          </div>

          <div class="cardt">
            <div class="cardt__image">
              <img src={occhio} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={lego} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={vetrate} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__image">
              <img src={giardino} alt=""/>
            </div>
          </div>
          <div class="cardt cardt--horizontal">
            <div class="cardt__image">
              <img src={fontana} alt=""/>
            </div>
          </div>
          <div class="cardt">
            <div class="cardt__content1">
              <p><em>Non ho mai avvertito la presenza degli dèi come qui, in Grecia.<br/>
</em></p>
              <p>— Henry Miller</p>
            </div>
          </div>

          
          <div class="cardt">
            <div class="cardt__image">
              <img src={souvenir} alt=""/>
            </div>
          </div>

         

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={notturna} alt=""/>
            </div>
          </div>

           <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={acropoli} alt=""/>
            </div>
          </div>

           <div class="cardt cardt--vertical">
            <div class="cardt__image">
              <img src={ristorante} alt=""/>
            </div>
          </div>

            <div class="cardt">
            <div class="cardt__image">
              <img src={gatto} alt=""/>
            </div>
          </div>
        

          

          <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
                <img src={bandiera} alt=""/>
              </div>
              <div class="cardt__content paddingt-large--l">
                <h2>Grecia</h2>
                <p>Tre giorni ad Atene, il mio primo viaggio in Grecia, tra il 19 e il 21 giugno.</p>
                <p>Ho girato la città vecchia di Plaka tra vicoli, scorci sull'Acropoli tra i palazzi e chiese ortodosse, per poi passare interi pomeriggi immerso nei resti dell'Acropoli stessa: il Partenone, l'Eretteo con le sue Cariatidi e i Propilei mi hanno lasciato senza parole.</p>
                <p>Tra una rovina e l'altra, spazio anche a momenti più leggeri: il Giardino Nazionale, il Museo dell'Acropoli, una cena tra le rose in un locale del centro e qualche incontro inaspettato, come quello con un gatto curioso affacciato da un muretto.</p>
              </div>
            </div>
          </div>

            <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={athenanike} alt=""/>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={partenone} alt=""/>
            </div>
          </div>
        
         
         
          <div class="cardt">
            <div class="cardt__content">
              <p><em>Non temo nulla, non spero in nulla, sono libero.
</em></p>
              <p>— Nikos Kazantzakis</p>
            </div>
          </div>

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={cipressi} alt=""/>
            </div>
          </div>
         
          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={agora} alt=""/>
            </div>
          </div>
         

          <div class="cardt cardt--2x">
            <div class="cardt__image">
              <img src={vistamuseo} alt=""/>
            </div>
          </div>
          
    

        </div>
      </div>

      </Col>

      </Row>



      </div>


    );
}

export default Grecia;
