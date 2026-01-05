import React, { useState, useEffect, useRef } from 'react'; // Aggiunto useEffect e useRef
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Dropdown from 'react-bootstrap/Dropdown';

import Mappa from './Mappa/Mappa.js';
import Musica from './Musica.js';
import MappaMusei from './Mappa/MappaMusei.js';

const ChiFiltro = () => {
  const [filter, setFilter] = useState('Estero');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  
  // Riferimento per lo scroll automatico
  const listaRef = useRef(null);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    
    if (newFilter === 'WorldMap' || newFilter === 'Italia' || newFilter === 'Estero') {
      setIsButtonClicked('button-1');
    } else if (newFilter === 'Mostra') {
      setIsButtonClicked('button-2');
    } else if (newFilter === 'Liste') {
      setIsButtonClicked('button-3');
    }
  };

  // Logica per Instagram: scatta solo se l'URL contiene ?view=liste
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'liste') {
      handleFilterChange('Liste');
      
      // Aspettiamo un attimo che React renderizzi il cambio filtro prima di scrollare
      setTimeout(() => {
        listaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, []);

  const chiItems = [
    { category: 'WorldMap', component: <Mappa />, titolo: 'WorldMap' },
    { category: 'Mappa Musei&Mostre', component: <MappaMusei />, titolo: 'Mappa Musei&Mostre' },

    { title: 'Az. Montonale - Desenzano', category: 'Italia', link: '/desenzano', titolo: 'Around: Italia', label: '2025' },
    { title: 'Offagna', category: 'Italia', link: '/offagna', label: '2025' },
    { title: 'Recanati e Gli Irti Colli', category: 'Italia', link: '/portorecanati2', label: '2025' },
    { title: 'Porto Recanati', category: 'Italia', link: '/portorecanati', label: '2023' },
    { title: 'Cassiglio', category: 'Italia', link: '/cassiglio', label: '2023' },
    { title: 'Franciacorta', category: 'Italia', link: '/franciacorta', label: '2022' },
    { title: 'Fuipiano', category: 'Italia', link: '/fuipiano', label: '2019' },
    { title: 'Traves', category: 'Italia', link: '/traves', label: '2018' },
    { title: 'Lago di Garda', category: 'Italia', link: '/garda', label: '2017' },
    { title: 'Piani Di Erna', category: 'Italia', link: '/erna', label: '2017' },
    { title: 'Brescia', category: 'Italia', link: '/brescia', label: '2017' },
    { title: 'Varenna', category: 'Italia', link: '/varenna', label: '2016' },
    { title: "Trezzo Sull'Adda", category: 'Italia', link: '/trezzo', label: '//' },

    { title: 'Portogallo ', category: 'Estero', link: '/portogallo', titolo: 'Around: Estero', label: '2018' },
    { title: 'Barcellona', category: 'Estero', link: '/barcellona', label: '2017' },
    { title: 'Parigi ', category: 'Estero', link: '/parigi', label: '2017' },

    { title: 'Tour Biblioteca Leopardi', category: 'Mostra', link: '/casaleopardi', titolo: 'Mostre Visitate' },
    { title: 'Mostra Costruzioni L. Da Vinci', category: 'Mostra', link: '/leo' },

    { title: 'Lista: Serie Tv', category: 'Liste', titolo: 'Liste Personali', link: "https://vlecvi.notion.site/Lista-Serie-TV-1b93dae9c88b81ccbfeffa80a68e66a6?source=copy_link" },
    { title: 'Lista: Film', category: 'Liste', link: "https://vlecvi.notion.site/Lista-Film-1b93dae9c88b81469563ed4f328878fe?source=copy_link" },
    { title: 'Lista Libri', category: 'Liste', link: "https://vlecvi.notion.site/Lista-Libri-1b93dae9c88b819783fafbf5d72f2685?source=copy_link" },
    { title: 'Lista: Podcast', category: 'Liste', link: "https://vlecvi.notion.site/Lista-Podcast-AudioLibri-1b93dae9c88b81adb774da32ab5d71c9?source=copy_link" },
    { title: 'Lista: Musica', category: 'Liste', link: '/musica' },
  ];

  const filteredItems = filter === 'all' ? chiItems : chiItems.filter(item => item.category === filter);

  return (
    <div>
      {/* Aggiunto il ref qui per identificare l'inizio della sezione filtri/liste */}
      <div id="myBtnContainerChi" className={isButtonClicked} ref={listaRef}>
        <button
          className="btnBlog dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Around
        </button>
        <div className="dropdown-menu">
          <a onClick={() => handleFilterChange('WorldMap')} className={`dropdown-item btnBlog ${filter === 'WorldMap' ? 'active' : ''}`}> World Map </a>
          <a onClick={() => handleFilterChange('Italia')} className={`dropdown-item btnBlog ${filter === 'Italia' ? 'active' : ''}`}> Around: Italia </a>
          <a onClick={() => handleFilterChange('Estero')} className={`dropdown-item btnBlog ${filter === 'Estero' ? 'active' : ''}`}> Around: Estero </a>
        </div>

        <button
          className="btnBlog dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Mostre
        </button>
        <div className="dropdown-menu">
          <a onClick={() => handleFilterChange('Mappa Musei&Mostre')} className={`dropdown-item btnBlog ${filter === 'MappaMusei' ? 'active' : ''}`}> Mappa Musei&Mostre </a>
          <a onClick={() => handleFilterChange('Mostra')} className={`dropdown-item btnBlog ${filter === 'Mostra' ? 'active' : ''}`}>Musie&Mostre Visitate</a>
        </div>
        <button
          onClick={() => handleFilterChange('Liste')}
          className={`btnBlog ${filter === 'Liste' ? 'active' : ''}`}
        >
          Liste Personali
        </button>
      </div>

      <Container fluid className="bordiContainerBlog">
        <Row>
          <Col id="ColHover" className="bordoColonna" md={2}>
            <Link to="/blog">
              <a>
                <h1 className='vertical-rl'>
                  <div>
                    {filteredItems.map((item, index) => (
                      <div key={index}>
                        {item.titolo}
                      </div>
                    ))}
                  </div>
                </h1>
              </a>
            </Link>
          </Col>

          <Col className='thumb'>
            <div className="list-group justify-content-center">
              {filteredItems.map((item, index) => (
                <div key={index} className="list-group-item list-group-item-action hoverBlog">
                  {item.component}
                  <div className="d-flex w-100 justify-content-between">
                    <Link to={item.link}>
                      <a className="mb-1">{item.title}</a>
                    </Link>
                    <span className="badge bg-light text-dark ms-auto">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ChiFiltro;