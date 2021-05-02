import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [navStyle, setNavStyle] = useState({backgroundColor: 'transparent'});

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 100){
                setNavStyle({
                    backgroundColor: '#0c243f',
                    transition: '0.7s'
                })
            }
            else{
                setNavStyle({
                    backgroundColor: 'transparent',
                })
            }
        }
    }, [window.pageYOffset]);
    
    return (
        <nav style={navStyle} className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Mustaque Nadim</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeStyle={{fontWeight: "bold", color: "white"}} className="nav-link" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{textDecoration: 'none', fontWeight: "bold", color: "white"}} className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{fontWeight: "bold", color: "white"}} className="nav-link" to="/blogs">Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{fontWeight: "bold", color: "white"}} className="nav-link" to="/about">About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{fontWeight: "bold", color: "white"}} className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;