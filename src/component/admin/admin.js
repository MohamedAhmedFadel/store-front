import Token from "../../loglogic/token";
import Footer from "../home/footer";
import Mainheader from "../normalUser/mainheader";
import { Outlet } from "react-router-dom";
import Sidemenu from "./sidemenu";
function Admin() {
  const { data, token, role } = Token();
  if (data === null) {
    return <div>un authorized</div>;
  } else {
    if (token && role === "admin") {
      return (
        <div>
          <Mainheader />
          <div className="scontainer">
            <Sidemenu />
            <Outlet />
          </div>
          {/* <Footer /> */}
        </div>
      );
    } else {
      return <div>un authorized</div>;
    }
  }
}
export default Admin;
