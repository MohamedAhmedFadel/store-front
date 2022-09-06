import { useState } from "react";
import { SignUp } from "../api/users.api";


function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   
    const handlesignup = async (e) => {
      e.preventDefault();
       await SignUp({ name, email, password });
       window.location.href='/login'

    };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div class="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
          onChange={(e) => setName(e.target.value)}
            className="input1"
            type="text"
            name="txt"
            placeholder="User name"
            id="input-Name"
            required=""
          />
          <input
          onChange={(e) => setEmail(e.target.value)}
            className="input1"
            type="email"
            name="email"
            placeholder="Email"
            id="input-Email"
            required=""
          />
          <input
          onChange={(e) => setPassword(e.target.value)}
            className="input1"
            type="password"
            name="pswd"
            placeholder="Password"
            id="input-Password"
            required=""
          />
          <button className="button1" onClick={handlesignup}>Sign up</button>
        </form>
      </div>

      

    </div>
  );
}
export default Signup;
