import React from 'react'; 
import PepperdineLogo from '../Assets/Pepperdine-logo.jpg'; 
import USCLogo2 from '../Assets/USC-logo2.png';
import AVCLogo from '../Assets/AVC-logo.png';
import SOARLogo from '../Assets/SOAR-logo.png';
import EducationTile from '../Components/EducationTile';

const props = {
	soarClass: "'18",
	avcClass: "'18",
	pepperdineClass: "'21",
	uscClass: '23',
	soarName: "SOAR High School",
	avcName: "Antelope Valley College",
	pepperdineName: "Pepperdine University",
	uscName: "University of Southern California",
	soarLogo:SOARLogo,
	avcLogo: AVCLogo,
	pepperdineLogo: PepperdineLogo,
	uscLogo: USCLogo2,
	soarGrad: "Graduated 2018 (Cum Laude)",
	avcGrad: "A.A in Arts & Humanities | Graduated 2018 (Cum Laude)",
	pepperdineGrad: "B.S in Computer Science/Mathematics | Graduated 2021",
	uscGrad: "M.S in Computer Science | Expected 2023",
	soarSummary: "Attended this early college high school, where I concurrently took high school courses, and college courses and graduated with both my high school diploma and an A.A degree.",
	avcSummary: "While concurrently attending SOAR High School, I was enrolled full-time at AVC and graduated with my Associates degree in Arts and Humanities as I finished high school.",
	pepperdineSummary: "I was able to graduate Pepperdine University a year early, thanks to getting my A.A degree while in high school. While at Pepperdine, I was a member of the Black Student Union, an executive board member of Cal Psi Sigma Phi Epsilon, a Resident Advisor on campus, and an attendee of the Campus church.",
	uscSummary: "I was admitted to USC for the Spring of 2022, and will be pursuing a Masters degree in Computer Science. I was briefly enrolled in the Computer Engineering program (for the Fall of 2021) before applying for my current program.",
	soarLink: "https://www.soarhs.org/about",
	avcLink: "https://www.avc.edu/academics/ah",
	pepperdineLink: "https://seaver.pepperdine.edu/natural-science/undergraduate/computer-science/",
	uscLink: "https://www.cs.usc.edu/academic-programs/masters/software-engineering/"
}	


const EducationPage = () => (
    <React.Fragment>
		<section className ="tilesWrap">

			{/********************* EDUCATION TILES **********************/}
			<section className="tilesWrap">
				<h1>Education</h1>
				<EducationTile year={props.soarClass} school={props.soarName} logo={props.soarLogo} gradYear={props.soarGrad} summary={props.soarSummary} link={props.soarLink}/>
				<EducationTile year={props.avcClass} school={props.avcName} logo={props.avcLogo} gradYear={props.avcGrad} summary={props.avcSummary} link={props.avcLink}/>
				<EducationTile year={props.pepperdineClass} school={props.pepperdineName} logo={props.pepperdineLogo} gradYear={props.pepperdineGrad} summary={props.pepperdineSummary} link={props.pepperdineLink}/>
				<EducationTile year={props.uscClass} school={props.uscName} logo={props.uscLogo} gradYear={props.uscGrad} summary={props.uscSummary} link={props.uscLink}/>
			</section>
		</section>
    </React.Fragment>
)

export default EducationPage;