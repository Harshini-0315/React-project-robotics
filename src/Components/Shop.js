import "./Shop.css";
import Card from"./Card";
import { useLocation } from "react-router-dom";


const Shop =()=>{
    const location=useLocation();
    let path=location.pathname
    return(
        <div className="shop__main">
              <p>{path}</p>
            <div className="app_flex">
                <Card image="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=600" title="Service Robots Intelligent Humanoid Robot Hospitality Robot" cont="625000 Inclusive GST"  />
                <Card image="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=600" title="Intelligent Humanoid Robot-Automatic MObile Surveillence Robot" cont="694000 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=600" title="Intelligent Humanoid Robot-Front office" cont="625000 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=600" title="Intelligent Humanoid Robot-Nila Library Version" cont="425000 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/8566445/pexels-photo-8566445.jpeg?auto=compress&cs=tinysrgb&w=600" title="AI EMO GO HOME-Premium" cont="55000 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/9028884/pexels-photo-9028884.jpeg?auto=compress&cs=tinysrgb&w=600" title="EMO Power Station" cont="21000 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=600" title="AI Inteligent Humanoid-Nila Robot" cont="330000 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=600" title="Nila-Educational intelligent robot" cont="400000 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=600" title="AI Humanoid-Broadcast Advertisement Robot Robot" cont="364000 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=600" title="Ai Security Robot with Kiosk" cont="380000 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=600" title="Dine Bot" cont="580000 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/844874/pexels-photo-844874.jpeg?auto=compress&cs=tinysrgb&w=600" title="Home Floor Cleaning Robot" cont="56000 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=600" title="EMO Robot" cont="42500 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/8566445/pexels-photo-8566445.jpeg?auto=compress&cs=tinysrgb&w=600" title="Vector Intelligent robot" cont="52500 Inclusive GST" />
                <Card image="https://images.pexels.com/photos/21773659/pexels-photo-21773659/free-photo-of-close-up-of-microphone-charging.jpeg?auto=compress&cs=tinysrgb&w=600" title="Charging dock forloona robot" cont="12000 Inclusive GST" />







            </div>
            <div>
            <iframe  className="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3792523482934!2d76.9469964748085!3d11.010145689153164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f9a58ec75ed3%3A0x58a146df0bf77d66!2sROBOMIRACLE!5e0!3m2!1sen!2sin!4v1721029678678!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
export default Shop;