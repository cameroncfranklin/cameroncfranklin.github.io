import React from 'react';
// import { useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import HomePage from './Pages/HomePage'; 
import AboutPage from './Pages/AboutPage';
import ProjectsListPage from './Pages/ProjectsListPage';
import ProjectsPage from './Pages/ProjectsPage';
import EducationPage from './Pages/EducationPage';
import ExperiencePage from './Pages/ExperiencePage';
import NavBar from './NavBar';
import './App.css';
import NotFoundPage from './Pages/NotFoundPage';
import NavBarV3 from './Components/NavBarV3/NavBarV3';
import SingleHomePage from './Pages/SingleHomePage/SingleHomePage';
import ProfileCard from './Components/ProfileCard/ProfileCard';

// "npm start" to run react page locally
function App() {
  return (
    <Router>
      <div className="App">
        {/* Wrap in CSS id */} 
        <div id="page-body">
          <ProfileCard />
          <NavBarV3 />
          {/* Route takes two main props (properties): path (specifies url) and component (specifies component) */}
          <Switch> 
            {/* <Route path ="/" component={HomePage} exact /> */}
            <Route path="/" component={SingleHomePage} exact />
            <Route path="/home" component={SingleHomePage} exact />
            <Route path ="/about" component={AboutPage}  />
            <Route path ="/projects-list" component={ProjectsListPage} />
            <Route path ="/projects/:name" component={ProjectsPage}  /> 
            <Route path ="/experience" component={ExperiencePage}  />   
            {/* When React sees this "name" url parameter: passes prop to the ProjectsPage component that tells the component the value at the url */}
            <Route path ="/education" component={EducationPage}  />     
            {/*NotFoundPage must be the last one since it has no path and is not exact (Thanks to switch, it doesn't render on every page)*/}
            <Route component={NotFoundPage} />
          </Switch>
          <footer>
            <p>Created by Cameron Franklin | 2024</p>
            {/* <p>Stock video by Engin Akyurt from Pixabay </p> */}
          </footer>
        </div>
      </div>
    </Router>    
  );
}

export default App;
