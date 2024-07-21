import"./About.css"
import img1 from"../Assets/Images/dottedround.png"
import img2 from"../Assets/Images/rocket.jpg"
import img3 from "../Assets/Images/flag.jpg"
import img4 from "../Assets/Images/diamond.jpg"
import img5 from "../Assets/Images/dottedimage2.png"
import img6 from "../Assets/Images/designer.png"
import img7 from"../Assets/Images/ceo.png"
import { useLocation } from "react-router-dom";

function About(){

    const location=useLocation();
        let path=location.pathname

    return(
        <div className="about__main">
            <p>{path}</p>
<h1 style={{fontSize:50}}>About us</h1>
<p>Believe in Robotics</p>
<div className="aboutblue_circle">
</div>
<img className="dottedround.png" src={img1} />
<div className="rocket">
<img className="rocket_img" src={img2} />
</div>
<h1>Our vision</h1>
<p>The objective of Robotics is to motivate the education firms including educators and students to adapt a self-driven and innovative practical education initiatives. Through our research and development in the field of STEM we will make great efforts and strive hard to guide the students to learn the highest attainable skills. Our approach will help the schools to foster Science, Technology, Engineering and Mathematics objectives in the most uncomplicated and accessible way.</p>
<div className="flag">
<img className="flag_img" src={img3} />
</div>
<h1>ACHIEVEMENTS</h1>
<h3>RANKED AMONG TOP 100 STARTUPS IN KERALA AND TAMIL  NADU</h3>
<h3>INVENTIVE CLASSROOM OF THE YEAR 2020</h3>
<div className="diamond">
<img className="diamond_img" src={img4} />
</div>
<h1>MISSION</h1>
<p>Robotics is on a mission to foster and transform the education to focus more on experimental method of learning through our proven and established approach. We strive and aim to create standards in the field of education with our sheer professionalism and maximum potential.</p>
<p>o</p>
<p>+</p>
<p>Associated Schools</p>
<p>0</p>
<p>+</p>
<p>Activity Centers</p>
<p>o</p>
<p>Students</p>
<p>o</p>
<p>%</p>
<p>Satisfaction</p>
<h3>About us</h3>
<p>Robotics is an education oriented company formed by a group of passionate Engineers in order to deliver and integrate the best in class quality of education. Robotics is working exclusively to provide the perfect platform for students to learn and innovate. Robotics has been the pioneers in terms of making the students access the trending technologies with ease.</p>
<img className="dottedimage2.png" src={img5} />
<p>Contact us</p>
<img className="dottedround.png" src={img1} />
<h3>Our Services</h3>
<br />
<br />
<h1>Robotics Lab Platforms</h1>
<div className="about_platform">
<p>ATAL TINKERING LAB</p>
<p>ROBOTICS INNOVATION LAB</p>
<p>ROBOTICS BEGINNERS LAB</p>
<p>ROBOTICS SMART LAB</p>
</div>
<h1>Robotics Club</h1>
<div className="about_club">
    <p>WEEKEND WORKSHOP</p>
    <p>Robotics RESIDENTIAL TRAINING (RRT)</p>
    <p>INSTITUTIONAL WORKSHOPS</p>
    <p>MAKE YOUR ROBOT CHALLENGE (MONTHLY ENGAGEMENT ACTIVITY)</p>
</div>
<h1>CERTIFICATIONS</h1>
<div className="about_certification">
    <p>ROBOTICS HACKATHON</p>
    <p>CODER'S CERTIFICATION</p>
    <p>BEGINNERS, INTERMEDIATE AND ADVANCED ROBOTICS CERTIFICATIONS</p>
</div>
<br />
<br />
<h3>What they've said about us</h3>
<p>
But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain which toil and pain can.</p>
<img className="designer.png" src={img6} />
<p>Risk management Designer</p>
<br/>
<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain which toil and pain can.</p>
<img className="ceo.png" src={img7} />
<p>james walburn
ceo dbt</p>
</div>
    )
}



















export default About;