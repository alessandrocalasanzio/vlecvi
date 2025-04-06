import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const BlogFiltro = () => {
  const [filter, setFilter] = useState('all');
  const [isButtonClicked, setIsButtonClicked] = useState(false);


  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);

    if (newFilter === 'all') {
      setIsButtonClicked('button-1Blog');
    } else if (newFilter === 'Finanze') {
      setIsButtonClicked('button-2Blog');
    } else if (newFilter === 'Crescita Personale') {
      setIsButtonClicked('button-3Blog');
    } else if (newFilter === 'Liste'){
      setIsButtonClicked('button-4Blog');
    }

  };

  const blogItems = [
    { title: 'WebList', category: 'Liste', link:'/weblist' ,titolo: 'Liste'  },
    { title: 'Tenere Traccia delle spese con un File Excel', category: 'Finanze',link:'/excel',titolo: 'Finanza' },
    { title: 'I migliori siti per trovare lavoro', category:'Liste', link:'/lavoro'},
    { title: 'Il mondo di Notion+Template', category: 'Crescita Personale',titolo: 'CrescitaPersonale', link:'/notion' },

    // Aggiungi più elementi con le categorie necessarie
  ];

  const filteredItems = filter === 'all' ? blogItems : blogItems.filter(item => item.category === filter);

  return (
    <div >
        <div id="myBtnContainer1" className={isButtonClicked}>
          <button
                onClick={() => handleFilterChange('all')}
                className={`btnBlog ${filter === 'all' ? 'active' : ''}`}
              >
                Mostra Tutti
              </button>
              <button
                onClick={() => handleFilterChange('Finanze')}
                className={`btnBlog ${filter === 'Finanze' ? 'active' : ''}`}
              >
                Finanze
              </button>
              <button
                onClick={() => handleFilterChange('Crescita Personale')}
                className={`btnBlog ${filter === 'Crescita Personale' ? 'active' : ''}`}
              >
                Crescita
              </button>
              <button
                onClick={() => handleFilterChange('Liste')}
                className={`btnBlog ${filter === 'Liste' ? 'active' : ''}`}
              >
                Liste
              </button>
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
      <Link to={item.link}>
      <div className="d-flex w-100 justify-content-between">
        {/* Aggiungi un link intorno al titolo */}
        <a   className="mb-1">{item.title}</a>
      </div>
      </Link>
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

export default BlogFiltro;
