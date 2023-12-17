import React, { Component } from 'react';
import Navbar from '../1.Navbar';
import Blog from '../4.Blog.js';
import BlogFiltro from '../BlogFiltro';
class SchedaBlog extends Component {


  render() {
    return (
      <div>
        <Navbar />
          <BlogFiltro/>
      </div>
    );
  }

}

export default SchedaBlog;
