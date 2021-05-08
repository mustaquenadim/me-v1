import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

const Banner = () => {
    return (
        <div style={{height: "100vh"}} className="banner-image d-flex justify-content-center align-items-center">
            <div className="container text-white">
                <h1 style={{fontSize: "80px"}}>I'm Nadim</h1>
                <Typical steps={['MERN Stack Developer', 1000, 'Programmer', 1000, 'Problem Solver', 1000]} loop={Infinity} wrapper="h3" />
                <div className="d-flex">
                    <a href="https://drive.google.com/u/0/uc?id=1WP9oYYRPF3d589Wl7bXrHwnJeiX1fKy2&export=download" target="_blank" rel="noreferrer">
                        <button className="btn btn-danger rounded-pill m-1">Resume</button>
                    </a>
                    <Link to="/projects">
                        <button className="btn btn-danger rounded-pill m-1">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
