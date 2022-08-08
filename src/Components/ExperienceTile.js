import React from 'react'; 
import PepperdineLogo from '../Assets/Pepperdine-logo.jpg'; 
import USCLogo2 from '../Assets/USC-logo2.png';
import AVCLogo from '../Assets/AVC-logo.png';
import SOARLogo from '../Assets/SOAR-logo.png';

const ExperienceTile = ( props ) => {
    return (
        <li>
        <h2>{props.number}</h2>
        <h3>{props.position}</h3>
        <h4>{props.company}</h4> 
        <img src={props.logo} alt="Logo" width="160" height="150" id="aligned-logo" />
        <p>
        {props.summary}
        </p>
        <a href={props.link} target="blank"><button>Learn more</button></a>
    </li>
    )
}

export default ExperienceTile;