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

const WebList = () => {
    const pageLink = window.location.href;
    const [isLinkCopied, setLinkCopied] = useState(false);
  
    const handleCopyLink = () => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000); // Resetta il messaggio dopo 2 secondi
    };
    

    const [filter, setFilter] = useState('Torrent');
    const [isButtonClicked, setIsButtonClicked] = useState(false);


    const handleFilterChange = (newFilter) => {
      setFilter(newFilter);

  

    };
  
    const blogItems = [
/*----------------------------------------TORRENT-------------------------------------------------------*/

{
    title: "1337X",
    link: "https://1337xto.to/",
    descrizione: "Altro dove trovare TORRENT di diverso tipo: Musica, Film e videgiochi.",
    category: "Torrent",
    titolo: "TORRENT"
  },
  {
    title: "EUREKA DDL",
    link: "https://eurekaddl.homes/",
    descrizione: "Sito dove trovare torrent di prodotti principalmente in italiano.",
    category: "Torrent"
  },
  {
    title: "PIRATE BAY",
    link: "https://www.pirateproxy.space//",
    descrizione: "Uno dei siti più famosi dove trovare TORRENT di diverso tipo: Musica, Film e videogiocchi.",
    category: "Torrent"
  },
  {
    title: "RAR BG",
    link: "https://www.foodspring.it/",
    descrizione: "Sito dove trovare torrent più che altro di film.",
    category: "Torrent"
  },
/*-----------------------------------BLOG INFORMATICI-----------------------------------------------------*/


{
    title: "3BEE",
    link: "https://www.3bee.com/",
    descrizione: "Sito di divulgazione informatica in merito al tema della protezione delle api: Insetti fondamentali per il nostro ecosistema.",
    category: "BlogInformatici",
    titolo: "BLOG INFORMATICI"
  },
  {
    title: "ANDREA GALEAZZI",
    link: "https://andreagaleazzi.com/",
    descrizione: "SITO DI \"ANDREA GALEAZZI\"",
    category: "BlogInformatici"
    
  },
  {
    title: "HD BLOG",
    link: "https://www.hdblog.it/",
    descrizione: "Sito HD BLOG",
    category: "BlogInformatici"
  },
  {
    title: "MR.RIP",
    link: "https://retireinprogress.com/",
    descrizione: "Blog molto interessante di un ingegnere informatico che parla dei suoi investimenti finanziari e di come ha fatto ad arrivare ai suoi traguardi.",
    category: "BlogInformatici"
  },
  {
    title: "NFT MAGAZINE",
    link: "https://nftmagazine.com/",
    descrizione: "Blog incentrato su NFT e Crypto per rimanere aggiornato su quello che succede intorno a questo mondo.",
    category: "BlogInformatici"
  },
  {
    title: "TECHZILLA",
    link: "https://www.techzilla.it/",
    descrizione: "Sito della TECHZILLA",
    category: "BlogInformatici"
  },
  {
    title: "TOM'S HARDWARE",
    link: "https://www.tomshw.it/",
    descrizione: "Sito della TOM'S HARDWARE",
    category: "BlogInformatici"
  },

/*----------------------------------------SIC. INFORMATICA-------------------------------------------------------*/


{
    title: "HAVE I BEEN PWNED",
    link: "https://haveibeenpwned.com/",
    descrizione: "Sito in cui puoi controllare se la tua mail o il tuo telefono sono in una violazione di dati",
    category: 'Sicurezza',
    titolo: "SICUREZZA"
  },
  {
    title: "NAME CHK",
    link: "https://namechk.com/",
    descrizione: "Con Namechk puoi verificare la disponibilità di un nome utente o di un nome di dominio in pochi secondi in modo sicuro.",
    category: 'Sicurezza'
  },
  {
    title: "PASSWORD",
    link: "https://www.howgoodismypassword.co.uk/",
    descrizione: "Sito per vedere quanto è forte la tua password.",
    category: 'Sicurezza'
  },
  {
    title: "SAY MINE",
    link: "https://www.saymine.com/",
    descrizione: "Sito che ti consente di scoprire dove si trovano i tuoi dati personali e di ridurre la tua esposizione online per ridurre al minimo i rischi digitali.",
    category: 'Sicurezza'
  },
  {
    title: "TEMP MAIL",
    link: "https://woopcase.com/it",
    descrizione: "Sito dove creare mail temporanee.",
    category: 'Sicurezza'
  },
  {
    title: "UNROLL ME",
    link: "https://unroll.me/",
    descrizione: "Sito molto semplice che ti permette con un click di disiscriverti da quegli abbonamenti mail fastidiosi.",
    category: 'Sicurezza'
  },
  {
    title: "VIRUS TOTAL",
    link: "https://www.virustotal.com/gui/home/upload",
    descrizione: "Analizza file, domini, IP e URL sospetti per rilevare malware e altre violazioni, condividendoli automaticamente con la comunità della sicurezza.",
    category: 'Sicurezza'
  },

/*-----------------------------------------------------E-COMMERCE--------------------------------------*/ 
{
    title: "E-PRICE",
    link: "https://www.eprice.it/",
    descrizione: "Sito di E-PRICE",
    category: 'E-commerce',
    titolo: "E-COMMERCE"
  },
  {
    title: "PITAKA",
    link: "https://www.ipitaka.com/",
    descrizione: "Sito dove trovare accessoristica prevalentemente compatibile con Apple.",
    category: 'E-commerce'
  },
  {
    title: "TRIPPODO SHOP",
    link: "https://www.trippodo.com/it/",
    descrizione: "Sito dove trovare componentistica Hardware che in giro si fa fatica a trovare.",
    category: 'E-commerce'
  },
  {
    title: "ZAMNESIA",
    link: "https://www.zamnesia.io/it/",
    descrizione: "Sito dove comprare tutto cio che madre natura ha da offrirci.",
    category: 'E-commerce'
  },

/*----------------------------------------TASTIERE-------------------------------------------------------*/

{
    title: "CANDY KEYS",
    link: "https://candykeys.com/",
    descrizione: "Sito dove poter trovare mouse e tastiere di buona fattura.",
    category: 'Tastiere',
    titolo: "TASTIERE"
  },
  {
    title: "GLORIOUS GAMING",
    link: "https://www.gloriousgaming.com/products/glorious-gmmk-pro-75-barebone-black",
    descrizione: "Sito dove poter creare tastiere personalizzate (Ideali per Gamer).",
    category: 'Tastiere'
  },
  {
    title: "VARMILO",
    link: "https://en.varmilo.com/keyboardproscenium/",
    descrizione: "Uno dei siti più famosi dove poter trovare tastiere meccaniche di buona qualità.",
    category: 'Tastiere'
    
  },

/*----------------------------------------VESTITI-------------------------------------------------------*/
  
{
    title: "TUTTE LE MARCHE",
    link: "https://www.stylight.it/Brands/",
    descrizione: "Sito che racchiude le più famose marche d'abbigliamento.",
    category: "Vestiti",
    titolo: "VESTITI"

},
/*----------------------------------------OROLOGI-------------------------------------------------------*/

{
    title: "CIGA DESIGN",
    link: "https://www.indiegogo.com/projects/ciga-design-x-series-titanium-mechanical-watch?utm_medium=cpc&utm_source=google&utm_campaign=8486171243&utm_content=404868780395_c_&utm_term=ciga%20watch%20indiegogo&gclid=CjwKCAiAhbeCBhBcEiwAkv2cY5MdrucABADkA-15ZbX43BQvDxZbFTaqk22U7xxP3Zcw_FwK3FidHBoC2SEQAvD_BwE#/",
    descrizione: "Progetto lanciato su Indiegogo ora concluso. Orologio dal design davvero interessante.",
    category: "Orologi",
    titolo: "OROLOGI"
  },
  {
    title: "ELMA WATCHES",
    link: "https://elmawatches.it/?v=cd32106bcb6d",
    descrizione: "Il sito recita:\"L’orologio da polso progettato per pensatori, pensatrici ed eterni curiosi.\" A te scoprirlo.",
    category: "Orologi"
  },
  {
    title: "HOLZKERN",
    link: "https://www.holzkern.com/it/",
    descrizione: "Sito dove trovare orologi in legno.",
    category: "Orologi"
  },
  {
    title: "PAUL VALENTINE",
    link: "https://paul-valentine.com/",
    descrizione: "Sito dove trovare sia orologi interessanti che gioielli.",
    category: "Orologi"
  },
  {
    title: "RALPH CHRISTIAN",
    link: "https://ralphchristian.com/",
    descrizione: "Orologi simili alla Richard Mille ma con un prezzo decisamente più contenuto.",
    category: "Orologi"
  },
  {
    title: "SVPER",
    link: "https://www.svper11.com/",
    descrizione: "Sito dove poter trovare orologi con tematiche ispirate alla superficie lunare. Molto interessante.",
    category: "Orologi"
  },
  {
    title: "TRENDHIM",
    link: "https://www.trendhim.it/",
    descrizione: "Sito dove trovare orologi da pilota e in fibra di carbonio.",
    category: "Orologi"
  },
  {
    title: "ZAMBON WOODSTOCK",
    link: "https://woodstockzambon.com/",
    descrizione: "Sito interessante con orologi particolari.",
    category: "Orologi"
    
  },

/*----------------------------------------GIOIELLI&VESTITI PARTICOLARI-------------------------------------------------------*/

{
    title: "BITTER SWEET PARIS",
    link: "https://bittersweetparis.com/",
    descrizione: "Altro sito con felpe e maglie con stampe molto interessanti e particolari.",
    category: "VestitiParticolari",
    titolo: "VESTITI PARTICOLARI"
  },
  {
    title: "BLOWHAMMER",
    link: "https://it.blowhammer.com/",
    descrizione: "Sito con felpe con stampe molto interessanti e particolari.",
    category: "VestitiParticolari"
    
  },
  {
    title: "FOKS WEAR",
    link: "https://foksitalia.com/",
    descrizione: "Sito dove trovare pantaloni elastici (definiti come molto comodi ed eleganti).",
    category: "VestitiParticolari"
  },
  {
    title: "FRESH HOODS",
    link: "https://freshhoods.com/en-it",
    descrizione: "Sito molto interessante dove trovare felpe e maglie in stile cartoon.",
    category: "VestitiParticolari"
  },
  {
    title: "G STAR RAW",
    link: "https://bittersweetparis.com/",
    descrizione: "Sito simile ad ASOS ma con alcune chicche di nicchia.",
    category: "VestitiParticolari"
  },
  {
    title: "RIPET",
    link: "https://reypet.com/",
    descrizione: "Sito dove trovare vestiti...ma per i tuoi animali! (cane, gatto).",
    category: "VestitiParticolari"
  },
  {
    title: "SWEET STORE",
    link: "https://bittersweetparis.com/",
    descrizione: "Altro sito simile ad ASOS.",
    category: "VestitiParticolari"
  },
  {
    title: "WORN ON TV",
    link: "https://wornontv.net/",
    descrizione: "Sito fantastico dove trovare e comprare i vestiti delle star delle tue serie tv preferite.",
    category: "VestitiParticolari"
  },
  /*----------------------------------------GIOIELLI-------------------------------------------------------*/
  {
    title: "BULLET STONE",
    link: "https://www.etsy.com/it/market/bullet_stone",
    descrizione: "Sito dove poter trovare ciondoli a forma di pallottola.",
    category: "Gioielli",
    titolo: "GIOIELLI"

  },
  {
    title: "GIOVE PLUVIO",
    link: "https://www.giovepluvio.it/",
    descrizione: "Sito dove poter trovare ciondoli e collane con loghi e design a tema Mare/ Marineria.",
    category: "Gioielli"
  },
  {
    title: "LEZIFF",
    link: "https://www.leziff.com/it/",
    descrizione: "Sito dove poter trovare occhiali sia da vista che sole con montature davvero particolari.",
    category: "Gioielli"
  },
  {
    title: "NO WAVE",
    link: "https://www.nowaveofficial.com/it/",
    descrizione: "Sito dove poter trovare occhiali anti luce blu. Sito rinomato in questo ambito.",
    category: "Gioielli"
  },
  {
    title: "SALVA LE API",
    link: "https://salvaleapi.com/",
    descrizione: "Collane e anelli a tema api. Ogni acquisto contribuirà alla loro salvaguardia.",
    category: "Gioielli"
  },
  {
    title: "VITALY",
    link: "https://www.vitalydesign.eu/",
    descrizione: "Sito dove poter trovare ciondoli in acciaio inossidabile davvero ben curati.",
    category: "Gioielli"
  },
  {
    title: "X CEDEM",
    link: "https://www.xdecem.com/",
    descrizione: "Sito dove trovare anelli davvero ben curati.",
    category: "Gioielli"
  },
/*----------------------------------------VIDEOGAME-------------------------------------------------------*/


{
    title: "MOD NEXUS",
    link: "https://www.nexusmods.com/",
    descrizione: "Il miglior sito dove trovare mod per i giochi del pc.",
    category: 'Videogame',
    titolo: "VIDEOGAME"
  },
  {
    title: "OLD VIDEOGAME",
    link: "https://oldgamesdownload.com/",
    descrizione: "Uno dei migliori siti dove trovare e scaricare videogiochi degli anni 70,80,90.",
    category: 'Videogame'
  },
  {
    title: "PCSX2",
    link: "https://www.wemod.com/",
    descrizione: "Sito dove poter scaricare l'emulatore ps2 per poterci giocare direttamente su PC! (Guida inclusa nel sito)",
    category: 'Videogame'
  },
  {
    title: "PLAY TEST CLOUD",
    link: "https://www.playtestcloud.com/",
    descrizione: "Sito dove richiedere di diventare tester di videogiochi e provare a guadagnarci.",
    category: "Videogame"
  },
  {
    title: "WE MOD",
    link: "https://www.wemod.com/",
    descrizione: "Sito dove poter creare MOD a tuo piacimento dei tuoi giochi single-player preferiti.",
    category: 'Videogame'
    
  },

/*----------------------------------------TEATRO-------------------------------------------------------*/
{
    title: "TEATRO.IT",
    link: "https://www.teatro.it/",
    descrizione: "Sito dove poter consultare gli spettacoli teatrali presenti in Italia con la possibilit\u00e0 di acquistare i ticket.",
    category: "Teatro",
    titolo: "TEATRO"

},
{
    title: "TEATRO DONIZETTI",
    link: "https://www.teatrodonizetti.it/it/",
    descrizione: "Sito di uno dei teatri pi\u00f9 famosi d'Italia.",
    category: "Teatro"
},
{
    title: "TICKET ONE",
    link: "https://www.ticketone.it/",
    descrizione: "Uno dei siti pi\u00f9 famosi dove poter comprare ticket di eventi e spettacoli.",
    category: "Teatro"
},
/*----------------------------------------SOFTWARE PC-------------------------------------------------------*/

{
    title: "4 DOWNLOAD",
    link: "https://4download.net/",
    descrizione: "Un'altro Sito molto interessante dove trovare software gratis per il pc.",
    category:'SoftwarePc',
    titolo: "SOFTWARE PC"
  },
  {
    title: "ALTERNATIVE TO",
    link: "https://alternativeto.net/",
    descrizione: "Sito in cui ti vengono consigliate alternative ai programmi più comuni, consigliandoti programmi attenti alla tua privacy e sicurezza.",
    category: "SoftwarePc"
  },
  {
    title: "ALL PC WORLDS",
    link: "https://allpcworlds.com/",
    descrizione: "Sito molto interessante dove trovare software gratis per il pc.",
    category:'SoftwarePc'
  },
  {
    title: "CAPTERRA",
    link: "https://www.capterra.it/",
    descrizione: "Capterra ti aiuta a trovare il software più adatto per il tuo business",
    category:'SoftwarePc'
  },
  {
    title: "FREE SOFTWARE",
    link: "https://www.freesoftwarefiles.com/",
    descrizione: "Altro Sito molto interessante dove trovare software gratis per il pc.",
    category:'SoftwarePc'
  },
  {
    title: "NINITE",
    link: "https://ninite.com/",
    descrizione: "Questo sito ti permette di scaricare ed installare contemporaneamente sul pc tutti i programmi di cui hai bisogno senza installarli manualmente uno ad uno.",
    category: "SoftwarePc"
  },
  {
    title: "SMART SERIAL",
    link: "https://smartserials.com/",
    descrizione: "Sito che permette di generare/trovare numeri di serie per l'attivazione di software.",
    category:'SoftwarePc'
  },

/*----------------------------------------STREAMING-------------------------------------------------------*/
{
    title: "ANIME FORCE",
    link: "https://www.animeforce.it/",
    descrizione: "Altro sito dove poter trovare anime interessanti da guardare in Streaming.",
    category: "Streaming",
    titolo: "STREAMING"
  },
  {
    title: "BEST SIMILAR",
    link: "https://bestsimilar.com/",
    descrizione: "Inserisci un film all'interno del Sito. Te ne suggerirà uno simile.",
    category: "Streaming"
  },
  {
    title: "DATE NIGHT MOVIES",
    link: "https://datenightmovies.com/",
    descrizione: "Sito interessante per le coppie. Scegli due film. Li combinano per trovare film che possono piacere ad entrambi.",
    category: "Streaming"
  },
  {
    title: "DOCUMENTARI ONLINE",
    link: "http://documentari.epizy.com/index.php",
    descrizione: "Sito molto interessante dove trovare documentari.",
    category: "Streaming"
  },
  {
    title: "EDUFLIX",
    link: "https://www.eduflix.it/it",
    descrizione: "La 'Netflix' dei documentari e della cultura.",
    category: "Streaming"
  },
  {
    title: "MYFLIXER",
    link: "https://myflixer.to/home",
    descrizione: "Sito dove vedere in streaming film, anche nuovi, in modo completamente gratis.",
    category: "Streaming"
  },
  {
    title: "MY FLIXER",
    link: "https://myflixer.to/",
    descrizione: "Sito dove vedere in streaming film in lingue inglese. Presente poca pubblicità.",
    category: "Streaming"
  },
  {
    title: "NETFLIX CODES",
    link: "https://www.netflix-codes.com/",
    descrizione: "Sito interessante dove trovare i codici segreti per le categorie su netflix.",
    category: "Streaming"
    
  },
  {
    title: "PHOTOCALL",
    link: "https://photocall.tv/",
    descrizione: "Sito dove vedere canali internazionali televisivi in inglese.",
    category: "Streaming"
  },
  {
    title: "PLAY PHRASE",
    link: "https://www.playphrase.me/#/search",
    descrizione: "Digita una frase. Il sito ti troverà spezzoni di film contenenti la tua ricerca.",
    category: "Streaming"
  },
  {
    title: "SERIALLY",
    link: "https://www.serially.it/landing-page?redirectafterlogin=%2F",
    descrizione: "Sito dove vedere in streaming serie tv. Il sito promette gratis e per sempre.",
    category: "Streaming"
  },
  {
    title: "STREAMING COMMUNITY",
    link: "https://streamingcommunity.actor/",
    descrizione: "Sito dove vedere in streaming serie tv. Da quanto visto però la troppa pubblicità penalizza di molto questo sito.",
    category: "Streaming"
  },
  {
    title: "TASTE DIVE",
    link: "https://tastedive.com/",
    descrizione: "Sito molto utile per trovare suggerimenti riguardo a film, serie tv e film.",
    category: "Streaming"
  },
  {
    title: "TOGETHER PRICE",
    link: "https://www.togetherprice.com/it/",
    descrizione: "Sito molto utile per dividere il costo del tuo abbonamento insieme ad altre 4 persone. Sito molto affidabile.",
    category: "Streaming"
  },
  {
    title: "VVVVID",
    link: "https://www.vvvvid.it/show/&r",
    descrizione: "Sito legale dove poter guardare anime. (Pubblicità parecchio snervante).",
    category: "Streaming"
  },


/*----------------------------------------CD KEY-------------------------------------------------------*/
{
    title: "ALL KEY PC",
    link: "https://www.allkeyshop.com/blog/",
    descrizione: "Sito interessante dove trovare key di giochi a basso prezzo. Possibilità di confrontare più siti contemporaneamente.",
    category: "CdKey",
    titolo: "CD KEY"
  },
  {
    title: "G2A",
    link: "https://www.g2a.com/it/",
    descrizione: "Un altro sito dove trovare key. (Rispetto agli altri siti un po' meno organizzato).",
    category: "CdKey"
  },
  {
    title: "HRK GAME",
    link: "https://www.hrkgame.com/it/",
    descrizione: "Sito dove trovare key di giochi oltre che per pc anche per Nintendo, Xbox e Play.",
    category: "CdKey"
  },
  {
    title: "KINGUIN",
    link: "https://www.kinguin.net/",
    descrizione: "Uno dei migliori siti dove poter comprare key per Pc a basso prezzo.",
    category: "CdKey",
    
  },

/*----------------------------------------MUSICA-------------------------------------------------------*/
{
    title: "DAT PIFF",
    link: "https://www.datpiff.com/",
    descrizione: "Sito interessante dove trovare Mixtape americani da scaricare.",
    category: "Musica",
    titolo: "MUSICA"
  },
  {
    title: "FORGOTIFY",
    link: "https://forgotify.com/",
    descrizione: "Milioni di canzoni sono state dimenticate. Questo sito promette di fartele riscoprire.",
    category: "Musica"
  },
  {
    title: "I MISS MY CAFE",
    link: "https://imissmycafe.com/",
    descrizione: "Crea grazie a questo mixer combinazioni di suoni rilassanti per studiare o semplicemente per riposarti.",
    category: "Musica"
  },
  {
    title: "MIDOMI",
    link: "https://www.midomi.com/",
    descrizione: "Sito simile a Shazam, creato per il pc.",
    category: "Musica"
  },
  {
    title: "MUSIC-MAP",
    link: "https://www.music-map.com/",
    descrizione: "Inserisci un'artista all'interno del sito. Te ne suggerirà uno simile.",
    category: "Musica"
  },
  {
    title: "NCS",
    link: "https://ncs.io/",
    descrizione: "Sito che offre musica elettronica in modo gratuito.",
    category: "Musica"
  },
  {
    title: "RAVE DJ",
    link: "https://rave.dj/",
    descrizione: "Prova a fare un mash-up di più canzoni e vedi cosa esce fuori.",
    category: "Musica"
  },
  {
    title: "RESPECTA",
    link: "https://respecta.is/",
    descrizione: "Altro sito dove trovare mixtape americani.",
    category: "Musica"
  },

/*----------------------------------------AI-------------------------------------------------------*/
{
    title: "CHAT GPT",
    link: "https://openai.com/blog/chatgpt/",
    descrizione: "Il sito del momento. Fatti aiutare dall'intelligenza aritificiale dalla creazione di semplici compiti fino a codici un po' più avanzati.",
    category: "AI",
    titolo: "IA"
  },
  {
    title: "CLIC DROP",
    link: "https://clipdrop.co/",
    descrizione: "L'ecosistema definitivo di app, plug-in e risorse per tutti i creatori, basato sull'intelligenza artificiale.",
    category: "AI"
  },
  {
    title: "EXCEL FORMULA BOT",
    link: "https://excelformulabot.com/",
    descrizione: "Trasforma le tue istruzioni di testo in formule Excel in pochi secondi con l'aiuto dell'intelligenza artificiale gratuitamente.",
    category: "AI",
    
  },
  {
    title: "JITTER VIDEO",
    link: "https://jitter.video/",
    descrizione: "Jitter consente ai creatori e ai team di progettare facilmente contenuti animati e interfacce straordinari.",
    category: "AI"
  },
/*------------------------------------TRASFERIMENTO DATI--------------------------------------------------*/
{
    title: "JUSTBEAMIT",
    link: "https://justbeamit.com/",
    descrizione: "Trascina il file che vuoi trasferire e segui le istruzioni sullo schermo per completare il download.",
    category: "Transfer",
    titolo: "TRANSF. DATI"
  },
  {
    title: "LANDROP",
    link: "https://landrop.app/",
    descrizione: "Rilascia qualsiasi file su qualsiasi dispositivo sulla tua LAN(Wi-fi).",
    category: "Transfer"
  },
  {
    title: "SNAPDROP",
    link: "https://snapdrop.net/",
    descrizione: "Scarica il programma Snapdrop sui device su cui vuoi trasferire i file e il gioco è fatto.",
    category: "Transfer",
    
  },
/*------------------------------------FORUM CODE--------------------------------------------------*/
{
    title: "GITHUB",
    link: "https://github.com/",
    descrizione: "Uno dei migliori siti/forum incentrato sulla programmazione.",
    category: "ForumCode",
    titolo: "FORUM"
  },
  {
    title: "INFORGE",
    link: "https://www.inforge.net/forum/",
    descrizione: "Forum incentrato su Videogiochi, sicurezza informatica e tecnologia in generale.",
    category: "ForumCode"
  },
  {
    title: "SOURCE FORGE",
    link: "https://sourceforge.net/",
    descrizione: "Forum dove poter pubblicare e discutere codici open source.",
    category: "ForumCode"
  },
  {
    title: "STACK OVERFLOW",
    link: "https://stackoverflow.com/",
    descrizione: "Il migliore sito dove poter trovare soluzioni a problemi derivanti dai codici di programmazione.",
    category: "ForumCode"
  },
  {
    title: "TOM'S HARDWARE",
    link: "https://forum.tomshw.it/",
    descrizione: "Forum incentrato sulle soluzioni Hardware con un occhio anche al lato software.",
    category: "ForumCode"
  },
  {
    title: "XDA",
    link: "https://www.xda-developers.com/",
    descrizione: "Sito/Forum incentrato su recensioni e soluzioni ambito mobile/laptop.",
    category: "ForumCode"
  },

/*------------------------------------VIAGGI--------------------------------------------------*/

{
    title: "ATLAS OBSCURA",
    link: "https://www.atlasobscura.com/",
    descrizione: "Blog incentrato sui viaggi. Articoli e storie interessanti che ti incuriosiranno e ti faranno venire voglia di viaggiare.",
    category: "Viaggi",
    titolo: "VIAGGI"
  },
  {
    title: "JUSTLIVEYOURDREAM",
    link: "https://justliveyourdreamblog.wordpress.com/",
    descrizione: "Blog incentrato sui viaggi con alcuni posti poco conosciuti che per\u00f2 valgono la pena di essere visitati.",
    category: "Viaggi"
  },
  {
    title: "STUDENTI FUORI ",
    link: "https://www.studentifuori.it/",
    descrizione: "Trucchi e tips per studenti fuori casa(e non solo).",
    category: "Viaggi"
  },
  {
    title: "UN VIAGGIO, INFINITE EMOZIONI ",
    link: "https://www.unviaggioinfiniteemozioni.it/",
    descrizione: "Blog incentrato sui viaggi con alcuni posti poco conosciuti che per\u00f2 valgono la pena di essere visitati.",
    category: "Viaggi"
  },
  {
    title: "UTRAVEL",
    link: "https://utravel.it/",
    descrizione: "Sito interessante dove prenotare vacanze a basso costo(riservato solo a studenti universitari).",
    category: "Viaggi"
  },
  {
    title: "VIA CHE SI VA",
    link: "https://justliveyourdreamblog.wordpress.com/",
    descrizione: "Blog incentrato sui viaggi. Molto interessante i post con le liste su cosa portare in base ai vari viaggi da fare",
    category: "Viaggi"
  },
  {
    title: "WE ROAD",
    link: "https://www.weroad.it/",
    descrizione: "Sito molto interessante per prenotare viaggi e viaggiare insieme ad altre persone",
    category: "Viaggi"
  },

/*------------------------------------AUTO--------------------------------------------------*/


{
    title: "FDRIVE EXPERIENCE",
    link: "https://www.fdrive.it/",
    descrizione: "Centro di simulazione a Bergamo",
    category: "Auto",
    titolo: "AUTO"
  },
  {
    title: "GRIP FURNITURE",
    link: "https://www.grip-furniture.com/",
    descrizione: "Trasforma il tuo circuito preferito in una lampada per casa dal design unico.",
    category: "Auto"
  },
  {
    title: "HALMO",
    link: "https://www.halmo-automobilia.com/collections/all/",
    descrizione: "Sito interessantissimo dove trovare pezzi unici da collezione per chi ama il mondo della F1.",
    category: "Auto"
  },
  {
    title: "ILLUSTRATED TRACKS",
    link: "https://illustratedtracks.com/",
    descrizione: "Il sito giusto dove trovare poster riguardante il mondo auto.(F1 compresa).",
    category: "Auto"
  },
  {
    title: "IL RITOCCO",
    link: "https://ilritocco.net/",
    descrizione: "Sito molto interessante dove trovare kit di ritocco per la tua auto.",
    category: "Auto"
  },
  {
    title: "TENUTA BENE",
    link: "https://www.tenutabene.it/",
    descrizione: "Sito dove trovare annunci di auto usate da privati.",
    category: "Auto"
  },
  {
    title: "WORLD RACE CIRCUITS",
    link: "https://worldracecircuits.com/",
    descrizione: "Trasforma il tuo circuito preferito in quadri di legno da appendere alla tua parete.",
    category: "Auto"
  },
/*------------------------------------CIBO--------------------------------------------------*/


{
    title: "AMERICAN UNCLE",
    link: "https://www.americanuncle.it/",
    descrizione: "Sito dove poter comprare i migliori dolciumi americani.",
    category: "Cibo",
    titolo: "CIBO"
  },
  {
    title: "BAKERY & LOVE",
    link: "https://www.bakeryelove.com/",
    descrizione: "Prodotti artigianali che spaziano dalle varie creme fino ad arrivare a panettoni e torte",
    category: "Cibo"
  },
  {
    title: "DISHCOVERY",
    link: "https://dishcovery.biz/",
    descrizione: "Progetto interessante dove poter creare menu digitali per il proprio ristorante/locale.",
    category: "Cibo"
  },
  {
    title: "FOOD SPRING",
    link: "https://www.foodspring.it/",
    descrizione: "Sito dove poter comprare Prodotti Bio utili per chi vuole una vita sana o per chi pratica attivit\u00e0 sportiva.",
    category: "Cibo"
  },
  {
    title: "SICILY ADDICT",
    link: "https://www.sicilyaddict.it/",
    descrizione: "Sito dove poter comprare artigianali siciliani.",
    category: "Cibo"
  },
  {
    title: "SICILU",
    link: "https://www.sicilyaddict.it/",
    descrizione: "Altro Sito dove poter comprare artigianali siciliani.",
    category: "Cibo"
  },
/*------------------------------------BLOG VARI--------------------------------------------------*/
 
   
{
    title: "SURFA BLOG ",
    link: "https://surfablog.blogspot.com/",
    descrizione: "Blog di Surfa.Aggiornato quotidiniamente su quello che riguarda sneakers lifestyle et similia.",
    category: "BlogVari",
    titolo: "BLOG VARI"

},

{
    title: "POWER MANGA",
    link: "https://powermanga.forumcommunity.net/",
    descrizione: "Forum interessante incentrato sui manga.",
    category: "BlogVari"
},


/*------------------------------------LIBRI--------------------------------------------------*/
    {
    title: "LIBRERIA UNIVERSITARIA",
    link: "https://www.libreriauniversitaria.it/",
    descrizione: "Uno dei siti pi\u00f9 famosi dove comprare libri e testi universitari.",
    category: "Libri",
    titolo: "LIBRI"
    },
    {
        title: "Z-LIBRARY",
        link: "https://z-library.it/",
        descrizione: "Sito dove trovare libri gratuiti. Il sito viene buttato giu spesso. Basta scrivere su Google \"Z-Lib\".",
        category: "Libri"
        
    },
  

 /*------------------------------------WIKIPEDIA--------------------------------------------------*/
   
    {
        title: "INTERNET ARCHIVE",
        link: "https://archive.org/",
        descrizione: "Uno dei piu grandi database dove trovare di tutto.",
        category: "Wikipedia",
        titolo: "WIKIPEDIA"

    },
    {
        title: "YUMMLY",
        link: "https://www.yummly.com/",
        descrizione: "Uno dei siti pi\u00f9 famosi dove trovare ricette di tutte le etnie.",
        category: "Wikipedia"
    },
  /*------------------------------------CRESCITA PERSONALE--------------------------------------------------*/

  {
    title: "BRAIN ZONE",
    link: "https://www.brainzone.it/",
    descrizione: "Sito dove poter trovare info interessanti su come funziona il nostro cervello.",
    category: "CrescitaPersonale",
    titolo: "GROWTH"
},
{
    title: "IPER MIND",
    link: "https://www.ipermind.com/",
    descrizione: "Sito dove poter trovare molti post utili alla crescita personale.",
    category: "CrescitaPersonale"
},
{
    title: "MILLIONAIRE",
    link: "https://www.millionaire.it/",
    descrizione: "Uno dei siti piu famosi in merito a storie e racconti su tutto quello che riguarda il mondo dell'imprenditoria.",
    category: "CrescitaPersonale"
},
{
    title: "MIND CHEATS",
    link: "https://mindcheats.net/",
    descrizione: "Uno dei primi siti di Crescita Personale che inziai a seguire. Molti articoli interessanti ma ormai, per stessa ammissione del creatore, progetto un po abbandonato.",
    category: "CrescitaPersonale"
    
},
   
  /*------------------------------------IMMAGINI--------------------------------------------------*/
 
  {
    title: "123 RF",
    link: "https://it.123rf.com/",
    descrizione: "Altro sito molto ben fornito di foto, vettoriali e video.",
    category: "Immagini",
    titolo: "IMMAGINI"
},
{
    title: "ARKADIA",
    link: "https://arkadia.xyz/",
    descrizione: " Sito dove trovare live wallpapers in loop. (Sito ancora in beta).",
    category: "Immagini"
},
{
    title: "ART STATIOM",
    link: "https://www.artstation.com/?sort_by=community",
    descrizione: "Un altro dei Siti/Forum più famosi dove trovare creazioni di altri utenti.",
    category: "Immagini"
},
{
    title: "AVATAAARS GENERATOR",
    link: "https://getavataaars.com/",
    descrizione: "Sito dove poter creare da zero il tuo avatar virtuale.",
    category: "Immagini"
},
{
    title: "CANVA",
    link: "https://www.canva.com/it_it/",
    descrizione: "Sito dove scaricare sia immagini sia template per creazioni e progetti.",
    category: "Immagini"
},
{
    title: "CLEAN PNG",
    link: "https://www.cleanpng.com/",
    descrizione: "Altro Sito/Database dove trovare immagini PNG trasparenti.",
    category: "Immagini"
},
{
    title: "CLICK A SNAP",
    link: "https://www.clickasnap.com/",
    descrizione: "Sito dove trovare foto scattate da altri utenti, avendole a pagamento. La particolarità è puoi condividere i tuoi scatti e farti pagare le foto.",
    category: "Immagini"
},
{
    title: "DEVIAN ART",
    link: "https://www.deviantart.com/",
    descrizione: "Uno dei Sito/Forum più famosi dove trovare creazioni di altri utenti.",
    category: "Immagini"
},
{
    title: "FAV PNG",
    link: "https://favpng.com/",
    descrizione: "Sito/Database dove trovare immagini PNG trasparenti.",
    category: "Immagini"
},
{
    title: "FLICKR",
    link: "https://www.flickr.com/explore",
    descrizione: "Sito dove scaricare immagini in alta risoluzione.",
    category: "Immagini"
},
{
    title: "FOTER MAG",
    link: "https://foter.com/",
    descrizione: "Sito MOLTO interessante dove trovare foto su come arredare locali ma sopratutto case.",
    category: "Immagini"
},
{
    title: "FOTOPEA",
    link: "https://www.photopea.com/",
    descrizione: "Editor online completo e molto simile a Photoshop, solo che completamente gratuito.",
    category: "Immagini"
},
{
    title: "FREE IMAGES",
    link: "https://www.freeimages.com/it",
    descrizione: "Sito dove scaricare immagini,clipart e vettori in alta risoluzione.",
    category: "Immagini"
},
{
    title: "LIFE OF PIX",
    link: "https://www.lifeofpix.com/",
    descrizione: "Sito dove scaricare immagini in alta risoluzione.",
    category: "Immagini"
},
{
    title: "LIVELY WALLPAPERS",
    link: "https://rocksdanister.github.io/lively/",
    descrizione: "Applicazione da scaricare sul pc per installare live wallpaper.",
    category: "Immagini"
},
{
    title: "LORDICON",
    link: "https://lordicon.com/",
    descrizione: "Trova fantastiche icone animate per i tuoi progetti.",
    category: "Immagini"
},
{
    title: "MOCK MAGIC",
    link: "https://www.mockmagic.com/",
    descrizione: "Sito dove creare prototipi per la tua prossima presentazione, sito Web, campagna sui social media, portfolio e altro ancora.",
    category: "Immagini"
},
{
    title: "PEXELS",
    link: "https://www.pexels.com/it-it/",
    descrizione: "Sito dove scaricare immagini in alta risoluzione.",
    category: "Immagini"
},
{
    title: "PHOTOBOX PIXLR",
    link: "https://pixlr.com/it/photomash/",
    descrizione: "Studio fotografico professionale direttamente sul tuo browser. Crea, modifica o rimuovi sfondi dalle immagini in modo professionale.",
    category: "Immagini"
},
{
    title: "PIXABAY",
    link: "https://pixabay.com/it/",
    descrizione: "Sito dove scaricare immagine in alta qualità per i tuoi progetti.",
    category: "Immagini"
    
},
{
    title: "PLACE IT",
    link: "https://placeit.net/",
    descrizione: "Sito dove poter creare mockup per le tue foto.",
    category: "Immagini"
},
{
    title: "PURE PNG",
    link: "https://purepng.com/",
    descrizione: "Altro Sito/Database dove trovare immagini PNG trasparenti.",
    category: "Immagini"
},
{
    title: "REMOVE BG",
    link: "https://www.remove.bg/it",
    descrizione: "Altro sito per rimuovere lo sfondo dalle vostre immagini. Sito fatto molto bene.",
    category: "Immagini"
},
{
    title: "SFONDI HD",
    link: "https://www.hdwallpapers.net/",
    descrizione: "Un altro sito dove trovare wallpaper per il tuo desktop.",
    category: "Immagini"
},
{
    title: "SIMPLE DESKTOP",
    link: "http://simpledesktops.com/",
    descrizione: "Un sito davvero molto buono dove trovare sfondi minimali.",
    category: "Immagini"
},
{
    title: "STICK PNG",
    link: "https://stickpng.com/",
    descrizione: "Altro Sito/Database dove trovare immagini PNG trasparenti.",
    category: "Immagini"
},
{
    title: "TAILOR BRANDS",
    link: "https://www.tailorbrands.com/it",
    descrizione: "Sito dove poter creare loghi professionali per la tua attività.",
    category: "Immagini"
},
{
    title: "THE PATTERN LIBRARY",
    link: "http://thepatternlibrary.com/",
    descrizione: "Sito molto carino dove scaricare pattern.",
    category: "Immagini"
},
{
    title: "UNSCREEN",
    link: "https://www.unscreen.com/",
    descrizione: "Sito dove poter rimuovere lo sfondo dei video.",
    category: "Immagini"
},
{
    title: "UNSPLASH",
    link: "https://unsplash.com/",
    descrizione: "Sito dove scaricare immagini in alta risoluzione.",
    category: "Immagini"
},
{
    title: "VIRAL HATTRIX",
    link: "https://www.viralhattrix.com/",
    descrizione: "Sito davvero interessante su come modificare tema e aspetto di Windows.",
    category: "Immagini"
},
{
    title: "WALL HAVEN",
    link: "https://wallhaven.cc/",
    descrizione: "Uno dei migliori siti dove trovare wallpaper per il tuo desktop.",
    category: "Immagini"
},
{
    title: "KAMUA",
    link: "https://kamua.com/",
    descrizione: "Uno dei siti più efficenti dove editare video. ",
    category: "Immagini"
},
/*-----------------------------------FONT & COLOR--------------------------------------------------*/

{
    title: "DA FONT",
    link: "https://www.dafont.com/it/",
    descrizione: "Il migliore sito dove trovare font gratuiti.",
    category: "Font&Color",
    titolo: "FONT&COLOR"
},
{
    title: "COLOR RAL RGB",
    link: "https://ralcolores.mrket.net/indexE.php",
    descrizione: "Uno dei siti migliori dove trovare colori RGB per i vostri progetti.",
    category: "Font&Color"
},
{
    title: "MY FONTS",
    link: "https://www.dafont.com/it/",
    descrizione: "Un altro sito molto curato dove trovare font gratuiti",
    category: "Font&Color"
},
{
    title: "COLORZILLA",
    link: "https://www.colorzilla.com/chrome/",
    descrizione: "Widget per Chrome che permette di leggere il codice del colore da qualsiasi punto del browser.",
    category: "Font&Color"
},
{
    title: "CREATIVE FABRICA",
    link: "https://www.dafont.com/it/",
    descrizione: "Sito interessante dove trovare font questa volta a pagamento.",
    category: "Font&Color"
},
{
    title: "FONT BY HOEFLER",
    link: "https://www.typography.com/",
    descrizione: "Uno dei siti americani piu famosi per quanto riguarda la tipografia e la creazione di font.",
    category: "Font&Color"
},
/*-----------------------------------SITI INTERESSANTI--------------------------------------------------*/


    {
        title: "2050 EARTH",
        link: "https://2050.earth/",
        descrizione: "Scopri come sarà il mondo nel 2050.",
        category: "SitiInteressanti",
        titolo: "SITI INTERESSANTI"
    },
    {
        title: "AFFORDII",
        link: "https://affordii.com/",
        descrizione: "Sito dove poter comprare lampade particolari(A forma di Luna, Albero ecc..)",
        category: "SitiInteressanti"
    },
    {
        title: "AMAZON VINE",
        link: "https://www.amazon.it/vine/about&tag=amzfinder-20",
        descrizione: "Affiliazione Amazon. Qualora venissi selezionato potrai ricevere a casa tua prodotti gratuiti da recensire.",
        category: "SitiInteressanti"
    },
    {
        title: "ANSWER SOCRATES",
        link: "https://answersocrates.com/",
        descrizione: "Scopri le domande che le persone pongono su Google su quasi tutti gli argomenti.",
        category: "SitiInteressanti"
    },
    {
        title: "ANSWER THE PUBLIC",
        link: "https://answerthepublic.com/",
        descrizione: "Inserisci una parola all'interno del tasto di ricerca e ottieni approfondimenti di ricerca direttamente per quella parola.",
        category: "SitiInteressanti"
    },
    {
        title: "BUILD REDUX",
        link: "https://buildredux.com/",
        descrizione: "Sito molto utile dove verrai aiutato a costruire il pc in base alle tue esigenze.",
        category: "SitiInteressanti"
    },
    {
        title: "CHILLYS",
        link: "https://www.chillys.com/it/categories/bottles",
        descrizione: "Sito dove poter comprare borracce termiche di qualità.",
        category: "SitiInteressanti"
    },
    {
        title: "COLOR RAL RGB",
        link: "https://ralcolores.mrket.net/indexE.php",
        descrizione: "Uno dei siti migliori dove trovare colori RGB per i vostri progetti.",
        category: "Font&Color"
    },
    {
        title: "COLORZILLA",
        link: "https://www.colorzilla.com/chrome/",
        descrizione: "Widget per Chrome che permette di leggere il codice del colore da qualsiasi punto del browser.",
        category: "Font&Color"
    },
    {
        title: "CON LA VOCE DI",
        link: "https://www.conlavocedi.com/#/",
        descrizione: "Sito dove trovare voci personalizzate per fare un regalo o per utilizzare anche come voce del navigatore(Waze).",
        category: "SitiInteressanti"
    },
    {
        title: "COUCH CONSOLE",
        link: "https://www.couchconsole.com/",
        descrizione: "Sito dove poter comprare una comodo bracciolo/portabicchiere per quando giochi sul letto/divano. ",
        category: "SitiInteressanti"
    },
    {
        title: "CREATIVE FABRICA",
        link: "https://www.dafont.com/it/",
        descrizione: "Sito interessante dove trovare font questa volta a pagamento.",
        category: "Font&Color"
    },
    {
        title: "CRISS BELLINI",
        link: "https://crissbellini.com/",
        descrizione: "Sito dove poter comprare gigantografie di varie opere(Moderne/Classiche).",
        category: "SitiInteressanti"
    },
    {
        title: "DA FONT",
        link: "https://www.dafont.com/it/",
        descrizione: "Il migliore sito dove trovare font gratuiti.",
        category: "Font&Color"
    },
    {
        title: "DESK SPACING",
        link: "https://deskspacing.com/",
        descrizione: "Crea il render della tua scrivania da sogno!",
        category: "SitiInteressanti"
    },
    {
        title: "DISPLATE",
        link: "https://displate.com/",
        descrizione: "Sito dove poter trovare poster e quadri.(Anche ambito videogame e supereroi).",
        category: "SitiInteressanti"
    },
    {
        title: "DIVOOM",
        link: "https://divoom.com/",
        descrizione: "Sito dove poter comprare quadrati Pixel animati.",
        category: "SitiInteressanti"
    },
    {
        title: "ECO GREEN LAB",
        link: "https://ecogreenlab.shop/",
        descrizione: "Altro Sito spaziale dove poter comprare miniature di piante ed ecosistemi botanici.",
        category: "SitiInteressanti"
    },
    {
        title: "ELEGOO",
        link: "https://www.elegoo.com/",
        descrizione: "Sito dove comprare stampanti 3D di buona fattura.",
        category: "SitiInteressanti"
    },
    {
        title: "ENSPIRE",
        link: "https://www.enspire.gift/",
        descrizione: "Enspire è il motore di ricerca interattivo che trova il regalo ideale per ogni persona ed occasione, in pochi click!",
        category: "SitiInteressanti"
    },
    {
        title: "FIVERR",
        link: "https://it.fiverr.com/",
        descrizione: "Sito dove trovare freelancer per l'acquisto di skill specifiche(creazione programmi, loghi, ecc)",
        category: "SitiInteressanti"
    },
    {
        title: "FOREBEARS",
        link: "https://forebears.io/it",
        descrizione: "Cerca il significato, le origini e la popolarità del tuo nome e cognome.",
        category: "SitiInteressanti"
    },
    {
        title: "FUTURE ME",
        link: "https://www.futureme.org/",
        descrizione: "Sito davvero figo: scriviti una lettera al tuo sè futuro e fattela spedire tra 1,5,10 o anche 20 anni!",
        category: "SitiInteressanti"
    },
    {
        title: "HAPPY HEARS",
        link: "https://www.happyearsearplugs.com/eu/shop/",
        descrizione: "Sito dove poter comprare tappi per le orecchie che vengono definiti \"rivoluzionari\". ",
        category: "SitiInteressanti"
    },
    {
        title: "ICONIC PUZZLES",
        link: "https://iconic-puzzles.it/",
        descrizione: "Sito dove trovare Puzzle originali a tema sportivo.",
        category: "SitiInteressanti"
    },
    {
        title: "ILOVEPDF",
        link: "https://www.ilovepdf.com/",
        descrizione: "Tutti gli strumenti di cui hai bisogno per lavorare con i PDF in un unico posto.",
        category: "SitiInteressanti"
    },
    {
        title: "ILLUMINA MILANO",
        link: "https://illuminamilano.it/",
        descrizione: "Sito dove poter comprare lampade dalla forma e design molto particolari.",
        category: "SitiInteressanti"
    },
    {
        title: "KYOTO BOX",
        link: "https://www.kyotobox.co/",
        descrizione: "Sito dove trovare box luminosi da appendere in camera dei personaggi Manga più famosi di sempre.",
        category: "SitiInteressanti"
    },
    {
        title: "LEAH IDEAS",
        link: "https://leahideas.com/",
        descrizione: "Sito dove trovare quadri moderni per abbellire la casa.",
        category: "SitiInteressanti"
    },
    {
        title: "LIFE STATS",
        link: "https://neal.fun/life-stats/",
        descrizione: "Inserisci la tua data di nascita e guarda un po di statistiche di cosa è successo da quando sei nato.",
        category: "SitiInteressanti"
    },
    {
        title: "MECA BRICKS",
        link: "https://mecabricks.com/en/",
        descrizione: "Sito dove guardare costruzioni e renderizzazioni di modelli lego in 3D.",
        category: "SitiInteressanti"
    },
    {
        title: "MELLOW",
        link: "https://mellowconcrete.com/",
        descrizione: "Oggetti unici di arredo provenienti dalla mente di un designer genovese.",
        category: "SitiInteressanti"
    },
    {
        title: "MUSCLE WIKI",
        link: "https://musclewiki.com/",
        descrizione: "La \"wikipedia\" su come allenarsi.",
        category: "SitiInteressanti"
    },
    {
        title: "MY FONTS",
        link: "https://www.dafont.com/it/",
        descrizione: "Un altro sito molto curato dove trovare font gratuiti",
        category: "Font&Color"
    },
    {
        title: "NANOLEAF",
        link: "https://nanoleaf.me/it-IT/",
        descrizione: "Sito dove poter comprare i migliori cubotti RGB presenti sul mercato.",
        category: "SitiInteressanti"
    },
    {
        title: "NATURAL READERS",
        link: "https://www.naturalreaders.com/",
        descrizione: "Converti testi e PDF in audio parlato in modo da poter ascoltare i tuoi documenti dovunque ti trovi.",
        category: "SitiInteressanti"
    },
    {
        title: "NZXT",
        link: "https://nzxt.com/it-IT",
        descrizione: "Sito dove comprare pc pre-assemblati di alta qualità.",
        category: "SitiInteressanti"
    },
    {
        title: "ONLINE CONVERT",
        link: "https://www.online-convert.com/it",
        descrizione: "Converti online i tuoi file multimediali e seleziona il formato d'arrivo.",
        category: "SitiInteressanti"
    },
    {
        title: "OUTRIDER",
        link: "https://outrider.org/nuclear-weapons/interactive/bomb-blast",
        descrizione: "Sperimenta la potenza di un'arma nucleare a basso rendimento se colpisse il paese in cui abiti. ",
        category: "SitiInteressanti"
    },
    {
        title: "PHOTOWALL",
        link: "https://www.photowall.com/it",
        descrizione: "Sito dove trovare carta da parati per decorare i vostri muri.",
        category: "SitiInteressanti"
    },
    {
        title: "PRINT MARKET",
        link: "https://printmarket.it/",
        descrizione: "Sito dove poter trovare poster e quadri.(Molto interessanti le mappe delle città).",
        category: "SitiInteressanti"
    },
    {
        title: "RADIO GARDEN",
        link: "http://radio.garden/visit/innsbruck/9CjRC8Y6",
        descrizione: "Sito dove ascoltare le radio presenti in tutto il mondo!",
        category: "SitiInteressanti"
    },
    {
        title: "SKETCH LAB",
        link: "https://sketch.metademolab.com/",
        descrizione: "Dai letteralmente vita ai tuoi disegni.",
        category: "SitiInteressanti"
    },
    {
        title: "SILK",
        link: "http://weavesilk.com/",
        descrizione: "Muovi il mouse sullo schermo e crea arte digitale. ",
        category: "SitiInteressanti"
    },
    {
        title: "SMODIN WRITER",
        link: "https://smodin.io/",
        descrizione: "Assistente virtuale per aiutarti a scrivere e riorganizzare i tuoi testi.",
        category: "SitiInteressanti"
    },
    {
        title: "TEN YEARS AGO",
        link: "https://neal.fun/ten-years-ago/",
        descrizione: "Scopri com'era internet 10 anni fa.",
        category: "SitiInteressanti"
    },
    {
        title: "TERRALIVING",
        link: "https://www.theterraliving.com/",
        descrizione: "Sito spaziale dove poter comprare miniature di piante ed ecosistemi botanici.",
        category: "SitiInteressanti"
    },
    {
        title: "TOSDR",
        link: "https://tosdr.org/",
        descrizione: "Sito molto interessante che ti fa capire quanto sono pericolosi i termini e servizi che il 99% delle volte neanche leggiamo.",
        category: "SitiInteressanti"
    },
    {
        title: "TWINKLING TREE",
        link: "https://twinklingtree.co/en-it",
        descrizione: "Altro sito dove trovare lampade e luci particolati(edere, alberi, collane ecc).",
        category: "SitiInteressanti"
    },
    {
        title: "UNI DRAGON",
        link: "https://unidragon.eu/",
        descrizione: "Sito dove trovare Puzzle davvero originali e diversi dal solito.",
        category: "SitiInteressanti"
    },
    {
        title: "USER INTERVIEWS",
        link: "https://www.userinterviews.com/",
        descrizione: "Sito dove partecipare a sondaggi aziendali e provare a guadagnare soldi.",
        category: "SitiInteressanti"
    },
    {
        title: "WHAT CAME FIRST",
        link: "https://artsandculture.google.com/experiment/what-came-first/ZQGBUPErEE3bVg",
        descrizione: "Sezione di Google Arts dove mettere alla prova la tua conoscenza i momenti culturali avvenuti nel corso della storia.",
        category: "SitiInteressanti"
    },
    {
        title: "WHAT HUBBLE SEE",
        link: "https://www.nasa.gov/content/goddard/what-did-hubble-see-on-your-birthday",
        descrizione: "Scopri cosa ha fotografato la nasa nell'universo il giorno del tuo compleanno.",
        category: "SitiInteressanti"
    },
    {
        title: "WHERE IS THIS",
        link: "https://www.where-is-this.com/",
        descrizione: "Grazie a una folta comunità puoi cercare di scoprire dove è stata scattata una determinata foto.",
        category: "SitiInteressanti"
    },
    {
        title: "WOOP CASE",
        link: "https://woopcase.com/it",
        descrizione: "Sito dove comprare cover per tutti i tipi di smartphone con la possibilità anche di averle personalizzate.",
        category: "SitiInteressanti"
    },
    {
        title: "WOLF ART",
        link: "https://wolfart.it/",
        descrizione: "Sito dove trovare dipinti fatti a mano con la tecnica della Spray Paint Art.",
        category: "SitiInteressanti"
    },


   
/*----------------------------------------WORD TOOL-------------------------------------------------*/
    {
    title: "CONTENT ROW",
    link: "https://www.contentrow.com/",
    descrizione: "Sito molto utile per analizzare il testo, trovare errori e ricevere consigli su sinonimi di parole.",
    category: "Word",
    titolo: "WORD TOOL"
    },    
    {
        title: "WOORD",
        link: "https://www.getwoord.com/",
        descrizione: "Trasforma il Web in audio utilizzando Word.Trasforma il testo in audio.",
        category: "Word",
        
    },

    {
        title: "WORD REFERENCE",
        link: "https://www.wordreference.com/it/",
        descrizione: "Dizionario online dove trovare la traduzione di parole ma anche guide sull'uso della sintassi delle varie lingue. ",
        category: "Word"
    },
  


      // Aggiungi più elementi con le categorie necessarie
    ];
  
    const filteredItems = filter === 'all' ? blogItems : blogItems.filter(item => item.category === filter);
  
    return (
      <div>
        <Navbar/>
        <div className='testoweblist'>
        <p> Ho deciso con questo articolo di creare una sorta di raccoglitore/archivio di tutti i siti Web che trovo utili o che ho trovato interessanti, dividendoli per categorie.</p>
      
      <p> L'articolo sarà in continuo aggiornamento.</p>
        </div>
          <div id="myBtnContainer" className={isButtonClicked}>
         
                <button
  className= "btnBlog dropdown-toggle"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  Informatica
</button>
<div className="dropdown-menu">
  <a onClick={() => handleFilterChange('Torrent')} className={`dropdown-item btnBlog ${filter === 'Torrent' ? 'active' : ''}`}> TORRENT </a>
  <a onClick={() => handleFilterChange('Sicurezza')} className={`dropdown-item btnBlog ${filter === 'Sicurezza' ? 'active' : ''}`}> SICUREZZA INFORMATICA </a>
  <a onClick={() => handleFilterChange('BlogInformatici')} className={`dropdown-item btnBlog ${filter === 'BlogInformatici' ? 'active' : ''}`}> BLOG INFORMATICI </a>
  <a onClick={() => handleFilterChange('Videogame')} className={`dropdown-item btnBlog ${filter === 'Videogame' ? 'active' : ''}`}> VIDEOGAME </a>
  <a onClick={() => handleFilterChange('Tastiere')} className={`dropdown-item btnBlog ${filter === 'Tastiere' ? 'active' : ''}`}> TASTIERE MECCANICHE </a>
  <a onClick={() => handleFilterChange('SoftwarePc')} className={`dropdown-item btnBlog ${filter === 'SoftwarePc' ? 'active' : ''}`}>SOFTWARE PC</a>
  <a onClick={() => handleFilterChange('CdKey')} className={`dropdown-item btnBlog ${filter === 'CdKey' ? 'active' : ''}`}>CD KEY</a>
  <a onClick={() => handleFilterChange('AI')} className={`dropdown-item btnBlog ${filter === 'AI' ? 'active' : ''}`}>INTELLIGENZA ARTIFICIALE</a>
  <a onClick={() => handleFilterChange('ForumCode')} className={`dropdown-item btnBlog ${filter === 'ForumCode' ? 'active' : ''}`}>CODING FORUM</a>
  <a onClick={() => handleFilterChange('Word')} className={`dropdown-item btnBlog ${filter === 'Word' ? 'active' : ''}`}>WORD TOOL</a>
  <a onClick={() => handleFilterChange('Transfer')} className={`dropdown-item btnBlog ${filter === 'Transfer' ? 'active' : ''}`}>TRASF. DATI</a>

</div>

<button
  className= "btnBlog dropdown-toggle"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  Commerce
</button>
<div className="dropdown-menu">
  <a onClick={() => handleFilterChange('E-commerce')} className={`dropdown-item btnBlog ${filter === 'E-ccomerce' ? 'active' : ''}`}> E-COMMERCE </a>
  <a onClick={() => handleFilterChange('Vestiti')} className={`dropdown-item btnBlog ${filter === 'Vestiti' ? 'active' : ''}`}> VESTITI</a>
  <a onClick={() => handleFilterChange('VestitiParticolari')} className={`dropdown-item btnBlog ${filter === 'VestitiParticolari' ? 'active' : ''}`}> VESTITI PARTICOLARI</a>
  <a onClick={() => handleFilterChange('Gioielli')} className={`dropdown-item btnBlog ${filter === 'Gioielli' ? 'active' : ''}`}>ACCESSORI PARTICOLARI</a>
  <a onClick={() => handleFilterChange('Orologi')} className={`dropdown-item btnBlog ${filter === 'Orologi' ? 'active' : ''}`}>OROLOGI</a>
  <a onClick={() => handleFilterChange('Libri')} className={`dropdown-item btnBlog ${filter === 'Libri' ? 'active' : ''}`}>LIBRI</a>
  <a onClick={() => handleFilterChange('Auto')} className={`dropdown-item btnBlog ${filter === 'Auto' ? 'active' : ''}`}>AUTO</a>
  

</div>              


<button
  className= "btnBlog dropdown-toggle"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
Enterteinment
</button>
<div className="dropdown-menu">
<a onClick={() => handleFilterChange('SitiInteressanti')} className={`dropdown-item btnBlog ${filter === 'SitiInteressanti' ? 'active' : ''}`}>SITI INTERESSANTI</a>
<a onClick={() => handleFilterChange('Teatro')} className={`dropdown-item btnBlog ${filter === 'Teatro' ? 'active' : ''}`}>TEATRO</a>
<a onClick={() => handleFilterChange('Immagini')} className={`dropdown-item btnBlog ${filter === 'Immagini' ? 'active' : ''}`}>IMMAGINI</a>
<a onClick={() => handleFilterChange('Font&Color')} className={`dropdown-item btnBlog ${filter === 'Font&Color' ? 'active' : ''}`}>FONT E COLORI</a>
<a onClick={() => handleFilterChange('Wikipedia')} className={`dropdown-item btnBlog ${filter === 'Wikipedia' ? 'active' : ''}`}>WIKIPEDIE</a>
<a onClick={() => handleFilterChange('Musica')} className={`dropdown-item btnBlog ${filter === 'Musica' ? 'active' : ''}`}>MUSICA</a>
<a onClick={() => handleFilterChange('Streaming')} className={`dropdown-item btnBlog ${filter === 'Streaming' ? 'active' : ''}`}>STREAMING</a>
<a onClick={() => handleFilterChange('Cibo')} className={`dropdown-item btnBlog ${filter === 'Cibo' ? 'active' : ''}`}>CIBO</a>
<a onClick={() => handleFilterChange('BlogVari')} className={`dropdown-item btnBlog ${filter === 'BlogVari' ? 'active' : ''}`}>BLOG VARI</a>
<a onClick={() => handleFilterChange('Viaggi')} className={`dropdown-item btnBlog ${filter === 'Viaggi' ? 'active' : ''}`}>VIAGGI</a>


</div>

                </div>
                
        <Container fluid className="bordiContainerBlog">
            
          <Row>
           
            <Col id="ColHover" className="bordoColonna" md={2}>
              <Link to="/blog">
              <a>
      <h1 className='vertical-rl'>
        {filter === 'all' ? 'Blog' : filteredItems.map((item, index) => (
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

export default WebList;