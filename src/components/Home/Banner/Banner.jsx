import React from 'react';

const Banner = () => {
    return (
        <div style={{height: "100vh"}} className="banner-image d-flex justify-content-center align-items-center">
            <div className="container text-white">
                <h5>Hello</h5>
                <h1 style={{fontSize: "80px"}}>I'm Nadim</h1>
                <h2>MERN Stack Developer</h2>
                <div className="d-flex">
                    <button className="btn btn-danger rounded-pill">Resume</button>
                    <button className="btn btn-danger rounded-pill">Projects</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
