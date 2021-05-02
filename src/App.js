import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/projects'>
                    <Projects />
                </Route>
                <Route path='/blogs'>
                    <Blogs />
                </Route>
                <Route path='/about'>
                    <AboutMe />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
