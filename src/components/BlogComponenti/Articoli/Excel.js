import React, { useState, useEffect } from "react";

import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel styles
import { Carousel } from 'react-responsive-carousel';

import Blog from "../../4.Blog";
import BlogFiltro from "../BlogFiltro";
import Navbar from "../../1.Navbar";

import graphs from '../../../img/graphs.jpg';
import overview from '../../../img/OVERVIEW.png';
import mesi from '../../../img/MESI.png';

import Fade from 'react-reveal/Fade';


import Giscus from '@giscus/react';

import { FaCog, FaHeart } from 'react-icons/fa';  // Esempio di importazione di icone
import { FaShareAlt } from "react-icons/fa";
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaPaypal } from 'react-icons/fa'; // Importa l'icona PayPal da react-icons



const Excel = () => {
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

            <h1 className='vertical-rl sticky-top '>Excel Tracking</h1>

          </div>


        </Col>
        <Col>
          <img className="fotoBlog" src={graphs} />

          <div className='testoBlog'>

            <p>Quello che ho creato è un mio personale file di Excel che permette di tenere traccia delle entrate e delle uscite dei propri conti, avendo anche un occhio di riguardo sull'andamento generale mensile del totale dei propri soldi, sia vedendo in modo basilare se il conto rispetto al mese precedente è cresciuto o meno sia a livello di percentuale la sitazione come procede.</p>

            <p>Prima di procedere con la breve guida, che ti mostra le varie schermate(giusto per farti capire come usare al meglio il file) è importante scaricare il file😂. </p>

            <p>Ecco a te :</p>
            <Button className='buttonRadius' variant="btn btn-dark"><a href="https://drive.google.com/uc?export=download&id=1WuZbEMZH65EtR-g1z3njr-uenM7MZslc" download="SOLDI TABELLA.ods" className='buttonRadius' variant="btn btn-dark"> Tabella Soldi</a></Button>

            <p>Bene ora che avete scaricato il file e lo avete aperto possiamo vedere insieme le varie sezioni:</p>


            <p className="titoloBlog">OVERVIEW</p>



            <div class="cardt cardt--featured">
              <div class="cardt__side-by-side--m">
                <div class="cardt__image">
                  <img className={`fotoBlog1 ${isZoomed ? 'zoomed' : ''}`} src={overview} onClick={toggleZoom} />

                </div>

                <div class="cardt__content paddingt-large--l">
                  <p style={{ color: 'red' }}>N.B: I dati all'interno dell'immagine allegata sono dati casuali per far comprendere in maniera semplice come funziona la tabella.</p>

                  <div className="timeline-container">
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>SEZIONE 1</h3>
                          <p>Titolo della scheda. (In questo momento ci troviamo dentro l'Overwiew - ovvero dove guardare la panoramica dei nostri conti su come stanno progredendo).
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>SEZIONE 2</h3>
                          <p>Qui dovrete mettere il Vostro saldo iniziale da quando volete far partire la tabella.(Dovrete quindi calcolare manualmente il totale di tutti i Vs conti).
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>SEZIONE 3</h3>
                          <p>Qui vedrai mese per mese l'ammontare del tuo conto.</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>SEZIONE 4</h3>
                          <p>Qui vedrai la differenza(sia essa positiva o negativa) maturata nel mese corrente.<br />
                            Esempio: In tabella vedi che a Febbraio l'ammontare è di 1041€. Mentre a Marzo è di 1110€. La differenza(in questo caso positiva) è di 69€.
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>SEZIONE 5</h3>
                          <p>Qui vedrai sempre la differenza della SEZIONE 4 ma in termini di percentuali.<br />
                            (Infatti se proverai a calcolare il 6,22% di 1110€ del mese di Marzo ti uscirà 69€.)</p>
                        </div>
                      </div>


                    </div>
                  </div>

                </div>
              </div>
            </div>

            <p className="titoloBlog">SEZIONE: MESI</p>

            <div class="cardt cardt--featured">
              <div class="cardt__side-by-side--m">
                <div class="cardt__image">
                  <img className={`fotoBlog1 ${isZoomed ? 'zoomed' : ''}`} src={mesi} onClick={toggleZoom} />

                </div>

                <div class="cardt__content paddingt-large--l">
                  <p style={{ color: 'red' }}>N.B: I dati all'interno dell'immagine allegata sono dati casuali per far comprendere in maniera semplice come funziona la tabella.</p>

                  <div className="timeline-container">
                    <div className="timeline">

                    <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>SEZIONE 1</h3>
                          <p>Panoramica dei mesi. Ogni mese ha il proprio foglio per tenere tutto in ordine.</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>SEZIONE 2</h3>
                          <p>In questo riquadro puoi vedere sia i nomi dei tuoi vari conti(chiaramente li puoi soprannominare come vuoi tu),sia il totale dei tuoi conti relativo al mese scorso.</p>
                          <p>(Al tuo primo avvio, ovviamente, nel mese in cui farai partire il conteggio dovrai inserire tu manualmente l'ammontare di ogni conto<br/>in quanto la prima volta è come se fosse per te il totale del mese corrente e non del mese scorso.) </p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>SEZIONE 3</h3>
                          <p>Sezione data - Dovrai inserire tu, manualmente la data relativo a quando hai avuto una spesa o ricevuto un guadagno.</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>SEZIONE 4</h3>
                          <p>Qui vedrai i vari importi che metterai.</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>SEZIONE 5</h3>
                          <p> !Sezione importante! <br/> In questo file Excel non esiste(in quanto non è stato creato) un tabella relativa alle categorie di spesa, in quanto nel mio caso non è utile sapendo bene o male i soldi dove vengono spesi.</p>
                          <p> Quello che faccio, quindi, è quello di fare "aggiungi commento" per ogni voce di spesa cosi da vedere/capire in cosa sono stati spesi i soldi.</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>SEZIONE 6</h3>
                          <p>Qui vedrai l'ammontare dei tuoi conti in base a entrate e spese avute nel mese corrente.</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-content">
                          <h3>SEZIONE 7</h3>
                          <p>Non un vera sezione ma un memorandum su cosa fare la prima volta che scarichi il file.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>



           

            <p className="titolo2Blog">CONCLUSIONI</p>

            <p>Ok, siamo arrivati alle conclusioni.</p>
            <p>Come potete vedere, al primo impatto, puo sembrare difficile o complicato ma alla fine è molto semplice in quanto la tabella è quasi tutta automatica.</p>
            <p>Non l'ho scritto ma è chiaro che se non avete tutti quei conti presenti in tabella potete fare due cose: </p>
            <ul className="textUl" style={{ listStyleType: "disc" }}>
              <li> Lasciare quel conto/quei conti a 0 cosi da non farli interferire con la somma</li>
              <li> Eliminare quei conti dalle tabelle(a livello di Overview dovrebbe capire in automatico quali celle poi andare a calcolare ma qualora non lo facesse basta solo modificare la formula in base alle celle che avete attive- Piu facile a farsi che a dirsi).</li>
            </ul>


            <p>(Personalmente uso questa tabella da 3 anni a questa parte(visto che le app per il telefono puntulamente mi perdono/mi cancellano i dati) trovandomi davvero bene).</p>
            <p>Ricordati di salvarti una copia del file settimanalmente su un HD esterno cosi da non avere timore di perdere i dati qualora ti capitasse qualcosa al pc. </p>

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

export default Excel;