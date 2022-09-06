import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Login from "./component/login";
import Nuser from "./component/normalUser/normaluser";
import Signup from "./component/signup";
import { getAll } from "./api/products.api";

import Admin from "./component/admin/admin";

import NewProduct from "./component/products/new";
import EditProduct from "./component/products/edite";
import Deletep from "./component/products/delete";
import Newuser from "./component/user/new";
import Updateuser from "./component/user/edite";
import DeleteUser from "./component/user/delete";
import Getusers from "./component/user/getall";

import Getorders from "./component/orders/getall";



function App() {
  const [products, setProducts] = useState([]);
  
  
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const fetchData = () => {
        getAll().then((res) => {
          setProducts(res);
          
        });
      };
      fetchData();
    }
    return () => {
      mounted = false;
    };
  }, []);
  

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainN" element={<Nuser products={products} />} />

        <Route  path="/admin" element={<Admin  />} >
        <Route path="product/delete" element={<Deletep />} />
        <Route path="product" element={<NewProduct />} />
        <Route path="product/update" element={<EditProduct />} />

        <Route path="user" element={<Newuser />} />
        <Route path="user/update" element={<Updateuser />} />
        <Route path="user/delete" element={<DeleteUser />} />
        <Route path="user/index" element={<Getusers />} />

        
        <Route path="order/get" element={<Getorders />} />

          </Route>
         
          {/* <Route path="/l" element={</>} /> */}

        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
