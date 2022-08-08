import React from 'react'; 
import PepperdineLogo from '../Assets/Pepperdine-logo.jpg'; 
import USCLogo2 from '../Assets/USC-logo2.png';
import AVCLogo from '../Assets/AVC-logo.png';
import SOARLogo from '../Assets/SOAR-logo.png';

const EducationTile = ( props ) => {
    return (
        <li>
        <h2>{props.year}</h2>
        <h3>{props.school}</h3>
        <img src={props.logo} alt="Logo" width="150" height="150" id="aligned-logo" />
        <h4>{props.gradYear}</h4> 
        <p>
        {props.summary}
        </p>
        <a href={props.link} target="blank"><button>Learn more</button></a>
    </li>
    )
}

export default EducationTile;