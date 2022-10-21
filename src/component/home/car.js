// function Card(props) {
//     //order
//     const [orders, setOrders] = useState([]);
//     // const [productorder, setProductorder] = useState([]);
//     const [counter, setCounter] = useState(1);
//     // const [orders_id, setOrders_id] = useState();
  
//     props.order.map((order) => setOrders(order));
  
//     const users_id = Token().userId;
  
//     const addition = () => {
//       const info = {
//         products_id: props.product.id,
//         quantity: counter,
//         orders_id: orders.id,
//       };
//       addproduct(info);
//     };
//     const action = () => {
//       if (props.order || orders.status === "active") {
//         addition();
//       } else {
//         corder({ users_id: users_id, status: "active" }).then((res) => {
//           setOrders(res);
//           addition();
//         });
//       }
//     };
  
//     const addo = () => {
//       const nodeList = document.querySelectorAll(".buy--btn");
//       const counters = document.querySelectorAll(".counter");
  
//       for (let i = 0; i < nodeList.length; i++) {
//         const gh = nodeList[i].getAttribute("gh");
  
//         for (let c = 0; c < counters.length; c++) {
//           const co = counters[c].getAttribute("co");
  
//           if (props.product.id == gh && gh == co) {
//             nodeList[i].style.display = "none";
  
//             counters[c].style.display = "block";
//           }
//         }
//       }
  
//       action();
//     };