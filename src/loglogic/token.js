




 
export default function Token() {
  
   
    let data= window.localStorage.getItem("userdata")
    if (data!==null){const userdata= JSON.parse(data);
        
            if(userdata.token){
            
            const email= userdata.user.email
            const role= userdata.user.role
            const userId= userdata.user.id
            const token = userdata.token || null
           
        
            return { token, email, data, role, userId}
          
          }else{
            return {data}
          }}else{
            return(<div>igjigji</div>)
          }

  }



















// // export default function useToken() {
// //   const getToken = () => {
// //     const tokenString = localStorage.getItem('token');
// //     const userToken = JSON.parse(tokenString);
// //     return userToken?.token
// //   };

// //   const [token, setToken] = useState(getToken());

// //   const saveToken = userToken => {
// //     localStorage.setItem('token', JSON.stringify(userToken));
// //     setToken(userToken.token);
// //   };

// //   return {
// //     setToken: saveToken,
// //     token
// //   }
// // }