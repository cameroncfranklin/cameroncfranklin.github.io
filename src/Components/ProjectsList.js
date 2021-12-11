import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsList = ({ projects }) => (
    <React.Fragment> 
    {projects.map((project, key) => (
        <Link title="Click a project and scroll down to see details!" classNamekey = {key} to={`/projects/${project.name}`}>
            <h3>{project.title}</h3>    
            <p>{project.content[0].substring(0,150)}...</p>
        </Link>
        ))}

    </React.Fragment>
);



export default ProjectsList;