import React from 'react'; 
import PepperdineLogo from '../Assets/Pepperdine-logo.jpg';
import NorthropLogo from '../Assets/Northrop-logo.png';
import FranklinRealtyLogo from '../Assets/FRI-logo.jpg';
import TakeOverLogo from '../Assets/TakeOver-logo.png';
import FollettLogo from '../Assets/Follett-logo.png';
import Resume from '../Assets/Resume_2021.pdf';

const ExperiencePage = () => (
    <React.Fragment>
        <section className="tilesWrap">
        <h1>Experience</h1>
        <li>
		<h2>01</h2>
		<h3>Full-Stack Application Developer Intern</h3>
        <h4>Pepperdine University</h4> 
        <img src={PepperdineLogo} alt="PepperdineLogo" width="150" height="150" id="aligned-logo" />
		<p>
        Independently developed web applications/forms within Microsoft’s ASP.NET Framework,
        Front and back-end web development (within MVC design pattern, SQL)...
		</p>
		<a href={Resume} target="_blank"> <button>View Resume</button> </a>
	</li>
	<li>
		<h2>02</h2>
		<h3>Software Engineer</h3>
        <h4>Franklin Realty & Investments </h4>
        <img src={FranklinRealtyLogo} alt="PepperdineLogo" width="150" height="150" id="aligned-logo" />
		<p>
			Developing full-stack realty website for <a href="https://www.realtor.com/realestateagency/589e37adef4f8b000f0e86e1" target="blank">Franklin Realty & Investments</a>,
            my father's real estate company. This is an ongoing freelance assignment I spearhead in my...
		</p>
		<a href={Resume} target="_blank"> <button>View Resume</button> </a>
	</li>
	<li>
		<h2>03</h2>
		<h3>Liaison Engineer Intern</h3>
        <h4>Northrop Grumman Corporation</h4>
        <img src={NorthropLogo} alt="Northrop Logo" width="140" height="90" id="aligned-logo" />
		<p>
            Aided in the investigation of aircraft non-conformances & developed local additive manufacturing 
            processes using 3D CAD software. Assisted systems engineers in...
		</p>
		<a href={Resume} target="_blank"> <button>View Resume</button> </a>
	</li>
	<li>
		<h2>04</h2>
		<h3>Retail Sales Associate</h3>
        <h4>Pepperdine Campus Bookstore (Follet Corporation) </h4>
        <img src={FollettLogo} alt="Follett Logo" width="200" height="150" id="aligned-logo" />
		<p>
            Greeted customers, assisted with store inquiries, answers phone calls and provide callers with 
            assistance, tabulated purchases...
		</p>
		<a href={Resume} target="_blank"> <button>View Resume</button> </a>
	</li>
	<li>
		<h2>05</h2>
		<h3>Co-Founder, Lead Developer</h3>
        <h4>TakeOver Sports</h4>
        <img src={TakeOverLogo} alt="TakeOver Logo" width="200" height="250" id="aligned-logo" />
		<p>
            Co-founded start-up venture for P2P based social media app; where users are both the primary 
			producers and consumers of sports-related content, opposed to the traditional sporting app 
			model (ESPN, BleacherReport, etc.) where users primarily consume content...
		</p>
		<a href={Resume} target="_blank"> <button>View Resume</button> </a>
	</li>
        </section>
    </React.Fragment>
)


export default ExperiencePage;