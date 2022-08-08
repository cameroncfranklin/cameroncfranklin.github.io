import React from 'react';
import tunnel from './Assets/tunnel.mp4';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ExperiencePage from './Pages/ExperiencePage';
import EducationPage from './Pages/EducationPage';
import ProjectsListPage from './Pages/ProjectsListPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
// import { Link } from 'react-router-dom';

const NavBar = () => (
  <React.Fragment>
    
    {/********************* BACKGROUND VIDEO **********************/}
    <video className='videoTag' autoPlay playsInLine loop muted>
      <source src={tunnel} type='video/mp4' />
    </video>

    {/********************* NAVIGATION BAR **********************/}
    <section className="tabs">
      <nav className="tabs-container">
      <a className="tab" href="#tab-home"><span>Home</span></a>
      <a className="tab" href="#tab-about"><span>About</span></a>
      <a className="tab" href="#tab-education"><span>Education</span></a>
      <a className="tab" href="#tab-experience"><span>Experience</span></a>
      <a className="tab" href="#tab-projects"><span>Projects</span></a>
      <span className="tab-slider"></span>
      </nav>
      {/* <nav className="tabs-container">
        <Link to="/" className="tab">Home</Link>
        <Link to="/about" className="tab">About</Link>
        <Link to="/experience" className="tab">Experience</Link>
        <Link to="/education" className="tab">Education</Link>
        <Link to="/projects-list" className="tab">Projects</Link>
      </nav> */}
    </section>

    {/********************* PAGES **********************/}
    <main>
      <section className="sect-slide" id="tab-home">
        <HomePage />
      </section>
      <section className="pages-full" id="tab-about">
        <AboutPage />
      </section>
      <section className="tilesWrap" id="tab-education">
        <EducationPage />
      </section>
      <section className="tilesWrap" id="tab-experience">
        <ExperiencePage />
      </section>
      <section className="pages-normal" id="tab-projects">
        <ProjectsListPage />
      </section>
    </main>
  </React.Fragment>
);

export default NavBar;