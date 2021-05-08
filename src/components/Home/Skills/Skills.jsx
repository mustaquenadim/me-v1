import React from 'react';

const Skills = () => {
    return (
        <div id="Skills" class="container py-5">
            <h1 className='text-center text-uppercase fw-bold py-5'>Skills</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
                <div class="col">
                    <div class="card h-100 rounded-0">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Frontend</h5>
                            <p class="card-text">React JS, Material-UI, Styled Component, Bootstrap, HTML, CSS</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 rounded-0">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Backend</h5>
                            <p class="card-text">Node JS, Express JS</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 rounded-0">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Database</h5>
                            <p class="card-text">MongoDB</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 rounded-0">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Hosting Platform</h5>
                            <p class="card-text">Heroku, Firebase, Github</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 rounded-0">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Programming Language</h5>
                            <p class="card-text">JavaScript, C, C++</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 rounded-0">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Others</h5>
                            <p class="card-text">Problem Solving, Basic Data Structures and Algorithms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;