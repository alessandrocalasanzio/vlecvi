import React, { useState, useEffect } from "react";

import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel styles
import { Carousel } from 'react-responsive-carousel';

import Blog from "../../4.Blog";
import BlogFiltro from "../BlogFiltro";
import Navbar from "../../1.Navbar";




import vlecvihurst from '../../../img/vlecvi/VlecviLogo1.png';
import vlecvidescrizione from '../../../img/vlecvi/VlecviBotDescrizione.png';
import inputvlecvi from '../../../img/vlecvi/InputVlecviBot.png';
import vlecvipercentuali from '../../../img/vlecvi/Perc.png';
import vlecvigain from '../../../img/vlecvi/Myfixbook.png';
import profitti1 from '../../../img/vlecvi/profitti1.jpg';
import profitti2 from '../../../img/vlecvi/profitti2.jpg';
import profitti3 from '../../../img/vlecvi/profitti3.jpg';
import forex from  '../../../img/vlecvi/forex.jpg';



import notionduplica from  '../../../img/notionDuplica.png';
import Fade from 'react-reveal/Fade';


import Giscus from '@giscus/react';

import { FaCog, FaHeart } from 'react-icons/fa';  // Esempio di importazione di icone
import { FaShareAlt } from "react-icons/fa";
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaPaypal } from 'react-icons/fa'; // Importa l'icona PayPal da react-icons





