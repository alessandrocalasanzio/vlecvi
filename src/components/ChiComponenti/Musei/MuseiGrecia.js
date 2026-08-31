import React from 'react';
import Navbar from '../../1.1Navbar1.js';
import { Col, Row } from 'react-bootstrap';

import zappeion from '../../../img/Musei/museiGrecia/zappeion.jpg';
import zappeionsoffitto from '../../../img/Musei/museiGrecia/zappeionsoffitto.jpg';
import zappeionatrio from '../../../img/Musei/museiGrecia/zappeionatrio.jpg';
import zappeioninterno from '../../../img/Musei/museiGrecia/zappeioninterno.jpg';

import arcoadriano from '../../../img/Musei/museiGrecia/arcoadriano.jpg';

import zeus from '../../../img/Musei/museiGrecia/zeus.jpg';
import propilei from '../../../img/Musei/museiGrecia/propilei.jpg';
import partenone from '../../../img/Musei/museiGrecia/partenone.jpg';
import partenonefacciata from '../../../img/Musei/museiGrecia/partenonefacciata.jpg';
import cariatidi from '../../../img/Musei/museiGrecia/cariatidi.jpg';
import panoramaacropoli from '../../../img/Musei/museiGrecia/panoramaacropoli.jpg';
import efestio from '../../../img/Musei/museiGrecia/efestio.jpg';

import metopamuseo from '../../../img/Musei/museiGrecia/metopamuseo.jpg';
import museocariatidi from '../../../img/Musei/museiGrecia/museocariatidi.jpg';
import tredee from '../../../img/Musei/museiGrecia/tredee.jpg';
import gigantefrontone from '../../../img/Musei/museiGrecia/gigantefrontone.jpg';
import leonefrontone from '../../../img/Musei/museiGrecia/leonefrontone.jpg';
import fregiodei from '../../../img/Musei/museiGrecia/fregiodei.jpg';

