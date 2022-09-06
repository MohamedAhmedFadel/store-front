import Token from "../loglogic/token";

let token=Token().token
const headers = {
  'Accept': 'application/json',
  'authorization': token
}

const baselUrl='http://localhost:8080/api'

export async function LoginUser(credentials) {
  return fetch(`${baselUrl}/signin`  , {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export async function deleteUser(id){
  return fetch(`${baselUrl}/users/${id}`,{
method:"DELETE",
headers:{
  ...headers
},
body:JSON.stringify(id),
  }).then((data)=>data.json())
}


export const SignUp = async (credentials) => {
  const response = await fetch(`${baselUrl}/users`, {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

export const Update = async (credentials) => {
  const response = await fetch(`${baselUrl}/users/update`, {
    method: "POST",
    credentials: "same-origin",
    headers: { ...headers},
    body: JSON.stringify(credentials),
  });
  try {
    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.log("error", error);
  }
}

export const getAllu = () =>
   fetch('http://localhost:8080/api/users')
     .then(res => res.json())
    
