import React, {useState, useEffect}  from 'react';
import '../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Scriptscritta.js';
import white from '../img/white.jpg';



const Contattis1 = () => {

    return(
       <div>
<Container fluid>



    <Row>

    <Col id="ColHover" className=' thumb colRight ' md={2}>
        <h1 className='vertical-rl '>SEZIONI</h1>
       </Col>



        <Col className=" ProgettiColonna3" >

  
        <div class="responsive">
        <div class="gallery">
            <div class="content">
                <div class="content-overlay"></div>

                <img src={white}  width="80%" height="280px"/>
                    <div class="content-details fadeIn-bottom">
                    <h3 href="" class="content-title buttone">BLOG</h3>
                
                </div>
            </div>
        </div>
    </div>
    




    <div class="responsive">
        <div class="gallery">
            <div class="content">
                <div class="content-overlay"></div>

                <img src={white}  width="80%" height="280px"/>
                    <div class="content-details fadeIn-bottom">
                    <h3 href="" class="content-title buttone">CONTATTI</h3>
                
                </div>
            </div>
        </div>
    </div>
    
    




    <div class="responsive">
        <div class="gallery">
            <div class="content">
                <div class="content-overlay"></div>

                <img src={white}  width="80%" height="280px"/>
                    <div class="content-details fadeIn-bottom">
                    <h3 href="" class="content-title buttone">CHI SONO</h3>
                
                </div>
            </div>
        </div>
    </div>



      
    
        
        </Col>
       
      </Row>
      
      </Container>

 

      </div>

    );
}

export default Contattis1;