import prigione from '../../../img/Musei/museiGrecia/prigione.jpg';
import filopappo from '../../../img/Musei/museiGrecia/filopappo.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel styles
import { Carousel } from 'react-responsive-carousel';


    const MuseiGrecia = () => {
      return (

        <div>
          <Navbar />

          <Row>

<Col   className="bordoColonna" md={2} >
  <div className='sticky-top'>

 <h1 className='vertical-rl sticky-top '>Musei di Atene</h1>

  </div>


</Col>

    <Col>

    <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
              <Carousel showThumbs={false} infiniteLoop showArrows={false} autoPlay={true} stopOnHover={true} interval={4000}>

                    <img src={zappeion} alt="Zappeion" />
                    <img src={zappeionsoffitto} alt="Soffitto della sala d'onore" />
                    <img src={zappeionatrio} alt="Atrio interno" />
                    <img src={zappeioninterno} alt="Cortile colonnato" />

                </Carousel>
              </div>
              <div class="cardt__content paddingt-large--l">
              <h2>Zappeion</h2>
                    <p>Il Zappeion sorge all'interno del Giardino Nazionale di Atene ed è uno degli edifici più eleganti della città: una sala per esposizioni in stile neoclassico, costruita nell'Ottocento grazie alla donazione del mecenate Evangelis Zappas.</p>
                    <p>Ha ospitato la scherma dei primi Giochi Olimpici moderni del 1896 ed è ancora oggi usato per eventi, mostre e conferenze istituzionali.</p>
                    <div className="timeline-container">
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 1 - Facciata neoclassica</h3>
            <p>Il pronao con le sue colonne corinzie, visitato nel tardo pomeriggio della prima giornata, prima di proseguire verso i vicoli di Plaka.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 2 - Il soffitto della sala d'onore</h3>
            <p>Stucchi e decorazioni dipinte a motivi vegetali incorniciano un tondo centrale, in perfetto stile neoclassico ottocentesco.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 3 - L'atrio interno</h3>
            <p>Colonne ioniche in marmo separano l'atrio dalle sale laterali, dipinte nei toni del rosso pompeiano.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 4 - Il cortile colonnato</h3>
            <p>Il peristilio interno a pianta semicircolare, cuore dell'edificio, su cui si affacciano le sale espositive.</p>
          </div>
        </div>

      </div>
    </div>
              </div>
            </div>
          </div>

    <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
              <img src={arcoadriano} alt="Porta di Adriano" />
              </div>
              <div class="cardt__content paddingt-large--l">
              <h2>Porta di Adriano</h2>
                    <p>Eretta nel 131 d.C. per volere dell'imperatore Adriano, la porta segnava simbolicamente il confine tra la città greca antica e la nuova Atene romana che l'imperatore aveva contribuito a costruire.</p>
                    <p>Sull'architrave un'iscrizione recitava, da un lato, "Questa è Atene, l'antica città di Teseo" e, dall'altro, "Questa è la città di Adriano, non di Teseo": attraversandola verso Plaka, alle spalle si lascia l'Acropoli, ancora visibile in lontananza.</p>
              </div>
            </div>
          </div>

    <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
              <Carousel showThumbs={false} infiniteLoop showArrows={false} autoPlay={true} stopOnHover={true} interval={4000}>

                    <img src={zeus} alt="Tempio di Zeus Olimpio" />
                    <img src={propilei} alt="Propilei" />
                    <img src={partenone} alt="Partenone" />
                    <img src={partenonefacciata} alt="Facciata del Partenone" />
                    <img src={cariatidi} alt="Cariatidi" />
                    <img src={panoramaacropoli} alt="Panorama sull'Acropoli" />
                    <img src={efestio} alt="Tempio di Efesto" />

                </Carousel>
                            </div>
              <div class="cardt__content paddingt-large--l">
              <h2>Acropoli di Atene e dintorni</h2>
                    <p>Il cuore archeologico della città, visitato nella seconda giornata: dai resti del tempio più grande mai dedicato a Zeus, fino alla sommità della rocca sacra dove sorgono il Partenone e l'Eretteo.</p>
                    <div className="timeline-container">
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 1 - Tempio di Zeus Olimpio</h3>
            <p>Iniziato nel VI secolo a.C. e completato solo sotto l'imperatore romano Adriano, oltre 600 anni dopo. Delle 104 colonne originali, alte 17 metri, oggi ne restano in piedi solo 15.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 2 - I Propilei</h3>
            <p>Il monumentale ingresso alla sommità dell'Acropoli, costruito nel V secolo a.C.: attraversarlo di prima mattina, con la luce ancora bassa, regala uno dei momenti più suggestivi della visita.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 3 - Partenone</h3>
            <p>Il tempio dedicato ad Atena Parthenos, simbolo assoluto dell'Acropoli e dell'architettura classica greca, costruito nel V secolo a.C. sotto la guida di Pericle.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 4 - Il Partenone, facciata</h3>
            <p>Il fronte occidentale del tempio, ancora avvolto dalle impalcature dei lavori di restauro che proseguono da decenni: un cantiere di conservazione mai davvero concluso.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 5 - Eretteo e le Cariatidi</h3>
            <p>A pochi passi dal Partenone, l'Eretteo custodisce la celebre loggia delle Cariatidi: sei statue femminili che sostengono il tetto al posto delle tradizionali colonne.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 6 - Rovine e panorama su Atene</h3>
            <p>Tamburi di colonna abbandonati tra le rocce, con l'intera città distesa in basso fino alle colline dell'Attica: la prova più diretta di quanto in alto sorga l'Acropoli.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 7 - Tempio di Efesto</h3>
            <p>Situato nell'Antica Agorà, ai piedi dell'Acropoli, è il tempio dorico meglio conservato di tutta la Grecia, dedicato al dio del fuoco e della metallurgia.</p>
          </div>
        </div>

      </div>
    </div>
              </div>
            </div>
          </div>

    <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
              <Carousel showThumbs={false} infiniteLoop showArrows={false} autoPlay={true} stopOnHover={true} interval={4000}>

                    <img src={metopamuseo} alt="Metopa del Partenone" />
                    <img src={museocariatidi} alt="Cariatidi originali" />
                    <img src={tredee} alt="Le Tre Dee del frontone" />
                    <img src={gigantefrontone} alt="Figura del frontone" />
                    <img src={leonefrontone} alt="Leone del frontone" />
                    <img src={fregiodei} alt="Ricostruzione del fregio con gli dei" />

                </Carousel>
                            </div>
              <div class="cardt__content paddingt-large--l">
              <h2>Museo dell'Acropoli</h2>
                    <p>Ai piedi della rocca sacra, il Museo dell'Acropoli raccoglie tutto ciò che nei secoli è stato spostato al riparo dagli agenti atmosferici e dall'inquinamento: le sculture originali dei templi e, in gesso bianco, i calchi che ne prendono il posto quando gli originali sono finiti in musei stranieri.</p>
                    <div className="timeline-container">
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 1 - Metopa del Partenone</h3>
            <p>Uno dei pannelli scultorei originali che decoravano il fregio esterno del Partenone, qui esposto orizzontalmente per essere osservato da vicino.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 2 - Le Cariatidi originali</h3>
            <p>Cinque delle sei statue originali dell'Eretteo sono custodite qui al museo (la sesta si trova al British Museum di Londra): quelle rimaste sulla rocca sono copie.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 3 - Le Tre Dee del frontone</h3>
            <p>Le figure femminili semisdraiate che occupavano l'angolo del frontone orientale del Partenone. Il gesso bianco le distingue dai frammenti in marmo ocra esposti alle pareti: al museo il colore chiaro segnala i calchi, perché gli originali si trovano al British Museum.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 4 - Figura del frontone</h3>
            <p>Una delle divinità marine raffigurate semisdraiate agli angoli del frontone del Partenone, scolpita per adattarsi perfettamente alla linea obliqua del timpano.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 5 - Il leone del frontone</h3>
            <p>Gruppo scultoreo con un leone che azzanna la preda, uno dei soggetti animali che completavano la decorazione dei frontoni dei templi arcaici dell'Acropoli.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 6 - Ricostruzione del fregio con gli dei</h3>
            <p>Un calco che restituisce l'assemblea degli dei dell'Olimpo, tra cui Zeus, Atena e Ares, così come dovevano apparire in origine sul fregio del Partenone, oggi in gran parte conservato al British Museum.</p>
          </div>
        </div>

      </div>
    </div>
              </div>
            </div>
          </div>

    <div class="cardt cardt--featured">
            <div class="cardt__side-by-side--m">
              <div class="cardt__image">
              <Carousel showThumbs={false} infiniteLoop showArrows={false} autoPlay={true} stopOnHover={true} interval={4000}>

                    <img src={prigione} alt="Prigione di Socrate" />
                    <img src={filopappo} alt="Monumento di Filopappo" />

                </Carousel>
                            </div>
              <div class="cardt__content paddingt-large--l">
              <h2>Collina di Filopappo</h2>
                    <p>Ultima tappa del viaggio, nella mattina del terzo giorno: la collina proprio di fronte all'Acropoli, meta meno battuta dal turismo di massa ma con una vista impagabile sulla rocca sacra.</p>
                    <div className="timeline-container">
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 1 - Prigione di Socrate</h3>
            <p>Un gruppo di celle scavate nella roccia alla base della collina, tradizionalmente identificate (senza certezza storica) come il luogo dove Socrate fu rinchiuso e costretto a bere la cicuta nel 399 a.C.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Immagine 2 - Monumento di Filopappo</h3>
            <p>Mausoleo eretto in epoca romana, nel II secolo d.C., in onore del principe Gaio Giulio Antioco Filopappo. Dalla sua sommità si gode una delle viste più belle su tutta l'Acropoli.</p>
          </div>
        </div>

      </div>
    </div>
              </div>
            </div>
          </div>


          </Col>
          </Row>
        </div>

  );
};

export default MuseiGrecia;
