import { useState } from "react";
import { LoginUser } from "../api/users.api";
import { Link } from "react-router-dom";
function Login() {
      const [email, setEmail] = useState();
      const [password, setPassword] = useState();
    console.log(email)
      const handlesubmit = async (e) => {
        e.preventDefault();
        const mes = document.querySelector("#message");
        if (!email || !password) {
          mes.innerHTML = "please enter email and password";
        }else{
          try{
            await LoginUser({ email, password }).then((res) => {
              console.log(res)
              window.localStorage.setItem("userdata", JSON.stringify(res));
            });
          }catch(err){
            mes.innerHTML = "wrong email or password";
            console.log(err)
          }
       
      }
        let data = window.localStorage.getItem("userdata");
       
        if(data){ 
          const userdata = JSON.parse(data);
          console.log(data)
          if(userdata.error){
            mes.innerHTML="wrong email or password"
           }else{
             let role = userdata.user.role;
           console.log(role)
             if(role==='admin'){
                  window.location.href='/admin'
                }else{
                    window.location.href='/mainN'
                    }
                  }
        }
       
    
      };
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="input1 in"
            type="email"
            name="email"
            placeholder="Email"
            id="inputEmail"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="input1 in"
            type="password"
            name="pswd"
            placeholder="Password"
            id="inputPassword"
            required=""
          />
          <button className="button1" onClick={handlesubmit}>
            Login
          </button>
          <div className="div">
            <Link className="message" to="/signup">don't have email yet</Link>
          </div>
          <div className="div">
          <div id="message" className="message"></div>
          </div>
        </form>
      </div>

  
    </div>
  );
}
export default Login;
