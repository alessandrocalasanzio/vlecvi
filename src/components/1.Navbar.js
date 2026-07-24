import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {


    return(
<nav class="navbar navbar-expand-lg navbar-light fixed-top" >

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>

</button>
            
    <a class="navbar-brand" href="https://vlecvi.com">Vlecvi</a>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
        <Link to="/chisono">
            <li class="nav-item">
                <span class="nav-link">Chi Sono</span>
            </li>
            </Link>
            <Link to="/progetti">
            <li class="nav-item">
                <span class="nav-link">Progetti</span>
            </li>
            </Link>
            <Link to="/blog">
            <li class="nav-item">
                <span class="nav-link">Blog</span>
            </li>
            </Link>
            <Link to="/contatti">
            <li class="nav-item">
                <span class="nav-link">Contatti</span>
            </li>
            </Link>
        </ul>
    </div>
</nav>
    );
}

export default Navbar;