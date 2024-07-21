import "./Card.css"
const Card =(props)=>{
    return(
        <div className="card_box">
            <img className="image" src={props.image} />
            <h1>{props.title}</h1>
            <p>{props.cont}</p>
            <button className="card_button">Add to Cart</button>
        </div>
    )
}
export default Card;