import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

const Banner = () => {
    return (
        <div id="Home" style={{height: "100vh"}} className="banner-image d-flex justify-content-center align-items-center">
            <div className="container text-white">
                <h1 style={{fontSize: "60px"}}>Mustaque Nadim</h1>
                <Typical steps={['MERN Stack Developer', 1000, 'Programmer', 1000, 'Problem Solver', 1000]} loop={Infinity} wrapper="h3" />
                <div className="d-flex">
                    <a href="https://drive.google.com/u/0/uc?id=1WP9oYYRPF3d589Wl7bXrHwnJeiX1fKy2&export=download" target="_blank" rel="noreferrer">
                        <button className="btn btn-danger rounded-0 m-1 px-4">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;