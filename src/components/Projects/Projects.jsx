import React, { useEffect, useState } from 'react';
import projects from '../../Data/Projects.json';

const Projects = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        setProject(projects);
        console.log(projects[0].technology)
    }, []);
    return (
        <div>
            <div style={{ height: '50vh' }} className='banner d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='text-white text-center'>Projects</h1>
                </div>
            </div>
            <div className='container py-5'>
                {project.map(card => (
                    <div class='card mb-3'>
                        <div class='row g-0'>
                            <div class='col-md-4 scroll'>
                                <img className='w-100 ss' src={card.image} alt='...' />
                            </div>
                            <div class='col-md-8'>
                                <div class='card-body'>
                                    <h4 class='card-title'>{card.projectName}</h4>
                                    <h6>Description</h6>
                                    <p class='card-text'>{card.description}</p>
                                    {card.technology.map(tech => (<button className="btn btn-primary m-1">{tech}</button>))}
                                    <br/>
                                    <a href={card.liveSite}></a><a href=""></a>
                                    <button className="btn btn-success m-1">Live Site</button>
                                    <button className="btn btn-success m-1">Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
