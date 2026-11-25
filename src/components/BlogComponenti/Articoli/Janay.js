import React, { useState } from "react";

import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel styles
import { Carousel } from 'react-responsive-carousel';

import Navbar from "../../1.Navbar";
import AltriProgetti from "../../AltriProgetti";
import MailInLinea from "../../MailInLinea";

import janayCopertina from '../../../img/Progetti/Janay/Presentazione IG Janay/Img Instagram/1.Janay.png';
import janayCruscotto from '../../../img/Progetti/Janay/Presentazione IG Janay/Img Instagram/2.Dashboard Janay.png';
import janaySezioni from '../../../img/Progetti/Janay/Presentazione IG Janay/Img Instagram/3.SetChatScadBackup.png';
import janayArchitettura from '../../../img/Progetti/Janay/Presentazione IG Janay/Img Instagram/4.ArchitetturaB.png';
import janayCopertinaOrizzontale from '../../../img/Progetti/Janay/sito-1-janay.png';
import janayCruscottoOrizzontale from '../../../img/Progetti/Janay/sito-2-dashboard.png';
import janaySezioniOrizzontale from '../../../img/Progetti/Janay/sito-3-calendario-chat-scadenze-backup.png';
import janayArchitetturaOrizzontale from '../../../img/Progetti/Janay/sito-4-architettura.png';
import janayBanner from '../../../img/Progetti/Janay/sito-0-banner.svg';

import { FaShareAlt, FaPaypal } from "react-icons/fa";
import CopyToClipboard from 'react-copy-to-clipboard';

// Carosello: "verticale" (1080x1350) per telefono e tablet, "orizzontale" (1920x1080) per computer.
// Se una versione orizzontale manca (null), si usa la verticale ovunque.
const SCHERMO_COMPUTER = '(min-width: 1026px)'; // da 1026px in su il carosello è un riquadro 16:9 (vedi .vlecvi-carousel in App.css)

const slideJanay = [
  { verticale: janayCopertina, orizzontale: janayCopertinaOrizzontale, alt: "Janay, copertina con il nome al centro di un quadrante circolare" },
  { verticale: janayCruscotto, orizzontale: janayCruscottoOrizzontale, alt: "Il cruscotto di Janay in modalità demo: quadrante a 24 ore al centro, impegni di oggi a sinistra, task scaduti e prossimi giorni a destra" },
  { verticale: janaySezioni, orizzontale: janaySezioniOrizzontale, alt: "Altre sezioni del cruscotto in modalità demo: la settimana, la chat, le scadenze e lo stato del sistema" },
  { verticale: janayArchitettura, orizzontale: janayArchitetturaOrizzontale, alt: "Schema dell'architettura: telefono e PC sulla rete privata, servizio dei dati, Janay e Notion come memoria del sistema" },
];


// ---------------- Contenuti delle tabelle (bozza del PDF "contenuti-sito-janay", novembre 2026) ----------------

// 2 · Come è costruito
const pezziSistema = [
  ["Server (VPS)", "Un piccolo computer Linux in affitto, sempre acceso, su OVHcloud. Qui vive tutto."],
  ["Hermes Agent", "Il programma open source che dà a Janay la capacità di agire e ricordare. Per ragionare usa Claude, tramite il mio abbonamento."],
  ["Telegram", "Il canale di conversazione: messaggi di testo e vocali, da telefono e da PC."],
  ["Notion", "La memoria ordinata: task, to-do, scadenze, abbonamenti e il profilo che Janay legge per conoscermi."],
  ["Google Calendar", "L'agenda, divisa in calendari «a blocchi» (lavoro, sport, famiglia, ecc.). Il colore degli eventi dice se sono fatti."],
  ["Cruscotto", "Una pagina web sola, senza librerie esterne, più un piccolo servizio in Python che legge le fonti e le serve alla pagina."],
  ["Tailscale", "Una rete privata tra i miei dispositivi e il server: il cruscotto non è mai su Internet."],
  ["Voce in locale", "I vocali vengono trascritti sul server, con un vocabolario mio (nomi e termini) che corregge gli errori ricorrenti. L'audio non viene inviato a nessuno."],
  ["Automazioni", "Compiti pianificati: il buongiorno, i promemoria, la revisione settimanale, il controllo di salute del sistema."],
];

