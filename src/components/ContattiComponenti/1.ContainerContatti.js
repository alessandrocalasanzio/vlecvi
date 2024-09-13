import React, {useState, useEffect}  from 'react';
import '../../App.js';
import '../../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import me from '../../img/me.jpg';
import office from '../../img/office.jpg';

import Slider from "react-slick";

const Bio = () => {

    return(
        <div>

      <Container fluid  className='noBarra no-gutters noOver'>
      <Row>
       <Col  id="ColHover" className="bordoColonnaContattiimg" md={1}  >
          <div>
       <img class="resizeImg" src={office}/>
          </div>
        
          
        </Col>
        
        <Col className=' thumbMobile bordoColonnaimg'>

        <Col  id="ColHover" className="bordoColonnaContatti"  >
          <div className='sticky-top'>
       
         <h1 className='vertical-rl sticky-top'>Info Contatti</h1>
          </div>
       </Col>
       <div className='testoBio'>
       <h1><em>“Benvenuto nella sezione Contatti!”</em></h1>
       <p> Qui troverai vari modi per raggiungermi, sia per scambiare quattro chiacchiere che per discutere di opportunità lavorative. La tua opinione e il tuo interesse sono importanti per me, e sono sempre aperto a nuove esperienze e connessioni professionali.</p>
<p>Puoi trovare il mio background professionale e il mio CV Digitale direttamente su <a href="https://www.linkedin.com/in/alessandro-calasanzio/" target="_blank" className="content-link">Linkedin.</a> </p> 

       <h1><em>“Perché Contattarmi?”</em></h1>
      

       <p>Sono sempre entusiasta di ascoltare nuove idee, condividere esperienze e stabilire nuove connessioni. Che tu stia cercando collaborazioni o semplicemente una conversazione informale.</p>


<p><br/>Alessandro</p>
</div>
       </Col>

      </Row>


       
</Container>



</div>

    );
}

export default Bio;