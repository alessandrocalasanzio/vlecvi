import React, { useState, useEffect } from "react";

import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel styles
import { Carousel } from 'react-responsive-carousel';

import Blog from "../../4.Blog";
import BlogFiltro from "../BlogFiltro";
import Navbar from "../../1.Navbar";


import notion from '../../../img/notion.jpg';

import mesi from '../../../img/MESI.png';
import notion1 from '../../../img/notion1.png';
import notionduplica from  '../../../img/notionDuplica.png';
import Fade from 'react-reveal/Fade';


import Giscus from '@giscus/react';

import { FaCog, FaHeart } from 'react-icons/fa';  // Esempio di importazione di icone
import { FaShareAlt } from "react-icons/fa";
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaPaypal } from 'react-icons/fa'; // Importa l'icona PayPal da react-icons



const Notion = () => {
  const pageLink = window.location.href;
  const [isLinkCopied, setLinkCopied] = useState(false);

  const handleCopyLink = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000); // Resetta il messaggio dopo 2 secondi
  };
  

  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div>
      <Navbar />

      <Row>
        <Col className="bordoColonnaExcel" md={2} >
          <div className='sticky-top'>

            <h1 className='vertical-rl sticky-top '>Notion+Template</h1>

          </div>


        </Col>
        <Col>
          <img className="fotoNotion" src={notion} />

          <div className='testoBlog'>

            <p>Eccoci qui con il secondo mini-progetto di questo sito. </p>
                
            <p>In questo articolo parleremo del mondo di Notion: cos'è, come funziona e infine ti darò un mio personale template.</p>


           

            <p className="titoloBlog">COS'E' NOTION</p>



            <div class="cardt cardt--featured">
              <div class="cardt__side-by-side--m">
                <div class="cardt__image">
                  <img className={`fotoBlog1 ${isZoomed ? 'zoomed' : ''}`} src={notion1} onClick={toggleZoom} />

                </div>

                <div class="cardt__content paddingt-large--l">

                  <div className="timeline-container">
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>NOTION</h3>
                            <p>  Notion è un’app all-in-one per la gestione di progetti e la creazione di  database.</p>
                            <p>Essendo disponibile sia come web app, sia come desktop app e sia come mobile app permette di accedere
                              ai propri progetti ovunque in maniera molto semplice.</p>
                              <p> È ideale per chi desidera organizzare i propri progetti, personali o lavorativi, in modo schematico ma al tempo stesso efficiente.</p>
<p>
                              <h3>A chi è utile Notion?</h3>
                              <ul>
                             <li> A livello personale: Ideale per studenti che vogliono prendere appunti, organizzare il materiale di studio e gestire scadenze,<br/> così come per creativi e blogger che desiderano pianificare contenuti, raccogliere idee e creare archivi digitali personalizzati.</li>
                             <br/>
                             <li> A livello lavorativo: Perfetto per freelance e professionisti che devono gestire progetti, clienti e documentazione,<br/> oltre che per aziende e team che necessitano di collaborare su documenti condivisi, centralizzare informazioni e ottimizzare il lavoro di squadra.</li>
</ul>
                            </p>
                          
                        </div>
                      </div>



                    </div>
                  </div>

                </div>
              </div>
            </div>

            <p className="titoloBlog">PERSONAL TEMPLATE</p>

            <div class="cardt cardt--featured">
              <div class="cardt__side-by-side--m">
                <div class="cardt__image">
                  <img className={`fotoBlog1 ${isZoomed ? 'zoomed' : ''}`} src={notionduplica} onClick={toggleZoom} />

                </div>

                <div class="cardt__content paddingt-large--l">

                  <div className="timeline-container">
                    <div className="timeline">

                    <div className="timeline-item">
                        <div className="timeline-content">
                          <h4>REGISTRATI SU NOTION</h4>
                          <p> 1. La prima cosa da fare è andare sul sito www.notion.com, e creare il tuo account.</p>
                          <p> 2. Una volta registrato, loggati direttamente all'interno della web app o scarica
                            <br/>l'app tramite il tasto del Download che trovi sul sito.
                          </p>

                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h5>COME SCARICARE IL MIO TEMPLATE</h5>
                          <br/>
                          <p> 1. Clicca su questo link:<br/> 
                            <Button className='buttonRadius' variant="btn btn-dark"><a href="https://vlecvi.notion.site/Second-Mind-de141eff678b47fd97d31fb896e3d8be"  className='buttonRadius' variant="btn btn-dark">Notion Template</a></Button>
                          </p>
                          <br/>
                          <p>2. Una volta cliccato sul link, ti comprarira la pagina come nella foto che trovi a testimonianza, 
                          e l'unica cosa che<br/> dovrai fare è cliccare sul pulsante "Duplica" per vedere il template direttamente all'interno del tuo account.</p>
                        </div>
                      </div>


                    </div>
                  </div>

                </div>
              </div>
            </div>



           

            <p className="titolo2Blog">CONCLUSIONI</p>

            <p>Eccoci arrivati alle conclusioni.</p>
            <p>Come avrai notato non ho creato nessun manuale all'interno di questa pagina.</p>

             <p>Questo perchè ogni singola spiegazione di come funziona il template in ogni sua forma è gia all'interno 
            del progetto stesso.</p>
            

            <p>Questo progetto nasce con l’intenzione di aiutarti ad organizzare al meglio la tua vita, essenzialmente come se fosse una sorta di “secondo cervello” dove tenere tutto organizzato e smettere di tenere cose a mente. </p>

            <p>Uso personalmente questo template, che ho creato appositamente per me, da ormai un paio d'anni, e posso dirti che da quando lo utilizzo, la mia organizzazione – sia in termini di gestione del tempo che dei compiti – è notevolmente migliorata.</p>
            
            <p>Spero che questo tool possa esserti d'aiuto e se hai consigli su come migliorare il progetto
              o dubbi su come si utilizza, scrivimi 🙂
            </p>

          
          </div>

        </Col>

      </Row>

      <div className="link-bar1">
      <CopyToClipboard text={pageLink} onCopy={handleCopyLink}>
      <span className="support-text"style={{ cursor: 'pointer' }}>CONDIVIDI ARTICOLO: <FaShareAlt /></span>
      </CopyToClipboard>
      <span style={{ position: 'relative' }}>
        {isLinkCopied && (
          <p style={{ color: 'black', fontSize: '8px', position: 'absolute', top: '10%', left: 0 }}>
            Link copiato negli appunti!
          </p>
        )}
      </span>

    
      <span className="support-text support-container">PER SUPPORTARMI:
      
      <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="business" value="TUM7KNN6PNHDS" />
          <input type="hidden" name="no_recurring" value="0" />
          <input type="hidden" name="item_name" value="Dona pure con Paypal se l'articolo di questo Blog ti è piaciuto e mi vuoi sostenere :)" />
          <input type="hidden" name="currency_code" value="EUR" />
          
          {/* Pulsante di donazione di PayPal */}
          <input type="image" className="paypal-button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/887px-PayPal_Logo_Icon_2014.svg.png" width="50px" height="50px" color="black" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        </form>
      
     </span>

    </div>

     <Row>
      
  
</Row>
      <p className="titolo1Blog">ALTRI ARTICOLI DEL BLOG:</p>

      <BlogFiltro />
    </div>



  )
}

export default Notion;