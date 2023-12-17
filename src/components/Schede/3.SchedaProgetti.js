import Navbar from '../1.Navbar';
import Contattis from '../5.Contattis.js';
import ContattiProgetti from '../ContattiProgetti';
import Bio from '../ChiComponenti/1.Bio.js';
import Progetti from '../3.Progetti.js';

import Progetti1 from '../Progetti1.js';
const SchedaProgetti = () => {

    return(

        <div>
    <Navbar/>
    <div className='testoprogetti'>
        
<h1><em>"Sezione Progetti"</em></h1>
<p>Questo spazio sarà dedicato alla pubblicazione di tutti i miei progetti, indipendentemente che siano di natura personale o lavorativa.</p>
        </div>
    <Progetti1/>
   
    </div>
    

    );
}

export default SchedaProgetti;