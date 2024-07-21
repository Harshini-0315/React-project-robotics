import './App.css';
import Navbar from './Components/Navbar';
import Home from'./Components/Home';
import Aboutus from './Components/About';
import Shop from './Components/Shop';
import RentourRobot from './Components/RentourRobot';
import OrderTrackingRBM from './Components/OrderTrackingRBM';
import Career from './Components/Career';
import Footer from'./Components/Footer';
import Contact from './Components/Contact';
import Refundpolicy from './Components/Refundpolicy';
import TermsandConditions from './Components/Termsandconditions';
import Privacypolicy from './Components/Privacypolicy';
import {Route, Routes} from "react-router-dom"



function App() {
  return (
    <div>
      <Navbar />
     <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={Aboutus} />
        <Route path='/career' Component={Career} />
        <Route path='/shop' Component={Shop} />
        <Route path='/rentourrobot' Component={RentourRobot} />
        <Route path='/ordertrackingrbm' Component={OrderTrackingRBM} />
        <Route path='/contact' Component={Contact} />
        <Route path='/refundpolicy' Component={Refundpolicy} />
        <Route path='/termsandconditions' Component={TermsandConditions} />
        <Route path='/privacypolicy' Component={Privacypolicy} />
     </Routes>
  <Footer />
    </div>
  );
}

export default App;
