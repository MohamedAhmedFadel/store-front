import { useCallback } from "react";
import { useEffect, useState } from "react";

import Token from "../loglogic/token";
import Mainheader from "./normalUser/mainheader";
import Pic from "./pic";
import Total from "./total";

function Cart(props) {
  const [orders, setorders] = useState([]);

  const [error, setError] = useState("");

  const users_id = Token().userId;

  const ff = async () => {
    const data = await fetch(
      `http://localhost:8080/api/orders/users/${users_id}`,
      {
        methode: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await data.json();
    setorders(res);
  };

  useEffect(() => {
    // setTimeout(() => {
    ff();
    // }, 3000);
  }, [ff.res]);
  console.log(orders.length);
  return (
    <div>
      <Mainheader />

      <div className="flex">
        <div>
          {" "}
          {orders.map((product) => (
            <Pic product={product} />
          ))}
        </div>
       
        <div>
          <Total orders={orders} />
        </div>
        
        
      </div>
    </div>
  );
}
export default Cart;
