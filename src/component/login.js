import { useState } from "react";
import { LoginUser } from "../api/users.api";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const userData = await LoginUser({ email, password });
    window.localStorage.setItem("userdata", JSON.stringify(userData))
    let data = window.localStorage.getItem("userdata");
      const userdata = JSON.parse(data);
    let role = userdata.user.role;
      console.log(role)
   if(role==='admin'){
        window.location.href='/admin'
      }else{
          window.location.href='/mainN'
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
        </form>
      </div>

  
    </div>
  );
}
export default Login;
