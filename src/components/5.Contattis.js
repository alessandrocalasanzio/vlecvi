import React, { useState, useEffect } from 'react';
import '../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './7.Scriptscritta.js';
import white from '../img/white.jpg';
import { Link } from 'react-router-dom';


import { Fade } from 'react-reveal';

const Contattis = () => {

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className=" ProgettiColonnaContatti" >
                        <Fade>

<div>
                        <div class="responsive">
                            <div class="gallery">
                                <div class="content">
                                    <div class="content-overlay"></div>

                                    <a href="mailto:acalasanzio@outlook.com" className="content-link">
                                        <img src={white} width="80%" height="280px" alt="Mail Icon" />
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title buttone">MAIL</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>





                        <div class="responsive">
                            <div class="gallery">
                                <div class="content">
                                    <div class="content-overlay"></div>

                                    <a href="https://www.linkedin.com/in/alessandro-calasanzio/" target="_blank" className="content-link">
                                        <img src={white} width="80%" height="280px" alt="LinkedIn Icon" />
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title buttone">LINKEDIN</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>






                        <div class="responsive">
                            <div class="gallery">
                                <div class="content">
                                    <div class="content-overlay"></div>
                                    <a href="https://www.instagram.com/vlecvi/" target="_blank" className="content-link">
                                        <img src={white} width="80%" height="280px" alt="LinkedIn Icon" />
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title buttone">IG</h3>
                                        </div>
                                    </a>
                                   
                                </div>
                            </div>
                        </div>

                        </div>

                        </Fade>


                    </Col>

                    <Col id="ColHover" className=' thumbContatti colRight ' md={2}>
                       <Fade>
                        <Link to="/contatti">
                            <h1 className='vertical-rl1 '><small className='more'>More to</small>Contatti</h1>
                        </Link>
                        </Fade>
                    </Col>
                </Row>

            </Container>



        </div>

    );
}

export default Contattis;