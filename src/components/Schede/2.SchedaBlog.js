import React, { Component } from 'react';
import Navbar from '../1.Navbar.js';
import BlogFiltro from '../BlogComponenti/BlogFiltro.js';
class SchedaBlog extends Component {


  render() {
    return (
      <div>
        <Navbar />
        <div className='testoprogetti'>
        
        <h1><em>"Sezione Blog"</em></h1>
        <p>"Questa sezione sarà riservata agli articoli del  blog, con l'intento di condividere gratuitamente informazioni utili per il beneficio di tutti."</p>
                </div>
          <BlogFiltro/>
      </div>
    );
  }

}

export default SchedaBlog;
