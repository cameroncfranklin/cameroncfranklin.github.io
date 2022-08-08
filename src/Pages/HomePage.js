import React from 'react'; 
import Zheadshot from '../Assets/Headshot_Zoom.jpg'; 
import Resume from '../Assets/Resume_2022.pdf';


const HomePage = () => (
  <React.Fragment>
    <section className="sect-slide" >

      {/********************* PROFILE CARD **********************/}
      <div className="card">
        <img src={Zheadshot} alt="" id="yourImg" width="150vw" height="150vw" /> 
        <a href="https://www.cs.usc.edu/academic-programs/masters/software-engineering/"> <h5> USC Software Engineering (M.S) </h5> </a>
        <div className = "card-icons" >
          <a href="https://linkedin.com/in/cameron-franklin-profile"target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
          <a href="https://www.facebook.com/cam.franklin.58"target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com/camcolefrank/"target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a>
          <a href="https://twitter.com" target="blank" rel="noopener noreferrer"><i class="fa fa-twitter" title="I don't do Twitter just yet; maybe one day!"></i></a>
          <a href="https://youtube.com" target="blank" rel="noopener noreferrer"><i class="fa fa-youtube" title="I do some sports commentary on YouTube, with about 3,000 subs. Email me if you'd like the link to my channel!"></i></a>
        </div>
      </div>
      <br/>

      {/********************* DYNAMIC TITLES **********************/}
      <div className="wrapper">
        <div className="static-txt">Cameron Franklin |</div> 
        <ul className="dynamic-txts">
          <li><span>Software Engineer</span></li>
          <li><span>Graduate Student</span></li>
          <li><span>Content Creator</span></li>
          <li><span>L.A Native</span></li>
        </ul>
      </div>
      <br/>

      {/********************* IN-LINE LINKS **********************/}        
      <h3> 
        <a href="mailto:cameroncolbyfranklin@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>| 
        <a href={"https://linkedin.com/in/cameroncfranklin"} target="_blank" rel="noopener noreferrer">LinkedIn</a>| 
        <a href={"https://github.com/cameroncfranklin"} target="blank" rel="noopener noreferrer">Github</a>| 
        <a href="https://bit.ly/3bsN5Su" target="blank" rel="noopener noreferrer">U.S. Patent</a>| 
        <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a> 
      </h3>

      {/********************* NAVIGATION ARROW **********************/}
      <a href="#tab-about"> 
        <div className="arrow" title="Scroll down to find more about me! (Or use the navigation bar above)"> 
          <span> </span>
          <span> </span>
          <span> </span>
        </div>
      </a>
    </section>
  </React.Fragment>
  )

export default HomePage;