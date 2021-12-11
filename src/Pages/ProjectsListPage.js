import React from 'react';
// import { Link } from 'react-router-dom'; // No longer using this because we moved it to resuable projects list.
import ProjectsList from '../Components/ProjectsList';
import projectsContent from './projects-content';

const ProjectsListPage = () => (
    <React.Fragment>
        <section className="sect-slide">
            <h1>Projects</h1>
            <h6> Click on a project and scroll down to the next page to see the details.</h6>
            <br/>
            <ProjectsList projects={projectsContent}/>
        </section>

        <a href="#tab-project"><div className="arrow-2" title="Click on me to see a project! (after you've clicked one above already)"> 
          <span> </span>
          <span> </span>
          <span> </span>
        </div>
        </a>

    </React.Fragment>
)

export default ProjectsListPage;








// Previous code (before using ProjectsList as a component)
        /* { {projectsContent.map((project, key) => (
            <Link className="article-list-item" key ={key} to={`/projects/${project.name}`}>
                <h3>{project.title}</h3>
            {/*Now lets create a text preview/sample from the projects 
            It'd probably be a better practice to have this list as its own reusable component}    
            {<p>{project.content[0].substring(0,150)}...</p>
            </Link>
        ))} } } */