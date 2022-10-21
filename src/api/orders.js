import Token from "../loglogic/token";

// let token=Token().token
const headers = {
  'Accept': 'application/json',
  // 'authorization': token
}

export async function Delete (cc) {

  return fetch(`http://localhost:8080/api/orders/products/delete` , {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json",
      
    },
    body: JSON.stringify(cc),
   
  
  }).then((data) => data.json());
}

export async function index (){
return fetch('http://localhost:8080/api/orders')
.then(res=>res.json())
}
    
  export async function addproduct (info) {
 
    return await fetch("http://localhost:8080/api/orders/products"  , {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((data) => data.json());
  }

  export async function updateaddproduct (quantity,products_id) {
 
    return await fetch("http://localhost:8080/api/orders/products/update"  , {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quantity,products_id),
    }).then((data) => data.json());
  }

  export async function getorder (users_id){
    const data=await fetch(`http://localhost:8080/api/orders/users/${users_id}`, {
      methode:"GET",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
   
    })
   const res= data.json() 
  return res
  }