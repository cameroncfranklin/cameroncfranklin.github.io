import React from 'react'; // This is how we add React to our Pages
import photoOfMe from '../Assets/Cam_Photo.jpg'; 
// We'll create the AboutPage component here
const AboutPage = () => (
    <React.Fragment>
        <section className="pages-full"> 
            <img src={photoOfMe} alt="" width="500" height="720"/> 
            {/* <h1> Hello! </h1>
            <h1> My name's Cameron</h1> */}
            <br/>
            <div className = "text-container">
                <div className = "container-content">
                <h1> Welcome, </h1>
                <h1> I'm Cameron.</h1>
                    <p>
                        A little bit about me: I am an aspiring software engineer from Los Angeles
                        (From the Valley to Palmdale) who's interested in building innovative, cutting-edge applications. 
                    </p>
                    <p>
                        I graduated a year early from <a href="https://www.usnews.com/best-colleges/pepperdine-university-1264" target="blank">Pepperdine University</a> (in May of 2021) with a B.S. in 
                        Computer Science/Mathematics. I'm now pursuing a Masters degree in Computer Science 
                        (Software Engineering) at <a href="https://www.usc.edu/" target="blank">USC</a> as I build my portfolio as a developer.
                    </p>
                    <p>
                        I hope to one day be building my own software applications/services as an entreprenuer
                        in the tech industry. Until then, I'm looking forward to working with other hard-working,
                        motivated programmers and learning the skills I need to reach my aspirations.
                    </p>
                    <p>
                        I'm also a U.S. patent holder, sports enthusiaist and commentator, pianist, writing 
                        dilettante, and guy who wishes he could cook (I'm ight, still learning).
                    </p>
                </div>
            </div>
        </section>
    </React.Fragment>
    
)

// Need to export our page 
export default AboutPage;