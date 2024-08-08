import React, {useState, useEffect}  from 'react';
import '../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoVlecvi from '../img/LogoVlecvi.png';
import {Link} from 'react-router-dom';

import w1 from '../img/w1.jpg';

import './7.Scriptscritta.js';

import Fade from 'react-reveal/Fade';


const Chi = ({ toRotate, period }) => {
  const [index, setIndex] = useState(0);
  const [txt, setTxt] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTxt((prevTxt) => {
        if (isDeleting) {
          // If deleting, reduce the text by one character at a time
          return prevTxt.length > 0 ? prevTxt.slice(0, -1) : '';
        } else {
          // If adding, add one character at a time
          return toRotate[index].slice(0, prevTxt.length + 1);
        }
      });

      if (!isDeleting && txt === toRotate[index]) {
        // If completed adding a word, start deleting
        setIsDeleting(true);
      } else if (isDeleting && txt === '') {
        // If completed deleting, move to the next word
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % toRotate.length);
      }
    }, period);

    return () => clearInterval(interval);
  }, [index, isDeleting, txt, toRotate, period]);

  return <span className="wrap">{txt}</span>;
};
    
    const ChiContainer = () => {
      const elements = [
        { toRotate: ["Accountant for Leaf Services", "Computer Science Student", "SMM for Angolo D'Abruzzo"], period: 300 },
        // Add more elements if necessary
      ];

    return(
       <div>
<Container fluid className='noBarra no-gutters'>
    <Row>
       <Col   className="bordoColonna" md={2} >
          <div className='sticky-top'>
          <Fade left>
        <Link to="/chisono">
         <h1 className='vertical-rl sticky-top '><small className='more'>More to</small> Chi Sono</h1>
         </Link>
         </Fade>
          </div>
        
          
        </Col>
        
        
        <Col className=' thumb'>
          <Fade right>
          <div>
        <img class="foldImg" src={w1}/>
        <div className='ml11 ml11-posizione'>
      {elements.map((el, index) => (
        <Chi key={index} toRotate={el.toRotate} period={el.period} />
      ))}
    </div>
    </div>
    </Fade>
       </Col>
       
      </Row>
      </Container>

 

      </div>

    );
}

export default ChiContainer;