
import { React, useEffect, useState, useRef } from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/1.Navbar';
import "../node_modules/jquery/dist/jquery.min.js";
import Chi from './components/2.Chi';
import Progetti from './components/3.Progetti';
import Blog from './components/4.Blog';
import Contattis from './components/5.Contattis.js';
import { BrowserRouter as Router, Route, Form } from 'react-router-dom';
import { Routes as Switch } from "react-router";

import SchedaChi from './components/Schede/1.SchedaChi.js';
import SchedaBlog from './components/Schede/2.SchedaBlog.js';
import SchedaProgetti from './components/Schede/3.SchedaProgetti.js';
import SchedaContatti from './components/Schede/4.SchedaContatti.js';
import Home from './components/Home.js';
import Articolo from './components/BlogComponenti/1.Articolo';
import Leo from './components/Leo';
import Parigi from './components/Parigi';
import Barcellona from './components/Barcellona';
import Portogallo from './components/Portogallo';
import Cassiglio from './components/Brescia';
import Brescia from './components/Brescia';
import Franciacorta from './components/Fuipiano';
import Fuipiano from './components/Fuipiano';
import PortoRecanati from './components/PortoRecanati';
import WebList from './components/WebList.js';
import Excel from './components/Excel.js';

import Loading from './components/Loading.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Cookies from 'js-cookie';




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
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route path="/chisono" element={<SchedaChi />}></Route>
        <Route path="/blog" element={<SchedaBlog />}></Route>
        <Route path="/progetti" element={<SchedaProgetti />}></Route>
        <Route path="/contatti" element={<SchedaContatti />}></Route>
        <Route path="/articolo" element={<Articolo />}></Route>
        <Route path="/leo" element={<Leo />}></Route>
        <Route path="/parigi" element={<Parigi />}></Route>
        <Route path="/barcellona" element={<Barcellona />}></Route>
        <Route path="/portogallo" element={<Portogallo />}></Route>
        <Route path="/brescia" element={<Brescia />}></Route>
        <Route path="/fuipiano" element={<Fuipiano />}></Route>
        <Route path="/portorecanati" element={<PortoRecanati />}></Route>
        <Route path="/weblist" element={<WebList />}></Route>
        <Route path="/excel" element={<Excel />}></Route>






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



              </div>
            }
          </div>
        }>
        </Route>
        <Route path="/refresh" element={null} />
      </Switch>
    </Router>

  );

}


export default App;
