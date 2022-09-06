import { useState } from "react";
import { SignUp } from "../../api/users.api";

function Newuser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const handle = async (e) => {
    e.preventDefault();
    await SignUp({ name, email, password, role });
  };

  return (
    <div className="main containe">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            New User
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
          <input
            onChange={(e) => setRole(e.target.value)}
            className="input1"
            type="text"
            name="role"
            placeholder="role"
            id="input-role"
            required=""
          />
          <button className="button1" onClick={handle}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
export default Newuser;
