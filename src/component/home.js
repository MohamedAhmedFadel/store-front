import Footer from "./home/footer";
import Header from "./home/header";
import Topoffer from "./home/topOffers";

function Home(props) {
const {products,loading, error} =props
  return (
    <div>
<Header  />
<Topoffer products={products} loading={loading} error={error} />
 <Footer/> 
    </div>
  );
}
export default Home;
