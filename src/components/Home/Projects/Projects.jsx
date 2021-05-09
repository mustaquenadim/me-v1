import React, { useEffect, useState } from 'react';
import projectData from './ProjectData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        setProject(projectData);
        console.log(projectData);
    }, []);
    return (
        <div id='Projects' className='container py-5'>
            <h1 className='text-uppercase text-center fw-bold py-5'>
                Projects
            </h1>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {project.map((card) => (
                    <div className='col'>
                        <div className='card h-100 shadow rounded-0 border-0'>
                            <img
                                src={card.image}
                                className='card-img-top'
                                alt='...'
                            />
                            <div className='card-body'>
                                <h5 className='card-title fw-bold'>
                                    {card.projectName}
                                </h5>
                                <p className='card-text text-secondary'>
                                    {card.description}
                                </p>
                                {card.technology.map((tech) => (
                                    <button className='btn btn-warning rounded-0 m-1'>
                                        {tech}
                                    </button>
                                ))}
                            </div>
                            <div className='card-footer border-0 bg-transparent'>
                                <a
                                    href={card.liveSite}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className='btn btn-success rounded-0 m-1'>
                                        <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                        />{' '}
                                        Live Site
                                    </button>
                                </a>
                                <a
                                    href={card.code}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className='btn btn-success rounded-0 m-1'>
                                        <FontAwesomeIcon icon={faGithub} /> Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
