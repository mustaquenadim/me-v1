import React, { useEffect, useState } from 'react';
import projectData from './ProjectData.json';

const Projects = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        setProject(projectData);
        console.log(projectData);
    }, []);
    return (
        <div id="Projects" className="container py-5">
            <h1 className="text-uppercase text-center fw-bold py-5">Projects</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {project.map(card => (
                    <div class="col">
                        <div class="card h-100">
                            <img src={card.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title fw-bold">{card.projectName}</h5>
                                <p class="card-text text-secondary">{card.description}</p>
                            </div>
                            <div class="card-footer border-0 bg-transparent">
                                <a href={card.liveSite} target="_blank" rel="noreferrer">
                                    <button className="btn btn-success m-1">Live Site</button>
                                </a>
                                <a href={card.code} target="_blank" rel="noreferrer">
                                    <button className="btn btn-success m-1">Code</button>
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