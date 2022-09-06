import logo from '../../images/fav.png'
import Logout from "../../loglogic/logout";
import Token from "../../loglogic/token";


function Mainheader(){
    const email = Token().email
    return(
        <header className="hcontainer">
            <div>
              <img className="logoimg" src={logo} alt=''/>
            </div>
            <div className="rightpart">
            <form >
              <input className='input' />
              <button className='button'>search</button>
            </form>
           <div>
            <div className="circle">{email[0].toUpperCase()}</div>
            <button className='button2' onClick={Logout}>signout</button>
            </div>
            </div>
            
          </header>

    )
}
export default Mainheader   