// 3 · Sicurezza e regole
const misureSicurezza = [
  ["Rete privata", "Il cruscotto risponde solo dentro la mia rete Tailscale. Dall'esterno non esiste."],
  ["Servizio chiuso in casa", "Il servizio ascolta solo sul server stesso; la rete privata fa da porta."],
  ["Chat con strumenti ristretti", "La chat del cruscotto può usare un elenco corto di strumenti. Test fisso dopo ogni aggiornamento: se le chiedo un comando da terminale, deve rifiutare."],
  ["Scritture minime", "Il servizio modifica una sola proprietà (colore o stato), mai il resto della pagina o dell'evento."],
  ["Difesa contro richieste esterne", "Le richieste di modifica sono accettate solo se partono dalla pagina stessa."],
  ["Limiti giornalieri", "Un tetto al numero di chat, vocali, colori e stati al giorno: un errore non può diventare una valanga."],
  ["Registro e Annulla", "Ogni modifica è scritta in un registro separato e si può disfare."],
  ["Dati vecchi si vedono", "Se una fonte non risponde, la pagina lo dice invece di mostrare numeri vecchi come se fossero freschi."],
  ["Chiavi fuori dal codice", "Token e password stanno in file riservati sul server, mai nel codice né nella guida."],
  ["Backup e aggiornamenti", "Copie periodiche verificate, aggiornamenti controllati uno alla volta, con il modo di tornare indietro."],
];

// 5 · Cosa trovi nella guida
// Le tre parti della guida (stessa tabella di pagina 7 del PDF)
const partiGuida = [
  ["1. La base (capitoli 1-9)", "PC, server, sicurezza, Hermes, Claude, Telegram, regole, carattere e memoria, manutenzione", "Sempre, in ordine"],
  ["2. I moduli (M1-M10)", "Voce, Gemini, dashboard di Hermes, Notion, Google Calendar, Google Drive, GitHub, posta del mattino, automazioni, cruscotto", "Solo quelli che vuoi"],
  ["3. Sicurezza e aiuto", "Sicurezza continua, cosa fare se un computer si infetta (precauzione generale, non legata al progetto), dove sta cosa, ripartire da zero, problemi comuni, checklist finale", "Da consultare"],
];

// Link al mini-progetto Notion (pagina /notion), con il template base gratuito
const LinkTemplateNotion = () => (
  <Link to="/notion">mini-progetto su Notion</Link>
);


