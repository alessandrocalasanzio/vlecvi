import React, {useState, useEffect}  from 'react';
import '../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoVlecvi from '../img/LogoVlecvi.png';
import me from '../img/me.jpg';
import ny from '../img/ny.jpg';
import me1 from '../img/me1.webp';
import './7.Scriptscritta.js';
import {Link} from 'react-router-dom';
import BlogFiltro from './BlogComponenti/BlogFiltro.js';

import { Fade } from 'react-reveal';


const Blog = () => {

    return(
       <div>
<Container fluid className="bordiContainerBlog">
    <Row>
        <Col id="ColHover" className="bordoColonna" md={2} >
          <Fade left>
          <Link to="/blog">
        <a>
          <h1 className='vertical-rl'><small className='more'>More to</small>Blog</h1>
          </a>
          </Link>
          </Fade>
        </Col>

       

        <Col className=' thumb'>
         
        <Fade right>
    <div>
        <div class="list-group justify-content-center">
        <Link to="/excel">
  <a href="#" class="list-group-item list-group-item-action hoverBlog">
    <div class=" d-flex1 w-100 justify-content-between">
      <h5 class="mb-1 sopra">Tenere Traccia delle spese con un File Excel</h5>
      <small class="text-muted1">Finanze</small>
    </div>
   
  </a>
  </Link>
  <Link to="/lavoro">
  <a href="#" class="list-group-item list-group-item-action hoverBlog">
    <div class="d-flex1 w-100 justify-content-between">
      <h5 class="mb-1">I migliori siti per trovare lavoro</h5>
      <small class="text-muted1">Liste</small>
    </div>
  </a>
  </Link>
  <Link to="/weblist">
  <a href="#" class="list-group-item list-group-item-action hoverBlog">
    <div class="d-flex1 w-100 justify-content-between ">
      <h5 class="mb-1">WebList</h5>
          <small class="text-muted1">Liste</small>
    </div>
  </a>
  </Link>
</div>
</div>
</Fade>


       </Col>
   
      </Row>
      </Container>



      </div>

    );
}

export default Blog;