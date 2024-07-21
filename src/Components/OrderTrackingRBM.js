import"./OrderTrackingRBM.css"
import img8 from"../Assets/Images/truck.jpg"
import { useLocation } from "react-router-dom";


function OrderTrackingRBM(){
    const location=useLocation();
    let path=location.pathname

    return(
<div className="order__main">
<p>{path}</p>
<img className="truck_img" src={img8} />
<div className="order_content">
<h1>Track an Order</h1>
<p>Enter the order number you would like to track in the form below.</p>
<p>Order Number:</p>
</div>
<textarea className="order_text"></textarea>
<br />
<button className="order_button">Track </button>
</div>
    )
}













export default OrderTrackingRBM;