const Janay = () => {
  const pageLink = window.location.href;
  const [isLinkCopied, setLinkCopied] = useState(false);

  const handleCopyLink = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000); // Resetta il messaggio dopo 2 secondi
  };


  return (
    <div className="paginaJanay">
      <Navbar />

      <Row>
        <Col className="bordoColonnaExcel" md={2} >
          <div className='sticky-top'>

            <h1 className='vertical-rl sticky-top '>Janay</h1>

          </div>
        </Col>
        <Col>

          <img className="fotoVlecviBot" src={janayBanner} alt="" />

          <p className="titolo3Blog">JANAY - SEGRETARIO AI PERSONALE</p>

          <div className="cardt cardt--featured ">
            <div className="cardt__side-by-side--m-vlecvi ">
              <div className="cardt__image ">
                <Carousel className="vlecvi-carousel" showThumbs={false} infiniteLoop showArrows={false} autoPlay={true} stopOnHover={true} interval={4000}>
                  {slideJanay.map((slide) => (
                    <picture key={slide.alt}>
                      {slide.orizzontale && <source media={SCHERMO_COMPUTER} srcSet={slide.orizzontale} />}
                      <img src={slide.verticale} alt={slide.alt} />
                    </picture>
                  ))}
                </Carousel>
              </div>
              {/* Fuori da .cardt__image: quel contenitore è flex in riga e la metterebbe accanto al carosello */}
              <p className="didascaliaJanay">Immagini in modalità demo: dati inventati, nessun dato reale.</p>

              {/* ---------------- 1 · PANORAMICA ---------------- */}
              <p className="titoloBlog">PANORAMICA</p>
              <div className="cardt__content paddingt-large--2">
                <h4>Janay, il mio segretario AI</h4>
                <p><em>Un assistente personale che conosce i miei impegni e me li mette davanti.</em></p>

                <p>Quando nel 2008 uscì Iron Man rimasi incantato da Jarvis, l'assistente virtuale di Tony Stark.</p>
                <p>Per anni è rimasta fantascienza e il sogno di chi è cresciuto con quel film. Oggi, però, con l'avvento dell'intelligenza artificiale anche un sogno che sembrava impossibile sta diventando piano piano reale.</p>
                <p>Dopo mesi di lavoro, errori e tentativi sono riuscito a costruirne uno tutto mio: Janay. Mi aiuta a capire gli impegni della giornata, ad anticiparmi i task del giorno dopo, occupandosi a 360° di calendario, scadenze e abbonamenti, tutto da una dashboard consultabile da PC/telefono, per avere sempre tutto a colpo d'occhio.</p>
                <p>Ovviamente non si muove in totale libertà ma segue, al momento, regole decise da me, che gli permettono di fare determinate cose e di fermarsi su altre se non con il mio permesso.</p>

                <h5>In pratica, ogni giorno</h5>
                <ul>
                  <li>Al mattino un messaggio su Telegram con la giornata e le cose da non dimenticare.</li>
                  <li>La sera mi anticipa i task del giorno dopo.</li>
                  <li>Il cruscotto mostra le 24 ore: cosa è fatto, cosa è a metà, cosa è rimasto indietro.</li>
                  <li>Posso scrivergli o mandargli un vocale, come a una persona.</li>
                </ul>
              </div>

              {/* ---------------- 2 · COME È COSTRUITO ---------------- */}
              <p className="titoloBlog">COME È COSTRUITO</p>
              <div className="cardt__content paddingt-large--2">
                <h4>Pochi pezzi, tutti miei</h4>
                <p><em>Un server, un cervello, un canale di chat e una pagina web. Nient'altro.</em></p>

                <div className="table-responsive">
                  <table className="table tabellaJanay">
                    <thead>
                      <tr><th scope="col">Pezzo</th><th scope="col">Cosa fa</th></tr>
                    </thead>
                    <tbody>
                      {pezziSistema.map(([pezzo, descrizione]) => (
                        <tr key={pezzo}><th scope="row">{pezzo}</th><td>{descrizione}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h5>Cosa mostra il cruscotto</h5>
                <ul>
                  <li><strong>Oggi</strong>: un cerchio di 24 ore con gli impegni colorati per stato.</li>
                  <li><strong>Da segnare</strong>: gli impegni finiti che aspettano un esito (fatto, a metà, non fatto).</li>
                  <li><strong>Scaduti</strong>: task, to-do ed eventi rimasti indietro.</li>
                  <li><strong>La settimana</strong>, con task e to-do miei e della famiglia. Il pulsante di stato ha lo stesso colore che ha in Notion.</li>
                  <li><strong>Sistema</strong>: aggiornamenti, backup e salute del server, su una riga.</li>
                </ul>
              </div>

              {/* ---------------- 3 · SICUREZZA E REGOLE ---------------- */}
              <p className="titoloBlog">SICUREZZA E REGOLE</p>
              <div className="cardt__content paddingt-large--2">
                <h4>Fidarsi, ma con i paletti</h4>
                <p><em>Janay ha accesso a cose personali. Per questo l'ho costruito per fare poco e farlo in modo controllabile.</em></p>

                <div className="table-responsive">
                  <table className="table tabellaJanay">
                    <thead>
                      <tr><th scope="col">Cosa legge</th><th scope="col">Cosa scrive</th><th scope="col">Cosa non fa mai</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Calendario, Notion (task, to-do, scadenze, abbonamenti), meteo, stato del sistema.</td>
                        <td>Il colore degli eventi nel calendario e lo stato di task e to-do in Notion, solo quando lo decido io dal cruscotto. Ogni cambio finisce in un registro e si può annullare.</td>
                        <td>Non cancella nulla. Non agisce su calendario, Notion o messaggi senza che io dica sì. Non ha un terminale a disposizione dalla chat.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h5>Le misure, una per una</h5>
                <div className="table-responsive">
                  <table className="table tabellaJanay">
                    <thead>
                      <tr><th scope="col">Misura</th><th scope="col">Come funziona</th></tr>
                    </thead>
                    <tbody>
                      {misureSicurezza.map(([misura, descrizione]) => (
                        <tr key={misura}><th scope="row">{misura}</th><td>{descrizione}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="notaJanay">
                  <strong>Nessun sistema è «sicuro e basta».</strong> Le richieste a Claude passano comunque dall'infrastruttura di Anthropic, e Notion e Google conservano i dati dove li conservano. Janay non cambia questo: lo rende visibile e limitato.
                </p>
              </div>

              {/* ---------------- 4 · COSA SERVE PER RIFARLO ---------------- */}
              <p className="titoloBlog">COSA SERVE PER RIFARLO</p>
              <div className="cardt__content paddingt-large--2">
                <h4>Requisiti e competenze</h4>
                <p><em>Non serve essere programmatori. Serve saper usare un terminale, muoversi tra più applicazioni e avere pazienza.</em></p>

                <div className="table-responsive">
                  <table className="table tabellaJanay">
                    <thead>
                      <tr><th scope="col">Cosa</th><th scope="col">Perché</th><th scope="col">Costo / tempo</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Uso del terminale</th><td>Si lavora da terminale: lanciare comandi, leggere cosa rispondono e capire cosa fare se qualcosa va storto. La guida spiega ogni comando.</td><td>Gratis</td></tr>
                      <tr><th scope="row">Abbonamento a Claude</th><td>È il cervello di Janay. Serve un piano che permetta l'uso previsto dalla guida.</td><td>Mensile: vedi i piani sul sito di Anthropic</td></tr>
                      <tr><th scope="row">Un server (VPS)</th><td>Il computer sempre acceso dove vive Janay. Io uso OVHcloud.</td><td>Canone mensile: vedi il listino del provider</td></tr>
                      <tr><th scope="row">Un PC</th><td>Per collegarti al server e seguire la guida (Windows, Mac o Linux).</td><td>Quello che hai</td></tr>
                      <tr><th scope="row">Telegram</th><td>Il canale di chat.</td><td>Gratis</td></tr>
                      <tr>
                        <th scope="row">Notion e Google Calendar</th>
                        <td>Le fonti dei dati. Si può partire anche solo da una delle due. Se parti da zero con Notion, nel mio <LinkTemplateNotion /> trovi già un template base gratuito da duplicare nel tuo account.</td>
                        <td>Gli account gratuiti bastano per iniziare</td>
                      </tr>
                      <tr><th scope="row">Tailscale</th><td>La rete privata per il cruscotto.</td><td>Esiste un piano gratuito per uso personale</td></tr>
                      <tr><th scope="row">Tempo</th><td>Non è un'installazione da dieci minuti. Per me sono stati mesi, con tentativi ed errori; con la guida in mano il percorso è molto più corto.</td><td>Da una a due serate per la base, più i moduli che scegli</td></tr>
                    </tbody>
                  </table>
                </div>

                <h5>Limiti e avvertenze</h5>
                <ul>
                  <li><strong>Non è un prodotto.</strong> È il mio setup, descritto passo passo. L'assistenza non è compresa e non posso garantire che funzioni uguale sul tuo.</li>
                  <li><strong>Le cose cambiano.</strong> Hermes, i piani degli abbonamenti e le API si aggiornano. La guida è aggiornata a novembre 2026 e potrebbe invecchiare.</li>
                  <li><strong>I costi sono ricorrenti</strong> (server e abbonamento), non una tantum.</li>
                  <li><strong>I dati sono tuoi, e anche la responsabilità.</strong> Leggi le condizioni dei servizi che colleghi.</li>
                  <li><strong>Non è una consulenza</strong> di sicurezza, legale o fiscale.</li>
                  <li><strong>Fatto con Claude.</strong> Le scelte e le regole sono mie; il codice l'ho scritto insieme a Claude.</li>
                </ul>
              </div>

              {/* ---------------- 5 · COSA TROVI NELLA GUIDA ---------------- */}
              <p className="titoloBlog">COSA TROVI NELLA GUIDA</p>
              <div className="cardt__content paddingt-large--2">
                <h4>Una base e dieci moduli</h4>
                <p><em>«Il tuo segretario AI personale», edizione di novembre 2026. Ogni passo dice dove lanciare il comando (PC o server), cosa deve uscire e come tornare indietro.</em></p>

                <div className="table-responsive">
                  <table className="table tabellaJanay">
                    <thead>
                      <tr><th scope="col">Parte</th><th scope="col">Cosa contiene</th><th scope="col">Quando</th></tr>
                    </thead>
                    <tbody>
                      {partiGuida.map(([parte, contenuto, quando]) => (
                        <tr key={parte}><th scope="row">{parte}</th><td>{contenuto}</td><td>{quando}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Anteprima scaricabile: il PDF va messo in public\janay-anteprima.pdf */}
                <p className="mt-3">
                  Vuoi farti un'idea prima di richiederla? Qui trovi un'anteprima gratuita con l'introduzione e i primi due capitoli:
                  com'è impaginata, come sono spiegati i passi e che livello di dettaglio aspettarti.
                </p>
                <a
                  href={`${process.env.PUBLIC_URL}/janay-anteprima.pdf`}
                  download
                  className="buttonRadius btn btn-dark btn-sm"
                >
                  Scarica l'anteprima (PDF)
                </a>
              </div>

              {/* ---------------- 6 · COME AVERE LA GUIDA (strada B: gratis + invito a donare) ---------------- */}
              <p className="titoloBlog">COME AVERE LA GUIDA</p>
              <div className="cardt__content paddingt-large--2">
                <p>
                  La guida è gratuita. Scrivimi a <MailInLinea /> oppure clicca qui per vedere gli altri modi per contattarmi:{' '}
                  <Link to="/contatti" className='buttonRadius btn btn-dark btn-sm'>Contatti</Link>
                </p>
                <p>La guida, in PDF, non comprende il mio supporto. Se ti serve una mano a seguirla, o vuoi capire se posso costruire da zero un sistema simile per te, scrivimi: ne parliamo in privato.</p>
                <p>Creare questa guida mi ha richiesto mesi di lavoro. Se ti è utile, mi farebbe piacere che quello sforzo diventasse qualcosa di buono: il modo migliore è fare una donazione, anche solo di 1€, a un progetto che ti sta a cuore.</p>
                <p>Se invece preferisci sostenere direttamente me, puoi farlo con il pulsante PayPal che trovi in fondo alla pagina.</p>
              </div>

              <p className="titoloBlog">DOMANDE FREQUENTI</p>
              <div className="cardt__content paddingt-large--2">
                <h5>Serve saper programmare?</h5>
                <p>Non serve essere programmatori, ma non basta nemmeno copiare e incollare. Bisogna saper usare un terminale: lanciare un comando, leggere cosa risponde e capire cosa fare quando qualcosa va storto. E bisogna sapersi muovere tra le varie applicazioni coinvolte: il server, Telegram, Notion, Google e i pannelli dei servizi che colleghi.</p>
                <p>La guida spiega ogni passo e dice cosa deve uscire, ma la pazienza e un po' di dimestichezza le devi mettere tu.</p>

                <h5>Quanto costa tenerlo acceso?</h5>
                <p>Un server in affitto e l'abbonamento a Claude, entrambi mensili. Le cifre cambiano: controlla i listini aggiornati prima di partire.</p>

                <h5>Chi vede i miei dati?</h5>
                <p>Il cruscotto e il server sono tuoi, in rete privata. Le conversazioni con Claude passano dall'infrastruttura di Anthropic; Notion e Google tengono i dati dove li tengono già. Nessuno di questi pezzi lo aggiungo io.</p>

                <h5>E se qualcosa si rompe?</h5>
                <p>La guida ha una parte «Se qualcosa non va» con i problemi che ho incontrato davvero, e una fase per ripartire da zero. Il mio supporto non è compreso nella guida: se ti serve, scrivimi e ne parliamo in privato.</p>

                <h5>Posso usarlo senza Notion o senza Google Calendar?</h5>
                <p>Sì, il sistema è fatto a pezzi: parti da quello che usi già. Il cruscotto della guida però è pensato per il mio setup, quindi alcune parti vanno adattate. Se vuoi iniziare con Notion, nel mio <LinkTemplateNotion /> trovi un template base gratuito da duplicare nel tuo account.</p>

                <h5>Janay può fare cose senza chiedermelo?</h5>
                <p>Solo quelle che decidi tu. Su tutto il resto si ferma e aspetta il tuo permesso.</p>

                <p>A presto!</p>
                <p>Vle</p>
              </div>
            </div>
          </div>
        </Col>

      </Row>

      <div className="link-bar1">
        <CopyToClipboard text={pageLink} onCopy={handleCopyLink}>
          <span className="support-text" style={{ cursor: 'pointer' }}>CONDIVIDI ARTICOLO: <FaShareAlt /></span>
        </CopyToClipboard>
        {isLinkCopied && (
          <div className="toastCopiato" role="status" aria-live="polite">
            Link copiato negli appunti
          </div>
        )}

        <span className="support-text support-container">PER SUPPORTARMI:

          <form action="https://paypal.me/acalasanzio?locale.x=it_IT&country.x=IT" method="post" target="_top">
            <input type="hidden" name="business" value="TUM7KNN6PNHDS" />
            <input type="hidden" name="no_recurring" value="0" />
            <input type="hidden" name="item_name" value="Dona pure con Paypal se l'articolo di questo Blog ti è piaciuto e mi vuoi sostenere :)" />
            <input type="hidden" name="currency_code" value="EUR" />

            {/* Pulsante di donazione di PayPal */}
            <button type="submit" name="submit" className="paypal-button" title="PayPal - The safer, easier way to pay online!" aria-label="Donate with PayPal">
              <FaPaypal color="#0070BA" size="1.4em" />
            </button>
          </form>

        </span>

      </div>

      <AltriProgetti />

    </div>
  )
}

export default Janay;
