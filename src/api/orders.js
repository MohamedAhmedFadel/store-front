import Token from "../loglogic/token";

let token=Token().token
const headers = {
  'Accept': 'application/json',
  'authorization': token
}

export async function corder (credentials) {
 
  return fetch('http://localhost:8080/api/orders'  , {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

    
  export async function addproduct (info) {
 
    return fetch("http://localhost:8080/api/orders/products"  , {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((data) => data.json());
  }


  export async function getorder (users_id){
    return fetch(`http://localhost:8080/api/orders/users/${users_id}`, {
      methode:"GET",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      
    })
    .then(res => res.json())
    
    
  }