const VlecviBot = () => {
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

            <h1 className='vertical-rl sticky-top '>VlecviBot-Dolcevita</h1>

          </div>
        </Col>
        <Col>

       <img className="fotoVlecviBot" src={forex} /> 

           <p className="titoloBlog">VLECVIBOT - DOLCEVITA</p>

             <div class="cardt cardt--featured ">
                     <div class="cardt__side-by-side--m-vlecvi ">
                       <div class="cardt__image ">
                       <Carousel className="vlecvi-carousel"  showThumbs={false} infiniteLoop showArrows={false} autoPlay={true} stopOnHover={true} interval={4000}>
                             
                             <img src={vlecvihurst} alt="VlecviLogo" />
                             <img src={vlecvidescrizione} alt="VlecviDescrizione" />
                             <img src={inputvlecvi} alt="InputVlecvi" />
                             <img src={vlecvipercentuali} alt="Vlecvipercentuali" />
                             <img src={vlecvigain} alt="VlecviGain" />
                             <img src={profitti1} alt="profitti" />
                             <img src={profitti2} alt="profitti1" />
                             <img src={profitti3} alt="profitti2" />
         
                         </Carousel>  
                                     </div>
                       <p className="titoloBlog">PRESENTAZIONE PROGETTO</p>
                       <div class="cardt__content paddingt-large--2">
                       <h2>VlecviBot - Dolcevita</h2>
                            <p>Ho cercato per molto tempo le parole e il momento giusto per annunciare questo progetto.</p>
<p>È sempre difficile esporsi quando dedichi anni a qualcosa, continuando a rimandare per cercare la perfezione.</p>
<p>C’è un momento in cui si sente il bisogno di chiudere un cerchio. Per me è stato il giorno del mio compleanno, quando ho deciso di pubblicare questo progetto per la prima volta su Instagram, ora che era stabile da tempo.</p>
<p>Sei anni fa ho iniziato ad avvicinarmi al mondo degli investimenti.</p>
<p>Tra alti e bassi ho capito subito che, se avessi voluto creare qualcosa di davvero unico, avrei dovuto impegnarmi molto di più.</p>
<p>Quello che presento oggi è il risultato degli ultimi anni trascorsi dopo il diploma informatico, un percorso che mi ha dato le basi di programmazione e che, unito allo studio personale in ambito finanziario tra libri, ricerche e documentazione tecnica, mi ha permesso di sviluppare questo progetto.</p>
<p>Negli ultimi tre anni ho passato ogni sera, dopo il lavoro, allo studio e allo sviluppo di questo software.</p>
<p>Volevo creare qualcosa che fosse davvero mio e allo stesso tempo diverso dai migliaia di software già esistenti.</p>
<p>Qualcosa che potesse durare nel tempo, adattandosi ai vari mutamenti di mercato.</p>
<p>Per molto tempo ho pensato che sarebbe stato impossibile riuscirci: sia per la mancanza di competenze informatiche avanzate, sia per la mancanza di tempo e concentrazione (non è semplice mantenerla dopo 8 ore di lavoro, senza contare gli altri due progetti portati avanti in parallelo).</p>
<p>Da tutto questo nasce VlecviBot – Dolcevita, il software tecnicamente più completo che abbia mai realizzato.</p>
<p>È completamente automatico, con oltre 80 parametri personalizzabili, operatività dedicata esclusivamente al mercato dell’oro e una strategia unica basata sull’analisi di ogni singola barra per intercettare gli aumenti di volume, seguendo i principi di ciclicità naturale descritti da Hurst.</p>
<p>Un approccio che non ho riscontrato in nessun altro software attualmente sul mercato.</p>
<p>Il software, dopo uno sviluppo iniziale, è stato testato in conti reali negli ultimi due anni, apportando costanti miglioramenti.</p>
<p>Solo quest’anno è riuscito a registrare un +75%, mantenendo un drawdown massimo sotto il 10% e una flessione complessiva vicino al 17%.</p>
<p>So che sono solo percentuali e, senza un capitale di riferimento, restano numeri relativi.</p>
<p>Ma non è questo il punto che mi interessava mettere in evidenza.</p>
<p>Ciò che conta davvero è credere in un processo e vedere che ciò che costruisci, grande o piccolo che sia, funziona grazie alle tue forze.</p>
<p>È stato un percorso lungo, fatto di molti tentativi, blocchi, ripartenze e notti passate davanti allo schermo.</p>
<p>E anche se il software è progettato con criteri solidi, so bene che nessun risultato può essere garantito.</p>
<p>Oggi il mio obiettivo era annunciare l’esistenza di questo progetto e cercare di portare il messaggio che più mi stava a cuore.</p>
<p>Con la giusta dose di sacrificio e costanza, credere in un’idea anche quando sembra impossibile diventa il primo passo per trasformare ciò che all’inizio pare irraggiungibile in qualcosa di concreto.</p>



    
                       </div>
                 <p className="titoloBlog">COME FUNZIONA IL SOFTWARE</p>
<div class="cardt__content paddingt-large--2">
  <p>
    Come scritto nel paragrafo precedente, il software è automatico al 100%.
    Una volta inseriti i parametri corretti, tramite algoritmi interni sarà in grado di capire autonomamente quando aprire le posizioni, quando chiuderle e quando aprire posizioni aggiuntive, qualora lo ritenesse necessario.
  </p>

  <p>
    All'interno troviamo più di 80 parametri configurabili (nella foto 2 è visibile solo una parte), divisi per sezioni, tra cui:
  </p>

  <p>
    <ul>
      <li>Risk Management (impostazione dei lotti e del rischio in base al capitale)</li>
      <li>Calcolo del Trailing sulla posizione e del profitto complessivo in caso di griglia attiva</li>
      <li>Calcolo dello Stop Loss per le posizioni e funzioni separate per la chiusura simultanea di tutte le operazioni</li>
      <li>Limitatore dei profitti in euro o in percentuale del capitale, impostabile per la giornata corrente</li>
      <li>Dichiarazione della sessione operativa, ovvero la possibilità di utilizzarlo per l’intera giornata o di stopparlo a orari prestabiliti</li>
      <li>
        Apertura delle posizioni tramite l’utilizzo (facoltativo) di: Volumi, Hurst, Bollinger, ATR, RSI combinato con ATR e 3 funzioni indipendenti progettate per aprire posizioni solo in determinate condizioni della candela
      </li>
      <li>
        Funzione Griglia, con limite massimo di posizioni, Stop Loss per ogni operazione e 4 funzioni uniche per l’apertura di posizioni in copertura nel caso in cui la posizione iniziale risulti contro-trend
      </li>
      <li>Possibilità di aumentare i lotti in griglia tramite 4 funzioni, ognuna con caratteristiche specifiche</li>
      <li>Funzioni per l’impostazione dell’ID, l’attivazione delle informazioni a schermo e altre opzioni avanzate</li>
    </ul>
  </p>
</div>

<p className="titoloBlog">IL FUTURO DEL PROGETTO</p>
<div class="cardt__content paddingt-large--2">
  <p>
    Al momento, nonostante il software sia completo e funzionante da un paio d’anni su conti personali, ho deciso di non metterlo ancora in vendita.
  </p>

<p>
  Principalmente per continuare a migliorarlo ulteriormente e, in secondo luogo, per rafforzare i sistemi di sicurezza, così da evitare che finisca nelle mani sbagliate o venga distribuito in modo non autorizzato.
</p>


<p>
  Per questo motivo sto valutando la possibilità di proporlo in futuro solo a una cerchia ristretta di persone a me vicine e, successivamente, di valutare se estendere la vendita anche a un pubblico più ampio.
</p>


  <p>
    Per ora è tutto. Prossimamente cercherò di pubblicare qualche video o foto su questa pagina e sui social per mostrare in modo pratico come funziona il software.
  </p>

  <p>
    Seguimi sui social o salva questa pagina per rimanere aggiornato.
  </p>

  <p>A presto!</p>
  <p>Vle</p>
</div>
</div>
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
     
    </div>



  )
}

export default VlecviBot;