import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faDatabase,
    faHSquare,
    faNetworkWired,
    faServer,
    faTv,
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    const skillIcon = {
        height: '50px',
        width: '50px',
    };
    return (
        <div id='Skills' className='container py-5'>
            <h1 className='text-center text-uppercase fw-bold py-5'>Skills</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4 text-center'>
                <div className='col'>
                    <div className='card h-100 rounded-0 p-3'>
                        <FontAwesomeIcon
                            icon={faTv}
                            className='m-auto'
                            style={skillIcon}
                        />
                        <div className='card-body'>
                            <h5 className='card-title fw-bold'>Frontend</h5>
                            <p className='card-text'>
                                React JS, Material-UI, Styled Component,
                                Bootstrap, HTML, CSS
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card h-100 rounded-0 p-3'>
                        <FontAwesomeIcon
                            icon={faServer}
                            className='m-auto'
                            style={skillIcon}
                        />
                        <div className='card-body'>
                            <h5 className='card-title fw-bold'>Backend</h5>
                            <p className='card-text'>Node JS, Express JS</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card h-100 rounded-0 p-3'>
                        <FontAwesomeIcon
                            icon={faDatabase}
                            className='m-auto'
                            style={skillIcon}
                        />
                        <div className='card-body'>
                            <h5 className='card-title fw-bold'>Database</h5>
                            <p className='card-text'>MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card h-100 rounded-0 p-3'>
                        <FontAwesomeIcon
                            icon={faHSquare}
                            className='m-auto'
                            style={skillIcon}
                        />
                        <div className='card-body'>
                            <h5 className='card-title fw-bold'>
                                Hosting Platform
                            </h5>
                            <p className='card-text'>
                                Heroku, Firebase, Github
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card h-100 rounded-0 p-3'>
                        <FontAwesomeIcon
                            icon={faCode}
                            className='m-auto'
                            style={skillIcon}
                        />
                        <div className='card-body'>
                            <h5 className='card-title fw-bold'>
                                Programming Language
                            </h5>
                            <p className='card-text'>JavaScript, C, C++</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card h-100 rounded-0 p-3'>
                        <FontAwesomeIcon
                            icon={faNetworkWired}
                            className='m-auto'
                            style={skillIcon}
                        />
                        <div className='card-body'>
                            <h5 className='card-title fw-bold'>Others</h5>
                            <p className='card-text'>
                                Git, Github, Problem Solving, Basic Data
                                Structures and Algorithms
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
