import logo from '../../images/fav.png'
import Logout from "../../loglogic/logout";
import Token from "../../loglogic/token";
import { Link } from "react-router-dom";
import Search from '../seaarch';

function Mainheader(){
    const email = Token().email
    return(
        <header className="hcontainer">
            <div>
              <img className="logoimg" src={logo} alt=''/>
            </div>
            <div className="rightpart">
           <Search/>
            <div> <Link to="/cart">cart</Link></div>
           <div>
            <div className="circle">{email[0].toUpperCase()}</div>
            <button className='button2' onClick={Logout}>signout</button>
            </div>
            </div>
            
          </header>

    )
}
export default Mainheader   