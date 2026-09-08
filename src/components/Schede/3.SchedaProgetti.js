import Navbar from '../1.Navbar.js';

import Progetti1 from '../3.1Progetti1.js';
const SchedaProgetti = () => {

    return(

        <div>
    <Navbar/>
    <div className='mastheadSezione'>
      <p className='mastheadSezione__eyebrow'>Sezione Progetti</p>
      <p className='mastheadSezione__lead'>Questo spazio sarà dedicato alla pubblicazione di tutti i miei progetti, indipendentemente che siano di natura personale o lavorativa.</p>
    </div>
    <Progetti1/>
   
    </div>
    

    );
}

export default SchedaProgetti;