import React from 'react';
import image from '../../assets/about-me.jpg';
import linkedin from '../../assets/linkedin.jpg';
import github from '../../assets/GitHub.png';
import codeForces from '../../assets/codeForces.png';

import c from '../../assets/c.png';
import cpp from '../../assets/cpp.png';
import js from '../../assets/js.png';
import ts from '../../assets/ts.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import mongodb from '../../assets/mongodb.png';
import firebase from '../../assets/firebase.png';
import material from '../../assets/material.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import bootstrap from '../../assets/bootstrap.png';
import sass from '../../assets/sass.png';
import git from '../../assets/Git.png';

const icon = {
    height: '35px',
    width: '35px',
    margin: '10px'
}
const skillIcon = {
    height: '60px',
    width: '60px',
    margin: '10px',
    borderRadius: '50%'
}

const AboutMe = () => {
    
    return (
        <div>
            <div style={{height: "50vh"}} className="banner d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-white text-center">About Me</h1>
                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-lg-2">
                        <img className="w-100" src={image} alt="Mustaque Nadim"/>
                    </div>
                    <div className="col-lg-10">
                        <h4>Hello, my name is</h4>
                        <h1>Mustaque Nadim</h1>
                        <p>I'm a MERN Stack developer specialized in frontend and backend for complex scalable web applications from Bangladesh. I'm curiously and continuously learning new technology to grow my career in this field.</p>
                        <a href="https://www.linkedin.com/in/mustaquenadim/" target="_blank" rel="noreferrer">
                            <img style={icon} src={linkedin} alt=""/>
                        </a>
                        <a href="https://github.com/mustaquenadim" target="_blank" rel="noreferrer">
                            <img style={icon} src={github} alt=""/>
                        </a>
                        <a href="https://codeforces.com/profile/Mustaque_Nadim" target="_blank" rel="noreferrer">
                            <img style={icon} src={codeForces} alt=""/>
                        </a>
                    </div>
                </div>

                <div className="text-center">
                    <h2>Skills</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <h3>Expertise</h3>
                            <img style={skillIcon} src={c} alt=""/>
                            <img style={skillIcon} src={cpp} alt=""/>
                            <img style={skillIcon} src={js} alt=""/>
                            <img style={skillIcon} src={react} alt=""/>
                            <img style={skillIcon} src={html} alt=""/>
                            <img style={skillIcon} src={css} alt=""/>
                            <img style={skillIcon} src={bootstrap} alt=""/>
                        </div>
                        <div className="col-lg-4">
                            <h3>Comfortable</h3>
                            <img style={skillIcon} src={node} alt=""/>
                            <img style={skillIcon} src={express} alt=""/>
                            <img style={skillIcon} src={mongodb} alt=""/>
                            <img style={skillIcon} src={material} alt=""/>
                        </div>
                        <div className="col-lg-4">
                            <h3>Familiar</h3>
                            <img style={skillIcon} src={ts} alt=""/>
                            <img style={skillIcon} src={redux} alt=""/>
                            <img style={skillIcon} src={firebase} alt=""/>
                            <img style={skillIcon} src={sass} alt=""/>
                            <img style={skillIcon} src={git} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;