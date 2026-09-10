import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {


    return(
<nav className="navbar navbar-expand-lg navbar-light fixed-top" >

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>

</button>
            
    <Link className="navbar-brand" to="/">Vlecvi</Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
        <Link to="/chisono">
            <li className="nav-item">
                <span className="nav-link">Chi Sono</span>
            </li>
            </Link>
            <Link to="/progetti">
            <li className="nav-item">
                <span className="nav-link">Progetti</span>
            </li>
            </Link>
            <Link to="/blog">
            <li className="nav-item">
                <span className="nav-link">Blog</span>
            </li>
            </Link>
            <Link to="/contatti">
            <li className="nav-item">
                <span className="nav-link">Contatti</span>
            </li>
            </Link>
        </ul>
    </div>
</nav>
    );
}

export default Navbar;