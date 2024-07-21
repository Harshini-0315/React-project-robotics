import"./Navbar.css";
import img from "../Assets/Images/robotic.png"
import {Link} from "react-router-dom"

const Navbar = ()=> {
    // const num = 1;

return(
    <div>
      
        <nav className="nav_title">
        <img className="robo_img" src={img} />
            <Link to="/">
                <h4 href="">HOME</h4>
            </Link>
            <Link to="/about">
                <h4 href="">About us</h4>
            </Link>
            {/* <Link to="/ATAL Tinkering Labs">
            < h4 href="">ATAL Tinkering Labs</h4>
            </Link> */}
            <Link to="/career">
                <h4 href="" >Career</h4>
            </Link>
            <Link to="/shop">
                <h4  href="">Shop</h4>
            </Link>
            <Link to="/rentourrobot">
                <h4 href="" >Rent Our Robot</h4>
            </Link>
            <Link to="/Ordertrackingrbm">
                <h4  href="">Order Tracking RBM</h4>
            </Link>
            
            
            
        </nav>
        

    </div>
)
}
export default Navbar;