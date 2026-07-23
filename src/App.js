
import { React, useEffect, useState, Suspense, lazy } from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/1.Navbar';
import Chi from './components/2.Chi';
import Progetti from './components/3.Progetti';
import Blog from './components/4.Blog';
import Contattis from './components/5.Contattis.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes as Switch } from "react-router";

import Loading from './components/0.Loading.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Cookies from 'js-cookie';

// Code splitting per rotta: le pagine secondarie vengono caricate solo quando servono
const SchedaChi = lazy(() => import('./components/Schede/1.SchedaChi.js'));
const SchedaBlog = lazy(() => import('./components/Schede/2.SchedaBlog.js'));
const SchedaProgetti = lazy(() => import('./components/Schede/3.SchedaProgetti.js'));
const SchedaContatti = lazy(() => import('./components/Schede/4.SchedaContatti.js'));
const Leo = lazy(() => import('./components/ChiComponenti/Musei/Leo.js'));
const Parigi = lazy(() => import('./components/ChiComponenti/Luoghi/Parigi'));
const Barcellona = lazy(() => import('./components/ChiComponenti/Luoghi/Barcellona.js'));
const Portogallo = lazy(() => import('./components/ChiComponenti/Luoghi/Portogallo.js'));
const Cassiglio = lazy(() => import('./components/ChiComponenti/Luoghi/Cassiglio.js'));
const Traves = lazy(() => import('./components/ChiComponenti/Luoghi/Traves.js'));
const Brescia = lazy(() => import('./components/ChiComponenti/Luoghi/Brescia.js'));
const LagoGarda = lazy(() => import('./components/ChiComponenti/Luoghi/LagoGarda.js'));
const Piemonte = lazy(() => import('./components/ChiComponenti/Luoghi/Piemonte.js'));
const Franciacorta = lazy(() => import('./components/ChiComponenti/Luoghi/Franciacorta.js'));
const Fuipiano = lazy(() => import('./components/ChiComponenti/Luoghi/Fuipiano.js'));
const PortoRecanati = lazy(() => import('./components/ChiComponenti/Luoghi/PortoRecanati.js'));
const PortoRecanati2 = lazy(() => import('./components/ChiComponenti/Luoghi/PortoRecanati2.js'));
const Varenna = lazy(() => import('./components/ChiComponenti/Luoghi/Varenna.js'));
const Trezzo = lazy(() => import('./components/ChiComponenti/Luoghi/Trezzo.js'));
const Offagna = lazy(() => import('./components/ChiComponenti/Luoghi/Offagna.js'));
const Desenzano = lazy(() => import('./components/ChiComponenti/Luoghi/Desenzano.js'));
const CasaLeopardi = lazy(() => import('./components/ChiComponenti/Musei/CasaLeopardi.js'));
const WebList = lazy(() => import('./components/BlogComponenti/Articoli/WebList.js'));
const Excel = lazy(() => import('./components/BlogComponenti/Articoli/Excel.js'));
const Notion = lazy(() => import('./components/BlogComponenti/Articoli/Notion.js'));
const VlecviBot = lazy(() => import('./components/BlogComponenti/Articoli/VlecviBot.js'));
const Musica = lazy(() => import('./components/ChiComponenti/Musica.js'));
const LavoroLista = lazy(() => import('./components/BlogComponenti/Articoli/LavoroLista.js'));


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the cookie exists
    const cookie = Cookies.get('isFirstVisit');

    // If the cookie exists, skip the preload
    if (cookie) {
      setLoading(false);
      return;
    }

    // Perform the preload (splash screen di 9 secondi, scelta di design)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000);

    // Set the isFirstVisit cookie to prevent further preloads
    Cookies.set('isFirstVisit', 'true', { expires: 30 }); // This will expire after 30 days

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <Router basename="/">
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/chisono" element={<SchedaChi />}></Route>
          <Route path="/blog" element={<SchedaBlog />}></Route>
          <Route path="/progetti" element={<SchedaProgetti />}></Route>
          <Route path="/contatti" element={<SchedaContatti />}></Route>

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
          <Route path="/portorecanati2" element={<PortoRecanati2 />}></Route>
          <Route path="/offagna" element={<Offagna />}></Route>
          <Route path="/desenzano" element={<Desenzano />}></Route>
          <Route path="/cassiglio" element={<Cassiglio />}></Route>

          <Route path="/leo" element={<Leo />}></Route>
          <Route path="/casaleopardi" element={<CasaLeopardi />}></Route>

          <Route path="/weblist" element={<WebList />}></Route>
          <Route path="/excel" element={<Excel />}></Route>
          <Route path="/lavoro" element={<LavoroLista />}> </Route>
          <Route path="/musica" element={<Musica />}></Route>
          <Route path="/notion" element={<Notion />}></Route>
          <Route path="/vlecvibot" element={<VlecviBot />}></Route>

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
      </Suspense>
    </Router>

  );

}


export default App;