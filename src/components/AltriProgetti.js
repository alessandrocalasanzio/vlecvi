import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLocation } from 'react-router-dom';
import LinkAdattivo from './LinkAdattivo.js';

/*
  Riquadro "Altri progetti" in fondo alle pagine di progetto, gemello di BlogFiltro.
  Mostra tutti i progetti tranne quello della pagina in cui ci si trova.
  Per aggiungere un progetto basta una riga in elencoProgetti.
*/
const elencoProgetti = [
  { titolo: 'Janay - Segretario AI personale', link: '/janay' },
  { titolo: 'VlecviBot - Dolcevita', link: '/vlecvibot' },
  { titolo: 'Sito Web - "Da Giannino L\'Angolo D\'Abruzzo"', link: 'http://www.da-giannino-langolo-dabruzzo.it' },
  { titolo: 'Il mondo di Notion+Template', link: '/notion' },
  { titolo: 'Excel Expense Tracking', link: '/excel' },
];

const AltriProgetti = () => {
  const { pathname } = useLocation();
  const progetti = elencoProgetti.filter(progetto => progetto.link !== pathname);

  return (
    <div>
      <p className="titolo1Blog">ALTRI PROGETTI:</p>

      <Container fluid className="bordiContainerBlog">
        <Row>
          <Col id="ColHover" className="bordoColonna" md={2}>
            <Link to="/progetti">
              <h1 className='vertical-rl'>Progetti</h1>
            </Link>
          </Col>

          <Col className='thumb'>
            <div className="list-group justify-content-center">
              {progetti.map(progetto => (
                <div key={progetto.link} className="list-group-item list-group-item-action hoverBlog">
                  <LinkAdattivo to={progetto.link} className="mb-1">
                    {progetto.titolo}
                  </LinkAdattivo>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AltriProgetti;
