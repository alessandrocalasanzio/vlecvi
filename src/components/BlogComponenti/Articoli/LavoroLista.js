import Navbar from '../../1.Navbar';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Giscus from '@giscus/react';

import BlogFiltro from '../BlogFiltro';


import { FaCog, FaHeart } from 'react-icons/fa';  // Esempio di importazione di icone
import { FaShareAlt } from "react-icons/fa";
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaPaypal } from 'react-icons/fa'; // Importa l'icona PayPal da react-icons


import { Fade } from 'react-reveal';

const LavoroLista = () => {
    const pageLink = window.location.href;
    const [isLinkCopied, setLinkCopied] = useState(false);
  
    const handleCopyLink = () => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000); // Resetta il messaggio dopo 2 secondi
    };
    

    const [filter, setFilter] = useState('Lavoro');
    const [isButtonClicked, setIsButtonClicked] = useState(false);


    const handleFilterChange = (newFilter) => {
      setFilter(newFilter);


    };
  
    const lavoroItems = [
/*----------------------------------------LAVORO-------------------------------------------------------*/

    {
        title: "LINKEDIN",
        link: "https://it.linkedin.com/",
        descrizione: "Il sito o per meglio dire il social network più famoso dove trovare lavoro.",
        category: "Lavoro",
        titolo: "LAVORO"
    },
    {
        title: "INDEED",
        link: "https://it.indeed.com/",
        descrizione: "Motore di ricerca che raccoglie annunci di lavoro da migliaia di siti web.",
        category: "Lavoro"
    },
    {
        title: "INFOJOBS",
        link: "https://www.monster.it/",
        descrizione: "Digital Company n. 1 in Italia per la ricerca di lavoro online",
        category: "Lavoro"
    },
    {
        title: "MONSTER",
        link: "https://www.infojobs.it/",
        descrizione: "Agglomerato di annunci di lavoro simile ad Indeed.",
        category: "Lavoro"
    },
    {
        title: "JOULE FOR TALENTS",
        link: "https://www.joule.video/",
        descrizione: "Joule è il servizio che rivoluziona il contatto fra talenti e recruiter nella fase di ricerca di un impiego",
        category: "Lavoro"
    },
    {
        title: "TROVOLAVORO(CORRIERE)",
        link: "https://lavoro.corriere.it/",
        descrizione: "Sito del corriere della Sera, per trovare lavoro. All'interno annunci che di solito sugli altri motori di ricerca non compaiono.",
        category: "Lavoro"
    },
    {
        title: "PROFIL CULTURA",
        link: "https://www.profilcultura.it/",
        descrizione: "Sito particolare per chi cerca lavoro in ambito Cultura e dei media.",
        category: "Lavoro"
    },
    {
        title: "WE CAN JOB",
        link: "https://www.wecanjob.it/",
        descrizione: "Portale di orientamento per la formazione/professione. Sito aggiornato sui bandi e sulla grandi catene che cercano risorse lavorative.",
        category: "Lavoro"
    },
    {
        title: "I PROGRAMMATORI",
        link: "https://www.iprogrammatori.it/",
        descrizione: "Sito specifico per chi cerca lavoro in ambito informatico.",
        category: "Lavoro"
    },
    {
        title: "REMOTE OK",
        link: "https://remoteok.com/",
        descrizione: "Sito specifico per chi cerca lavoro in ambito informatico. Il sito è in inglese ma racchiude la ricerca a livello mondiale.",
        category: "Lavoro"
    },
    {
        title: "LAVORO PA",
        link: "https://www.inpa.gov.it/",
        descrizione: "Sito che racchiude tutti i bandi per chi voglia provare a lavorare nella pubblica amministrazione.",
        category: "Lavoro"
    },
    
/*----------------------------------------CORSI-------------------------------------------------------*/

    {
        title: "IL TEMPO RITROVATO",
        link: "https://www.iltemporitrovato.org/",
        descrizione: "Corsi sia digitali, sia fisici che toccano le principali città italiane.",
        category: "CorsiFisici",
        titolo: "CORSI FISICI"
    },

    {
        title: "EMIT FELTRINELLI",
        link: "https://www.emitfeltrinelli.it/",
        descrizione: "Fondazione senza scopo di lucro che propone corsi per la formazione delle persone in azienda e nella vita professionale privata.",
        category: "CorsiFisici"
    },
    {
        title: "FONDAZIONE CLERICI",
        link: "https://www.clerici.lombardia.it/2.0/",
        descrizione: "Fondazione che collabora con soggetti istituzionali, enti pubblici e privati per proporre corsi diretti all'inserito nel mondo del lavoro.",
        category: "CorsiFisici"
    },
    {
        title: "AFOL BRIANZA",
        link: "https://afolmonzabrianza.it/",
        descrizione: "Afol Monza e Brianza",
        category: "CorsiFisici"
    },
    {
        title: "ACCADEMIA ARTISTI",
        link: "https://www.accademiartisti.com/",
        descrizione: "Accademia di  riferimento per la formazione e specializzazione nell’ambito della recitazione, del canto e del doppiaggio.",
        category: "CorsiFisici"
    },
    {
        title: "DIGITAL BROS GAME ACADEMY",
        link: "https://dbgameacademy.it/",
        descrizione: "Centro di formazione internazionale per chi vuole imparare a sviluppare  videogiochi",
        category: "CorsiFisici"
    },

/*---------------------------------------------CORSI DIGITALI---------------------------------------------------*/
{
  title: "DOCETY",
  link: "https://www.docety.com/",
  descrizione: "Corsi digitali e possibilità formazione 1 to 1.",
  category: "CorsiDigitali",
  titolo: "CORSI DIGITALI"
},
{
  title: "UDEMY",
  link: "https://www.udemy.com/",
  descrizione: "Uno dei siti più rinomati dove è possibile trovare corsi per iniziare a studiare vari argomenti è Udemy.",
  category: "CorsiDigitali"
},
{
  title: "LACERBA",
  link: "https://lacerba.io/",
  descrizione: "Sito simile a Udemy per l'acquisto di corsi digitale per imparare nuove competenze.",
  category: "CorsiDigitali"
},
{
  title: "START 2 IMPACT",
  link: "https://www.start2impact.it/",
  descrizione: "Una dei migliori progetti se vuoi imparare skill in ambito digitale.",
  category: "CorsiDigitali"
},
{
  title: "DIGITAL DEFYND",
  link: "https://www.start2impact.it/",
  descrizione: "Uno dei migliori siti per trovare corsi su qualsiasi cosa. Anche corsi gratis.",
  category: "CorsiDigitali"
},
{
        title: "CODE",
        link: "https://code.org/students",
        descrizione: "Corsi gratuiti per chi vuole imparare le basi dell'informatica.",
        category: "CorsiDigitali"
    },
    {
      title: "W3SCHOOLS",
      link: "https://www.w3schools.com/",
      descrizione: "Uno dei migliori siti per imparare l'ABC della programmazione.",
      category: "CorsiDigitali"
  },
  {
    title: "FREE CODE CAMP",
    link: "https://www.freecodecamp.org/",
    descrizione: "Ottimo sito per imparare la programmazione e ottenere certificati da spendere nel mondo del lavoro.",
    category: "CorsiDigitali"
},
{
  title: "PROGRAMIZ",
  link: "https://www.programiz.com/",
  descrizione: "Sito completo dove trovare Corsi e tutorial nell'ambito della programmazione.",
  category: "CorsiDigitali"
},
{
  title: "GEEKS FOR GEEKS",
  link: "https://www.geeksforgeeks.org/",
  descrizione: "Altro Sito completo dove trovare Corsi e tutorial nell'ambito della programmazione.",
  category: "CorsiDigitali"
},
{
  title: "STUDY TONIGHT",
  link: "https://www.studytonight.com/",
  descrizione: "Sito contenente sia corsi gratuiti sia a pagamento sulle basi dell'informatica.",
  category: "CorsiDigitali"
},
{
  title: "JAVAT POINT",
  link: "https://www.javatpoint.com/",
  descrizione: "Archivio esauriente contenente esempi e tutorial sui vari linguaggi di programmazione. ",
  category: "CorsiDigitali"
},
{
  title: "CODEWARS",
  link: "https://www.codewars.com/",
  descrizione: "Sito molto utile per affinare le proprie skill sulla programmazione con vari livelli di sfida.",
  category: "CorsiDigitali"
},

    ];
  
    const filteredItems = filter === 'All' ? lavoroItems : lavoroItems.filter(item => item.category === filter);
  
    return (
      <div>
        <Navbar/>
        <div className='testoweblist'>
        <p> Ho deciso con questo articolo di creare una sorta di raccoglitore/archivio di tutti i siti Web che trovo utili o che ho trovato interessanti, dividendoli per categorie.</p>
      
      <p> L'articolo sarà in continuo aggiornamento.</p>
        </div>
          <div id="myBtnContainer" className={isButtonClicked}>
         
          <button
                onClick={() => handleFilterChange('Lavoro')}
                className={`btnBlog ${filter === 'Lavoro' ? 'active' : ''}`}
              >
               Lavoro
              </button>

              <button
  className= "btnBlog dropdown-toggle"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
              Corsi
              </button>
              <div className="dropdown-menu">
<a onClick={() => handleFilterChange('CorsiFisici')} className={`dropdown-item btnBlog ${filter === 'CorsiFisici' ? 'active' : ''}`}>CORSI FISICI</a>
<a onClick={() => handleFilterChange('CorsiDigitali')} className={`dropdown-item btnBlog ${filter === 'CorsiDigitali' ? 'active' : ''}`}>CORSI DIGITALI</a>
            </div>


                </div>
                
        <Container fluid className="bordiContainerBlog">
            
          <Row>
           
            <Col id="ColHover" className="bordoColonna" md={2}>
              <Link to="/lavoro">
              <a>
      <h1 className='vertical-rl'>
        {filter === 'all' ? 'Lavoro' : filteredItems.map((item, index) => (
          <div key={index}>
            {item.titolo}
          </div>
        ))}
      </h1>
    </a>
              </Link>
            </Col>
  
       
           
  
  
              <Col className='thumb'>
              <div className="list-group justify-content-center">
  {filteredItems.map((item, index) => (
    <div key={index} className="list-group-item list-group-item-action hoverBlog">
      {item.component}
      <div className="d-flex1 w-100 justify-content-between ">
        {/* Aggiungi un link intorno al titolo */}
        <Link to={item.link}>
        <h5  className="mb-1">{item.title}</h5>
        </Link>

        <small className="text-muted1">{item.descrizione}</small>
      </div>
      <div>
      
      </div>
     
    </div>
        
    
  ))}

</div>

            </Col>
          
          </Row>
          <div className="link-bar">
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
          <input type="image" className="paypal-button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/887px-PayPal_Logo_Icon_2014.svg.png"  color="black" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        </form>
      
     </span>

    </div>

         <Row>
        


  </Row>

          <p className="titolo1Blog">ALTRI ARTICOLI DEL BLOG:</p>

<BlogFiltro />
        </Container>


    </div>
    
    

    );
}

export default LavoroLista;