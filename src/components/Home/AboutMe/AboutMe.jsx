import React from 'react';
import image from '../../../assets/about-me.jpg';

const AboutMe = () => {
    return (
        <div id="AboutMe" class="container py-5">
            <h1 className='text-uppercase text-center fw-bold my-5'>About Me</h1>
            <div>
                <div class="row">
                    <div class="col-lg-4">
                        <img className="w-100" src={image} alt="Mustaque Nadim"/>
                    </div>
                    <div class="col-lg-8">
                        <p>I'm <span className="fw-bold">Nadim</span>. I'm a passionate <span className="fw-bold">MERN Stack Developer</span>. Currently I'm living in Noakhali, Bangladesh and rambling computer science and engineering field after passing HSC Exam in 2019 from Udayan Higher Secondary School.<br/><br/>Recently, I have completed a course on Web Development which is managed by <span className="fw-bold">Programming Hero</span> named <span className="fw-bold">'Complete Web Development Course with Jhankar Mahbub'</span>. During this course, I've completed <span className="fw-bold">11 projects</span>, including <span className="fw-bold">3 fullstack</span> projects. These projects are attached to my portfolio.</p>
                        <div className="row">
                            <div className="col">
                                <h3>Interests</h3>
                                <hr className="w-50" />
                                <ul>
                                    <li>Creative Projects</li>
                                    <li>Problem Solving</li>
                                    <li>Software Engineering</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Education</h3>
                                <hr className="w-50" />
                                <ul>
                                    <li>
                                        <h5>Complete Web Development Course, 2021</h5>
                                        <p>Programming Hero</p>
                                    </li>
                                    <li>
                                        <h5>Higher Secondary School Certificate Exam (HSC), 2019</h5>
                                        <p>Udayan Higher Secondary School</p>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;