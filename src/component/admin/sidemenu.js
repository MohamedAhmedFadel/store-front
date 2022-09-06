import {Link} from  'react-router-dom'
function Sidemenu(){
    const open =()=>{
   const userList= document.querySelectorAll(".h")
   console.log(userList)
   userList.style.display="noun";
   
    }
return(
<div className="mcontainer">
    <ul>
        <li ><button onClick={open}>Users</button>
            <ul>
                <li className="h"><Link to="user">New User</Link></li>
                <li className="h"><Link to="user/update">Update user</Link></li>
                <li className="h"><Link to='user/delete'>Delete User</Link></li>
                <li className="h"><Link to='user/index'>Show Users</Link></li>
            </ul>
        </li>
        <li>Products
        <ul>
                <li className="hp"><Link to="product">New Product</Link></li>
                <li className="hp"><Link to="product/update">Update Products</Link></li>
                <li className="hp"><Link to="product/delete">Delete Product</Link></li>
            </ul>
        </li>
        <li>Orders
        <ul>
                <li className="ho">New Order</li>
                <li className="ho">Update Order</li>
                <li className="ho">Delete Order</li>
                <li className="h"><Link to='order/index'>Show orders</Link></li>
                <li className="h"><Link to='order/get'>get orders</Link></li>
            </ul>
        </li>
    </ul>
</div>
)
}
export default Sidemenu