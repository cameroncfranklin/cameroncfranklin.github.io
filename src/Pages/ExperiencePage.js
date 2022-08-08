import React from 'react'; 
import PepperdineLogo from '../Assets/Pepperdine-logo.jpg';
import NorthropLogo from '../Assets/Northrop-logo.png';
import FranklinRealtyLogo from '../Assets/FRI-logo.jpg';
import TakeOverLogo from '../Assets/TakeOver-logo.png';
import RedditLogo from '../Assets/Reddit-logo.png';
import Resume from '../Assets/Resume_2022.pdf';
import ExperienceTile from '../Components/ExperienceTile';
// import FollettLogo from '../Assets/Follett-logo.png';

const props = {
	jobOne: "01",
	jobTwo: "02",
	jobThree: "03",
	jobFour: "04",
	jobFive: "05",
	redditPosition: "Software Engineer Intern",
	pepperdinePosition: "Full-Stack Application Developer Intern",
	friPosition: "Software Engineer",
	ngcPosition: "Liaison Engineer Intern",
	takeoverPosition: "Co-Founder, Lead Developer",
	redditName: "Reddit",
	pepperdineName: "Pepperdine University",
	friName: "Franklin Realty & Investments",
	ngcName: "Northrop Grumman Corporation",
	takeoverName: "TakeOver Sports",
	resume: Resume,
	redditLogo: RedditLogo,
	pepperdineLogo: PepperdineLogo,
	friLogo: FranklinRealtyLogo,
	ngcLogo: NorthropLogo,
	takeoverLogo: TakeOverLogo,
	redditSummary: "Contributed to the development of an engine for sustainable self-serve advertiser growth while working with full-stack applications. Developed in Python, Postgre, SQL, React (Components, TypeScript) and BigQuery. Developed Python models that interacted with databases.",
	pepperdineSummary: "Independently developed web applications/forms within Microsoft’s ASP.NET Framework, front and backend web development (within MVC design pattern, SQL)...",
	friSummary: "Developing full-stack realty website for <a href='https://www.realtor.com/realestateagency/589e37adef4f8b000f0e86e1'  target='blank'>Franklin Realty & Investments</a>, my father's real estate company. This is an ongoing freelance assignment I spearhead in my...",
	ngcSummary: "Aided in the investigation of aircraft non-conformances & developed local additive manufacturing processes using 3D CAD software. Assisted systems engineers in...",
	takeoverSummary: "Co-founded start-up venture for P2P based social media app; where users are both the primary producers and consumers of sports-related content, opposed to the traditional sporting app model (ESPN, BleacherReport, etc.) where users primarily consume content..."
}
const ExperiencePage = () => (
    <React.Fragment>

		{/********************* JOB TILES **********************/}
        <section className="tilesWrap">
			<h1>Experience</h1>
			<ExperienceTile number={props.jobOne} position={props.redditPosition} company={props.redditName} logo={props.redditLogo} summary={props.redditSummary} link={Resume}/>
			<ExperienceTile number={props.jobTwo} position={props.pepperdinePosition} company={props.pepperdineName} logo={props.pepperdineLogo} summary={props.pepperdineSummary} link={Resume}/>
			<ExperienceTile number={props.jobThree} position={props.friPosition} company={props.friName} logo={props.friLogo} summary={props.friSummary} link={Resume}/>
			<ExperienceTile number={props.jobFour} position={props.ngcPosition} company={props.ngcName} logo={props.ngcLogo} summary={props.ngcSummary} link={Resume}/>
			<ExperienceTile number={props.jobFive} position={props.takeoverPosition} company={props.takeoverName} logo={props.takeoverLogo} summary={props.takeoverSummary} link={Resume}/>
        </section>
    </React.Fragment>
)

export default ExperiencePage;