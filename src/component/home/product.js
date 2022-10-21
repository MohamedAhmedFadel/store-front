import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "./rating";
import { addproduct, getorder, updateaddproduct } from "../../api/orders";
import { getProduct } from "../../api/products.api";
import Token from "../../loglogic/token";
function Productdetails(props) {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [orders, setorders] = useState([]);
  const [products, setproducts] = useState([]);
  const [error, setError] = useState("");
  const userid = Token().userId;
  const info = {
    products_id: id,
    quantity: qty,
    users_id: userid,
    status: "active",
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const data = async () => {
        try {
          await getorder(userid).then((res) => setorders(res));
          getProduct(id).then((res) => setproducts(res));
        } catch (err) {
          setError(err.massage);
        }
      };
      data();
    }
    return () => {
      mounted = false;
    };
  }, []);
  console.log(orders);

  const handleAdd = async () => { 
    if(userid){
      getorder(userid).then((res) => {
        const exist = res.find((x) => String(x.products_id) == id);
  
        console.log(exist);
        if (exist === undefined) {
          addproduct(info);
        } else {
          updateaddproduct({
            quantity: qty,
            products_id: id,
          });
        }
      });
    }else{
    
        window.location.href="/login"
    }
    
  };

  const product = props.products.find((p) => String(p.id) === id);

  if (!product) {
    return <div>no product</div>;
  }
  console.log(orders);
  return (
    <div>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating />
            </li>
            <li>Price: {product.price}$</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div>{product.price}$</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>status</div>
                  <div>
                    {product.stock > 0 ? (
                      <span className="success"> In stock </span>
                    ) : (
                      <span className="error"> Un avaiable </span>
                    )}
                  </div>
                </div>
              </li>
              {product.stock > 0 && (
                <>
                  <li>
                    <div className="row">
                      <div>quantity</div>
                      <div>
                        <select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.stock).keys()].map((x) => (
                            <option key={x} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button onClick={handleAdd}>ADD TO CART</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Productdetails;
