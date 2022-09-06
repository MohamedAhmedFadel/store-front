




 
export default function Token() {
  
   
    let data= window.localStorage.getItem("userdata")
   
    if(data!==null){
    const userdata= JSON.parse(data);
    const email= userdata.user.email
    const role= userdata.user.role
    const token = userdata.token
    const userId= userdata.user.id

    return { token, email, data, role, userId}
  
  }else{
    return {data}
  }
  }



















// export default function useToken() {
//   const getToken = () => {
//     const tokenString = localStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
//   };

//   const [token, setToken] = useState(getToken());

//   const saveToken = userToken => {
//     localStorage.setItem('token', JSON.stringify(userToken));
//     setToken(userToken.token);
//   };

//   return {
//     setToken: saveToken,
//     token
//   }
// }