import"./Footer.css"
import { useNavigate } from "react-router-dom";
// import {Link} from "react-router-dom"
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer=()=>{
    const navigate=useNavigate();
    const nav3 =()=> {
      navigate('/')
    }

    
    const navigate1=useNavigate();
    const nav1 =()=> {
      navigate('/About')
    }

    const navigate2=useNavigate();
    const nav6 =()=> {
      navigate('/Shop')
    }


    const navigate8=useNavigate();
    const nav7 =()=> {
      navigate('/refundpolicy')
    }

    const navigate9=useNavigate();
    const nav8 =()=> {
      navigate('/termsandconditions')
    }


    const navigate10=useNavigate();
    const nav9 =()=> {
      navigate('/privacypolicy')
    }


    const Contact=useNavigate();
    const nav4 =()=> {
      navigate('/Contact')
    }

    return(
        <div>
            <div className="footer_main">
                <div className="icon">
                <h3><LuFacebook style={{fontSize:"30px"}} /></h3>
                <h3><FiLinkedin style={{fontSize:"30px"}}/></h3>
               <h3><FiTwitter style={{fontSize:"30px"}}/></h3>
               <h3><FaInstagram style={{fontSize:"30px"}}/></h3>
                </div>
        <div>
        <h3  className="footer_home"onClick={nav3}> Home</h3>
        <h3 className="footer_about" onClick={nav1}>About us</h3>
        <h3  className="footer_shop"onClick={nav6}>Shop</h3>
        <h3  className="footer_contact"onClick={nav4}>Contact us</h3>
        </div>
        <div>
            {/* <h3>ATAL Tinkering Lab</h3> */}
            <h3  className="footer_refund"onClick={nav7}>Refund policy</h3>
            <h3  className="footer_terms"onClick={nav8}>Terms and Conditions</h3>
            <h3  className="footer_privacy"onClick={nav9}>Privacy policy</h3>
        </div>
        <div>
            <button onClick={nav4}className="footer_button">Contact</button>
        </div>
            </div>
        </div>
    )
}
export default Footer;