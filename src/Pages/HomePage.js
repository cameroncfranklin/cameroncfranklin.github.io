import React from 'react'; // This is how we add React to our Pages
import Zheadshot from '../Assets/Headshot_Zoom.jpg'; 
import Resume from '../Assets/Resume_2021.pdf';
// import { render } from 'react-dom';



// We'll create the HomePage component here
const HomePage = () => (
  <React.Fragment>

    <section className="sect-slide" >
      <div className="card">
        <img src={Zheadshot} alt="" id="yourImg" width="150" height="150" /> 
        <a href="https://www.cs.usc.edu/academic-programs/masters/software-engineering/"> <h5> USC Software Engineering (M.S) </h5> </a>
        <div className = "card-icons" >
          <a href="https://linkedin.com/in/cameron-franklin-profile"target="_blank"><i class="fa fa-linkedin"></i></a>
          <a href="https://www.facebook.com/cam.franklin.58"target="_blank"><i class="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com/camcolefrank/"target="_blank"><i class="fa fa-instagram"></i></a>
          <a href="https://twitter.com" target="blank"><i class="fa fa-twitter" title="I don't do Twitter just yet; maybe one day!"></i></a>
          <a href="https://youtube.com" target="blank"><i class="fa fa-youtube" title="I do some sports commentary on YouTube, with about 3,000 subs. Email me if you'd like the link to my channel!"></i></a>
        </div>
        {/* <p><button>Contact</button></p> */}
      </div>

        {/* <h1> Welcome </h1> */}
        <br/>
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
        <h3> 
          <a href="mailto:cameroncolbyfranklin@gmail.com" target="_blank">Email</a> | Phone: 661-718-7466 | <a href={"https://github.com/cameroncfranklin"} target="blank">Github</a> | <a href="https://bit.ly/3bsN5Su" target="blank">U.S. Patent</a> | <a href={Resume} target="_blank"> Resume</a> 
        </h3>

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