import"./Home.css";
import img from"../Assets/Images/image_one.png"
// import img from"../Assets/Images/teamwork.png"
import img3 from"../Assets/Images/robo2.jpg"
import img6 from "../Assets/Images/designer.png"

import { useNavigate } from "react-router-dom";


function Home(){

  const navigate=useNavigate();
  const nav =()=> {
    navigate('/Contact')
  }

  const navigate1=useNavigate();
  const nav1 =()=> {
    navigate('/About')
  }

    return(
        <div className="home__main">
         <div className="home-section">
      <div class="home_one">
          <h1 className="hcontent_one">Create miracle through</h1>
          <p className="hcontent_two"> Robotics </p>
          <p>Robotics is an education-oriented company <br />formed by a group of passionate Engineers in <br />order to deliver and integrate the best in class<br /> quality of education.</p>
          <button onClick={nav}className="hbutton_one">Get started</button>
          <button onClick={nav1} className="hbutton_two">Explore more</button>
          <div className="ho_first">
          <h1 className="hhead_one">WHAT WE DO</h1>
          <p>Robotics is working exclusively to provide the <br />perfect platform for students to learn and innovate.<br /> Robotics has been the pioneers in terms of<br /> making the students access the trending technologies with ease.</p>
          <button onClick={nav1}className="hbutton_three">Show more</button>
          </div>
          {/* <img className="teamwork.png" src={img} /> */}
          <div className="hhead_main">
          <div className="box_one">
          <h1 className="boxhead_one">ROBOTICS PLATFORMS</h1>
  <ul>
    <li>ATAL TINKERING LABS</li>
    <li>ROBOTICS INNOVATION LAB</li>
    <li> ROBOTICS BEGINNERS LAB</li>
    <li>ROBOTICS SMART LAB</li>
  </ul>
  </div>
          
          <div className="box_two">
            <h1 className="boxhead_two">ROBOTICS CLUB</h1>
            <ul>
                <li> WEEKEND WORKSHOP</li>
                <li> ROBOTICS RESIDENTIAL TRAINING</li>
                <li> INSTITUTIONAL WORKSHOPS</li>
                <li> MAKE YOUR ROBOT CHALLENGE (MONTHLY ENGAGEMENT ACTIVITY)</li>
            </ul>
            </div>
            <div className="box_three">
                <h1 className="boxhead_three">CERTIFICATIONS</h1>
                <ul>
                    <li> ROBOTICS HACKATHON</li>
                    <li> CODER'S CERTIFICATION</li>
                    <li>BEGINNERS & INTERMEDIATE CERTIFICATIONS</li>
                    <li>ADVANCED ROBOMIRACLE CERTIFICATIONS</li>
                </ul>
                </div>
                </div>
               <div className="ha_main">
                <img className="robo2.jpg" src={img3} />
                <div className="ha_one">
                <h1 className="ha_content">ABOUT US</h1>
                <p>The objective of Robotics is to motivate the education firms including <br />educators and students to adapt a self-driven and innovative practical <br />education initiatives. Through our research and development in the field of<br /> STEM, we will make great efforts and strive hard to guide the students to learn<br /> the highest attainable skills. Our approach will help the schools to foster <br />Science, Technology, Engineering and Mathematics objectives in a most <br />uncomplicated and accessible way.</p>
                <button onClick={nav1}className="ha_button">About us</button>
                </div>
                </div>
          
          <h1 className="ho_head">OUR OFFERINGS</h1>
          <p>Robotics will encourage students to exhibit their skills by adapting the experimental way of learning through the following platforms.</p>
          <button onClick={nav1}className="hs_button">Show more</button>
          <div className="ho_main">
          <div className="ho_one">
            <h1 className="ho_contentone">Innovation Lab Platforms</h1>
            <ul>
                <li>ATAL TINKERING LABS</li>
              <li>ROBOTICS INNOVATION LAB</li>
              <li>ROBOTICS BEGINNERS LAB</li>
              <li>ROBOTICS SMART LAB</li>
            </ul>
          </div>
          <div className="ho_two">
            <h1 className="ho_contenttwo">TRAINING PROGRAMS AND CERTIFICATIONS</h1>
            <ul>
              <li>ADVANCED ROBOTICS CERTIFICATIONS</li>
             <li>ROBOTICS CLUB/ AFTER SCHOOL PROGRAM</li>
            </ul>
          </div>
          <div className="ho_three">
            <h1 className="ho_contentthree">E-MART</h1>
            <ul>
              <li>Robotics E- Mart platforms consist of a large<br /> variety of DIY(Do it Yourself) kits.</li>
              <li>Scan the QR code or visit www.robotics.com/shop/<br /> to explore our unique DIY
              kits and products.</li>
            </ul>
          </div>
          <div className="ho_four">
         <h1 className="ho_contentfour">WEBINAR STUDIO</h1>
         <ul>
          <li>Robotics Webinar Studio helps students broaden their skills, as well as their
          understanding of advanced technologies.</li>
          <li>This also allows students to attain new knowledge and skills that can supplement
          or complement their main field of study.</li>
         </ul>
          </div>
          <div className="ho_five">
            <h1 className="ho_contentfive">TRAINING PROGRAMS AND CERTIFICATIONS</h1>
           <ul>
            <li>ROBOTICS HACKATHON</li>
            <li>ROBOTICS INTERNSHIP</li>
            <li>BEGINNERS & INTERMEDIATE CERTIFICATIONS</li>
           </ul>
          </div>
          <div className="ho_six">
          <h1 className="ho_contentsix">TRAINING AND SUPPORT</h1>
          <ul>
            <li>Students Training Program</li>
            <li>Teachers Training Program</li>
             <li>Support and Maintenance</li>
          </ul>
          </div>
          </div>
          <div className="home_last">
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain which toil and pain can.</p>
      <img className="designer.png" src={img6} />
      <h3 className="home_designer">Risk management Designer</h3>
     
      <h1 className="home_designer2">WHAT THEY'VE SAID ABOUT US</h1>
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of human happiness. No one.</p>
      </div>
      </div>
   <div className="h_image">
   <img className="image_one" src={img} />
  </div>
  
  
  </div>
 
         
  </div> 
    )
}












export default Home;