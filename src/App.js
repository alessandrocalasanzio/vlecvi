
import { React, useEffect, useState, useRef } from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/1.Navbar';
import "../node_modules/jquery/dist/jquery.min.js";
import Chi from './components/2.Chi';
import Progetti from './components/3.Progetti';
import Blog from './components/4.Blog';
import Contattis from './components/5.Contattis.js';
import {  Route, Form } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Routes as Switch } from "react-router";

import SchedaChi from './components/Schede/1.SchedaChi.js';
import SchedaBlog from './components/Schede/2.SchedaBlog.js';
import SchedaProgetti from './components/Schede/3.SchedaProgetti.js';
import SchedaContatti from './components/Schede/4.SchedaContatti.js';
import Home from './components/6.Home.js';
import Leo from './components/ChiComponenti/Musei/Leo.js';
import Parigi from './components/ChiComponenti/Luoghi/Parigi';
import Barcellona from './components/ChiComponenti/Luoghi/Barcellona.js';
import Portogallo from './components/ChiComponenti/Luoghi/Portogallo.js';
import Cassiglio from './components/ChiComponenti/Luoghi/Cassiglio.js';
import Traves from './components/ChiComponenti/Luoghi/Traves.js';
import Brescia from './components/ChiComponenti/Luoghi/Brescia.js';
import LagoGarda from "./components/ChiComponenti/Luoghi/LagoGarda.js";
import Piemonte from "./components/ChiComponenti/Luoghi/Piemonte.js";
import Franciacorta from './components/ChiComponenti/Luoghi/Franciacorta.js';
import Fuipiano from './components/ChiComponenti/Luoghi/Fuipiano.js';
import PortoRecanati from './components/ChiComponenti/Luoghi/PortoRecanati.js';
import Varenna from './components/ChiComponenti/Luoghi/Varenna.js';
import Trezzo from './components/ChiComponenti/Luoghi/Trezzo.js';

import WebList from './components/BlogComponenti/Articoli/WebList.js';
import Excel from './components/BlogComponenti/Articoli/Excel.js';

import Loading from './components/0.Loading.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Cookies from 'js-cookie';
import Musica from "./components/ChiComponenti/Musica.js";
import LavoroLista from "./components/BlogComponenti/Articoli/LavoroLista.js";




function App() {
  const [loading, setLoading] = useState(true);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Check if the cookie exists
    const cookie = Cookies.get('isFirstVisit');

    // If the cookie exists, skip the preload
    if (cookie) {
      setLoading(false);
      return;
    }

    // Perform the preload
    setTimeout(() => {
      setLoading(false);
    }, 9000);

    // Simulate clicking a button after preload
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }, 9100);

    
    // Set the isFirstVisit cookie to prevent further preloads
    Cookies.set('isFirstVisit', 'true', { expires: 30 }); // This will expire after 30 days
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/chisono" element={<SchedaChi />}></Route>
        <Route path="/blog" element={<SchedaBlog />}></Route>
        <Route path="/progetti" element={<SchedaProgetti />}></Route>
        <Route path="/contatti" element={<SchedaContatti />}></Route>
        <Route path="/leo" element={<Leo />}></Route>
        <Route path="/parigi" element={<Parigi />}></Route>
        <Route path="/barcellona" element={<Barcellona />}></Route>
        <Route path="/portogallo" element={<Portogallo />}></Route>
        <Route path="/brescia" element={<Brescia />}></Route>
        <Route path="/franciacorta" element={<Franciacorta />}></Route>
        <Route path="/traves" element={<Traves />}></Route>
        <Route path="/varenna" element={<Varenna />}></Route>
        <Route path="/garda" element={<LagoGarda />}></Route>
        <Route path="/erna" element={<Piemonte />}></Route>
        <Route path="/trezzo" element={<Trezzo />}></Route>

        <Route path="/fuipiano" element={<Fuipiano />}></Route>
        <Route path="/portorecanati" element={<PortoRecanati />}></Route>
        <Route path="/cassiglio" element={<Cassiglio />}></Route>

        <Route path="/weblist" element={<WebList />}></Route>
        <Route path="/excel" element={<Excel />}></Route>
        <Route path="/lavoro" element={<LavoroLista />}> </Route>
        <Route path="/musica" element={<Musica />}></Route>






        <Route path="/" element={


          <div className="App">
            {loading === true ?
              <Loading /> :
              <div className='container-fluid'>



                <Navbar />
                <Chi />
                <Progetti />
                <Blog />
                <Contattis />
                <footer>Vlecvi© - Tutti i diritti Riservati.</footer>


              </div>
            }
          </div>
        }>
        </Route>
        <Route path="/refresh" element={null} />
      </Switch>
      </HashRouter>

  );

}


export default App;
