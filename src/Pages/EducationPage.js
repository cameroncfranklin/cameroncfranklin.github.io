import React from 'react'; // This is how we add React to our Pages
import PepperdineLogo from '../Assets/Pepperdine-logo.jpg'; 
import USCLogo2 from '../Assets/USC-logo2.png';
import AVCLogo from '../Assets/AVC-logo.png';
import SOARLogo from '../Assets/SOAR-logo.png';
// We'll create the EducationPage component here
const EducationPage = () => (
    <React.Fragment>
    <section className ="tilesWrap">
        <section className="tilesWrap">
        <h1>Education</h1>
        <li>
		<h2>'18</h2>
		<h3>SOAR High School</h3>
        <img src={SOARLogo} alt="SOARLogo" width="150" height="150" id="aligned-logo" />
        <h4>Graduated 2018</h4> 
		<p>
        Attended this early college high school, where I concurrently took high school courses
        and college courses and graduated with both my high school diploma and an A.A degree.
		</p>
		<a href="https://www.soarhs.org/about"target="blank"><button>Learn more</button></a>
	</li>
	<li>
		<h2>'18</h2>
		<h3>Antelope Valley College</h3>
        <img src={AVCLogo} alt="AVCLogo" width="150" height="150" id="aligned-logo" />
        <h4>A.A in Arts & Humanities | Graduated 2018 (Cum Laude) </h4>
		<p>
			While concurrently attending SOAR High School, I was enrolled full-time at AVC and 
            graduated with my Associates degree in Arts and Humanities as I finished high school.
		</p>
		<a href="https://www.avc.edu/academics/ah" target="blank"><button>Learn more</button></a>
	</li>
	<li>
		<h2>'21</h2>
		<h3>Pepperdine University</h3>
        <img src={PepperdineLogo} alt="PepperdineLogo" width="150" height="150" id="aligned-logo" />
        <h4>B.S in Computer Science/Mathematics | Graduated 2021 </h4>
		<p>
           I was able to graduate Pepperdine University a year early, thanks to getting my A.A degree
           while in high school. While at Pepperdine, I was a member of the Black Student Union, an 
           executive board member of Cal Psi Sigma Phi Epsilon, a Resident Advisor on campus, and an 
           attendee of the Campus church.
		</p>
		<a href="https://seaver.pepperdine.edu/natural-science/undergraduate/computer-science/" target="blank"><button>Learn more</button></a>
	</li>
	<li>
		<h2>'24</h2>
		<h3>University of Southern California</h3>
        <img src={USCLogo2} alt="USCLogo" width="150" height="150" id="aligned-logo" />
        <h4>M.S in Computer Science (Software Engineering) | Expected 2024 </h4>
		<p>
            I was admitted to USC for the Spring of 2022, and will be pursuing a Masters degree in 
            Computer Science (Software Engineering). I was briefly enrolled in the Computer Engineering
            program (for the Fall of 2021) before applying for my current program.
		</p>
		<a href="https://www.cs.usc.edu/academic-programs/masters/software-engineering/" target="blank"><button>Learn more</button></a>
	</li>
        </section>
        </section>
    </React.Fragment>
    
)

// Need to export our page 
export default EducationPage;