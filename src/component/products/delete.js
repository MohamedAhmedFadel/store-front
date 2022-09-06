import {useState} from 'react'
import { dproduct } from '../../api/products.api';
function Deletep() {
const[id, setId]=useState()
const handeledeletion= async(e)=>{
  e.preventDefault();
await dproduct(id)

}
  return (
    <div className="main containe">
      <div className="signup">
        <form>
          <label>Delete Product</label>
          <input
             onChange={(e) => setId(e.target.value)}
            className="input1"
            type="text"
            name="id"
            placeholder="id"
            id="input-id"
            required=""
          />
          <button onClick={handeledeletion} className="button1">submit</button>
        </form>
      </div>
    </div>
  );
}
export default Deletep;
