import { Link } from "react-router-dom";
import Rating from "./rating";
function Card(props) {
  return (
    <section key={props.product.id} className="product">
      <div className="photo-container">
        <div className="photo-main">
          <div>
            <Link className="link" to={`productdetails/${props.product.id}`}>
   
              <img src={props.product.image} alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="product__info">
        <div className="title">
          <Link className="link" to={`productdetails/${props.product.id}`}>
            
            <h1>{props.product.name}</h1>
          </Link>
        </div>
        <Rating
          rating={props.product.rating}
          noreviews={props.product.reviews}
        />
        <div className="price">
          $ <span>{props.product.price}</span>
        </div>
      </div>
    </section>
  );
}
export default Card;
