import React, { useState, useEffect } from "react";
import Navbar from "./1.Navbar";
import SpotifyPlayer from 'react-spotify-api';
import { Col, Row } from "react-bootstrap";


const Musica = () => {
  return (
    <div>
      <Navbar />

      <Row>

        <Col className="bordoColonna" md={2} >
          <div className='sticky-top'>

            <h1 className='vertical-rl sticky-top '>Rap Italiano</h1>

          </div>
        </Col>
        <Col  style={{ height: '950px !important' }}>
          <div className="spotify" >
          <iframe wide className="spotify1"
      style={{ borderRadius: '0px !important' }}
      src="https://open.spotify.com/embed/playlist/3hXbzzSZiMqLbFmbAd9lur?utm_source=generator"
      width="100%"
      height="350px"
      frameBorder="0px"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
          </div>
        </Col>
        </Row>


        <Row>
        <Col>
          <div className="spotify">
          <iframe wide className="spotify1"
          src="https://open.spotify.com/embed/playlist/7Ie5jcc3kFiTExVTCmAi8H?utm_source=generator"
          width="100%" 
          height="152" 
          frameBorder="0" 
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">

          </iframe>

          </div>

        </Col>




          <Col id="ColHover" className=' thumbSpotify colRight ' md={2}>
          
              <h1 className='vertical-rl1'>Rap Americano</h1>
          
          </Col>


        </Row>

        <Row>

        <Col className="bordoColonna" md={2} >
          <div className='sticky-top'>

            <h1 className='vertical-rl sticky-top '>Pop Italiano</h1>

          </div>
        </Col>
        <Col>
          <div className="spotify">
          <iframe wide className="spotify1"
      style={{ borderRadius: '0px !important' }}
      src="https://open.spotify.com/embed/playlist/0wmyFWzkj6UYDINiA1mB9i?si=fb7e3ee163bf4135"
      width="100%"
      height="100%"
      frameBorder="0px"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
          </div>
        </Col>
        </Row>


        <Row>
        <Col>
          <div className="spotify">
          <iframe wide className="spotify1"
      style={{ borderRadius: '0px !important' }}
      src="https://open.spotify.com/embed/playlist/5CSj9iP4WgAUsGZIQlOPQ7?si=b3a316dc9fd34bdf"
      width="100%"
      height="300"
      frameBorder="0px"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>

          </div>

        </Col>




          <Col id="ColHover" className=' thumbSpotify colRight ' md={2}>
          
              <h1 className='vertical-rl1'>Dance</h1>
          
          </Col>


        </Row>


    </div>
  );
};

export default Musica;