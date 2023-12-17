import React, {useState, useEffect}  from 'react';
import {Link} from 'react-router-dom';

import '../App.js';
import $ from 'jquery';

const Navbar1 = () => {


    return(
<nav class="navbar navbar-expand-lg navbar-light" >

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>

</button>
             <Link to="/">
    <a class="navbar-brand" href="#">Vlecvi</a>
    </Link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
        <Link to="/chisono">
            <li class="nav-item">
                <a class="nav-link">Chi Sono</a>
            </li>
            </Link>
            <Link to="/progetti">
            <li class="nav-item">
                <a class="nav-link">Progetti</a>
            </li>
            </Link>
            <Link to="/blog">
            <li class="nav-item">
                <a class="nav-link">Blog</a>
            </li>
            </Link>
            <Link to="/contatti">
            <li class="nav-item">
                <a class="nav-link">Contatti</a>
            </li>
            </Link>
        </ul>
    </div>
</nav>
    );
}

export default Navbar1;