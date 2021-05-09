import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import Header from './Header/Header';
import Blogs from './Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Blogs />
            {/* <Services /> */}
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;