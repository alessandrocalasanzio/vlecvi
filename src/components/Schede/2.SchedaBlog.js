import React, { Component } from 'react';
import Navbar from '../1.Navbar';
import Blog from '../4.Blog.js';
import BlogFiltro from '../BlogFiltro';
class SchedaBlog extends Component {


  render() {
    return (
      <div>
        <Navbar />
        <div className='testoprogetti'>
        
        <h1><em>"Sezione Blog"</em></h1>
        <p>Questo spazio sarà dedicato alla pubblicazione di tutti i miei progetti, indipendentemente che siano di natura personale o lavorativa.</p>
                </div>
          <BlogFiltro/>
      </div>
    );
  }

}

export default SchedaBlog;
