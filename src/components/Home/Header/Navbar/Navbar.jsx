import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [navStyle, setNavStyle] = useState({backgroundColor: 'transparent'});
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 100) {
                setNavStyle({ backgroundColor: '#0c243f', transition: '0.7s' })
            } else {
                setNavStyle({ backgroundColor: 'transparent' })
            }
        }
    }, []);
    return (
        <nav style={navStyle} class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto text-center">
                        <li class="nav-item px-2">
                            <a class="nav-link active" aria-current="page" href="#Home">Home</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#AboutMe">About Me</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#Skills">Skills</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#Projects">Projects</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#Blogs">Blogs</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#Services">Services</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;