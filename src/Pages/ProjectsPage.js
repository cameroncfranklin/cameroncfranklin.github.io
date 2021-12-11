import React, { useState, useEffect } from 'react'; // This is how we add React to our Pages
// Our components don't have any form of memory, so state gives us a place to temp. store info from the server
// React hooks allow to abstract away state management from our components
import projectsContent from './projects-content';
import ProjectsList from '../Components/ProjectsList';
import UpvotesSection from '../Components/UpvotesSection';
import CommentsList from '../Components/CommentsList';
import AddCommentForm from '../Components/AddCommentForm';
import NotFoundPage from './NotFoundPage';
// We'll create the ProjectsPage component here
// React router sends the match prop to our component, which contains information such as the current url and if matches the route's path
const ProjectsPage = ({ match }) => {
   // Fetch is the built-in API we can use to connect the front/back ends. Tells which endpoint to hit

   const name = match.params.name;
   // Want to find the project from our projects array that has the right name
   const project = projectsContent.find(project => project.name === name);
   
   // Here is where we'll setup our state and pass the initial value of project info and a function to set that info
   const [projectInfo, setProjectInfo] = useState({ upvotes: 0, comments: [] });

   // To actually make the request to the backend to load project info, we'll need another react hook called useEffect
   useEffect(() => {
      const fetchData = async () => {
         const result = await fetch(`/api/projects/${name}`);
         const body  = await result.json();
         setProjectInfo(body);
      }
      fetchData();
      setProjectInfo({ upvotes: Math.ceil(Math.random() * 10)});
   }, [name]); // We pass the empty array to tell useEffect that we only want it to call when the component's name changes

   // Error message
   if (!project) return <NotFoundPage />
   
   // Recommended articles
   const otherProjects = projectsContent.filter(project => project.name !== name);

   // Then we'll convert the article info into JSX by using the title and content parameters
   return (
      <React.Fragment>
         <section className="pages-project" id="tab-project">
            <h1> {project.title}</h1>
            <UpvotesSection projectName = {name} upvotes = {projectInfo.upvotes} setProjectInfo = {setProjectInfo} />
            {project.content.map((paragraph, key) => (
               <p key={key}> {paragraph} </p>
            ))}
            {/* <AddCommentForm projectName={name} setProjectInfo={setProjectInfo}/>
            <CommentsList comments={projectInfo.comments} /> */}
            <br/>
            <h3>Other Projects:</h3>
            {/* Important React feature: Didn't have to write anymore code for this*/}
            <ProjectsList projects={otherProjects} />
         </section>
      </React.Fragment>
   );
}

// Need to export our page 
export default ProjectsPage;