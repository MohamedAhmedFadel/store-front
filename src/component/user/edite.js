import { useState } from "react";
import { update } from "../../api/products.api";

function Updateuser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [id, setId] = useState();
  const handle = async (e) => {
    e.preventDefault();
    await update({ name, email, password, role, id });
  };

  return (
    <div className="main containe">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div class="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            update User
          </label>
          <input
            onChange={(e) => setId(e.target.value)}
            className="input1"
            type="text"
            name="id"
            placeholder="user id"
            id="input-id"
            required=""
          />
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
export default Updateuser;
