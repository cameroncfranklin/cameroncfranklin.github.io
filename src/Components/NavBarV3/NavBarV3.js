import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';
import './nav-logic.js';
import Resume from '../../Assets/Resume_2024_March.pdf';

const NavBarV3 = () => (
    <React.Fragment>
    <script src="nav-logic.js"></script>
  <a href="#nowhere" class="navicon"></a>
<div class="toggle">
  {/* <h1>Toggle Menu</h1> */}
  <h3>Cameron Franklin</h3>
  <ul class="toggle__menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to={Resume} target="_blank">Resume & Portfolio</Link></li>
    <li><a href="https://www.linkedin.com/in/cameroncfranklin/#:~:text=%E2%80%A6see%20more-,Education,-Education">Education</a></li>
    {/* <li><Link to="/education">Education</Link></li> */}
    <li><Link to="#">Contact</Link></li>
    {/* 
    <li><a href="#">Home</a></li>
    <li><a href="#">Resume & Portfolio</a></li>
    <li><a href="#">Education</a></li>
    <li><a href="#">Contact</a></li> 
    */}
  </ul>
  <ul class="social">
    <li><a href="https://github.com/cameroncfranklin"><i class="fa fa-github"></i></a></li>
    <li><a href="https://linkedin.com/in/cameroncfranklin"><i class="fa fa-linkedin"></i></a></li>
   <li> <a href="https://www.instagram.com/camcolefrank/"><i class="fa fa-instagram"></i></a></li>
    <li><a href="https://www.gemfellowship.org/2023-gem-fellows/#:~:text=University%20of%20Virginia-,Cameron%20Franklin,-MS%20Computer%20Science"> <i class="fa fa-trophy"></i></a></li>
  </ul>
  <small>Inspired by Bruno Cartaxeiro's https://codepen.io/BRN/pen/tjwzl</small>
</div>
</React.Fragment>
);

export default NavBarV3;