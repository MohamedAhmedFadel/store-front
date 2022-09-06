import Token from "../../loglogic/token";
import Card from "../home/card";
import Footer from "../home/footer";

import Mainheader from "./mainheader";
function Nuser(props) {
  const { token, data } = Token();

  if (data === null) {
    return <div>un authorized</div>;
  } else {
   
    if (token) {
      return (
        <div>
          <Mainheader />
          <div className="plist">
            {props.products.map((product) => (
              <Card product={product}  id={product.id} />
            ))}
          </div>
          <Footer />
        </div>
      );
    }
  }
}
export default Nuser;
