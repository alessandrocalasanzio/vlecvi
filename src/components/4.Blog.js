import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

import { Fade } from 'react-reveal';


const Blog = () => {

    return(
       <div>
<Container fluid className="bordiContainerBlog">
    <Row>
        <Col id="ColHover" className="bordoColonna" md={2} >
          <Fade left>
          <Link to="/blog">
          <h1 className='vertical-rl'><small className='more'>More to</small> Blog</h1>
          </Link>
          </Fade>
        </Col>

       

        <Col className=' thumb'>
         
        <Fade right>
    <div>
        <div class="list-group justify-content-center">
        <Link to="/excel" class="list-group-item list-group-item-action hoverBlog">
    <div class=" d-flex1 w-100 justify-content-between">
      <h5 class="mb-1 sopra">Tenere Traccia delle spese con un File Excel</h5>
      <small class="text-muted1">Finanze</small>
    </div>
  </Link>
  <Link to="/lavoro" class="list-group-item list-group-item-action hoverBlog">
    <div class="d-flex1 w-100 justify-content-between">
      <h5 class="mb-1">I migliori siti per trovare lavoro</h5>
      <small class="text-muted1">Liste</small>
    </div>
  </Link>
  <Link to="/weblist" class="list-group-item list-group-item-action hoverBlog">
    <div class="d-flex1 w-100 justify-content-between ">
      <h5 class="mb-1">WebList</h5>
          <small class="text-muted1">Liste</small>
    </div>
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