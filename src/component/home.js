import Footer from "./home/footer";
import Header from "./home/header";
import Topoffer from "./home/topOffers";

function Home(props) {
  return (
    <div>
<Header  />
<Topoffer products={props.products} />
<Footer/>
    </div>
  );
}
export default Home;
