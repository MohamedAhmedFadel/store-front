import { useEffect, useState } from "react";
import { getorder } from "../../api/orders";
import Token from "../../loglogic/token";

function Getorders() {
  const [orders, setOrders] = useState([]);
  const users_id = Token().userId;
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const fetchData = () => {
       
        getorder(users_id).then((res) =>
         setOrders(res)
         );
      };
      fetchData();
    }
    return () => {
      mounted = false;
    };
  }, [users_id]);
  console.log(orders);

  return (
    <div className="table-users containe main">
      <div className="theader ">orders</div>

      <table cellspacing="0">
        <tr>
          <th>ID</th>
          <th>users_id</th>
          <th>quantity</th>
          <th>status</th>
          <th>products_id</th>
        </tr>
        {orders.map(item=>(
          
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.users_id}</td>
          <td>{item.quantity}</td>
          <td>{item.status}</td>
          <td>{item.products_id}</td>
        </tr>
        ))}
        
      </table>
    </div>
  );
}

export default Getorders;
