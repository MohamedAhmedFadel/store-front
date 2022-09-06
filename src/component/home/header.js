import { Link } from "react-router-dom";
import logo from "../../images/fav.png";
import pic from "../../images/im.png";

function Header(props){
    return(

      <header className="header">
        <div className="container">
          <nav className="main-nav">
            <img className="logoimg" src={logo} alt="kids wear" />
            <div>
              <ul className="nav">
                <li>
                  <a href="#top">Home</a>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
                <li>
                  <Link to="/signup">sign up</Link>
                </li>
                <li>
                  <Link to="">About Us </Link>
                </li>
                <li>
                  <Link to="">Our Services </Link>
                </li>
                <li>
                  <Link to="">Contact Us </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="content">
            <div className="textbox">
              <h2>
                baby clothes
                <br />
                <span>sweet style</span>
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                harum laborum quisquam debitis cum, facilis possimus eius
                maiores voluptate quis Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facilis eum explicabo similique quam ..
              </p>
              <Link to="" className="link">
                view all products
              </Link>
            </div>
            <div className="imgbx">
              <img src={pic} className="dr" id="iim" alt="" />
            </div>
          </div>
        </div>
      </header>

      
    )
}
export default Header;