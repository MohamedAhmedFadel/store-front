import Token from "../loglogic/token";

let token=Token().token
const headers = {
  'Accept': 'application/json',
  'authorization': token
}

export async function cproduct (credentials) {
  console.log(credentials)
  return fetch('http://localhost:8080/api/products'  , {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());

}

export async function dproduct (id) {
 
  return fetch(`http://localhost:8080/api/products/${id}` , {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  }).then((data) => data.json());
}
   




// export const get = (id) =>
//   fetch(`${api}/users/:${id}`)
//     .then(res => res.json())
//     .then(data => data.user)

 export const getAll = () =>
   fetch('http://localhost:8080/api/products')
     .then(res => res.json())
    

export const update = (credentials) =>
  fetch('http://localhost:8080/api/products/update', {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(res => res.json())

