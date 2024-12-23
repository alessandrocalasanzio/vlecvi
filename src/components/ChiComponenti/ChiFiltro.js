import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Dropdown from 'react-bootstrap/Dropdown';

import Mappa from './Mappa/Mappa.js';

import Musica from './Musica.js';


const ChiFiltro = () => {
  const [filter, setFilter] = useState('Estero');
  const [isButtonClicked, setIsButtonClicked] = useState(false);




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

  const chiItems = [
    { category: 'WorldMap', component: <Mappa />,titolo: 'WorldMap' },
    

    { title: 'Porto Recanati', category: 'Italia', link:'/portorecanati',titolo: 'Around: Italia', label: '2023' },
    { title: 'Cassiglio', category: 'Italia', link:'/cassiglio', label: '2023' },
    { title: 'Franciacorta', category: 'Italia', link:'/franciacorta', label: '2022' },
    { title: 'Fuipiano', category: 'Italia', link:'/fuipiano',  label: '2019' },
    { title: 'Traves', category: 'Italia', link:'/traves', label: '2018' },
    { title: 'Lago di Garda', category: 'Italia', link:'/garda', label: '2017' },
    { title: 'Piani Di Erna', category: 'Italia', link:'/erna', label: '2017' },
    { title: 'Brescia', category: 'Italia', link:'/brescia', label: '2017' },
    { title: 'Varenna', category: 'Italia', link:'/varenna', label: '2016' },
    { title: "Trezzo Sull'Adda", category: 'Italia', link:'/trezzo', label: '//' },



    { title: 'Portogallo ', category: 'Estero', link:'/portogallo', titolo: 'Around: Estero', label: '2018'},
    { title: 'Barcellona', category: 'Estero', link:'/barcellona', label: '2017'  },
    { title: 'Parigi ',    category: 'Estero', link:'/parigi', label: '2017' },
   
    

    { title: 'Mostra Costruzioni L. Da Vinci', category: 'Mostra', link:'/leo',titolo: 'Mostre Visitate' },

    { title: 'Lista: Serie Tv', category: 'Liste',titolo: 'Liste Personali',link:"https://vlecvi.notion.site/LISTA-SERIE-TV-25e2137def5540c6a7a2c672e22d9a54?pvs=4"  },
    { title: 'Lista: Film', category: 'Liste', link:"https://vlecvi.notion.site/LISTA-FILM-6d08d2d0815f4bcfb9d56f46991ece21?pvs=4" },
    { title: 'Lista Libri', category: 'Liste', link:"https://vlecvi.notion.site/LISTA-LIBRI-eb86edea95384f92ba0bdfde4cc86fcb?pvs=4" },
    { title: 'Lista: Podcast', category: 'Liste', link:"https://vlecvi.notion.site/LISTA-PODCAST-AUDIOLIBRI-31339dfc05ca49dd9bbb04f9d33580ed?pvs=4"},
    { title: 'Lista: Musica', category: 'Liste', link: '/musica' },

    // Aggiungi più elementi con le categorie necessarie
  ];

  const filteredItems = filter === 'all' ? chiItems : chiItems.filter(item => item.category === filter);

  return (
   
    <div >
        <div id="myBtnContainerChi" className={isButtonClicked}>
          
       
        <button
  className= "btnBlog dropdown-toggle"
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
                onClick={() => handleFilterChange('Mostra')}
                className={`btnBlog ${filter === 'Mostra' ? 'active' : ''}`}
              >
                Mostre Visitate
              </button>
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
        {/* Aggiungi un link intorno al titolo */}
        <Link to={item.link}>
        <a   className="mb-1">{item.title}</a>
        </Link>
        <span className="badge bg-light text-dark ms-auto">{item.label}</span>
      </div>
      <div>
      
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
