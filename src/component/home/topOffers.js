import Error from "../error";
import Loading from "../loading";
import Card from "./card";

function Topoffer(props) {
  const { products, loading, error } = props;
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div>
          <h1 className="adress">Top offers</h1>
          <div className="line"></div>
          <div className="plist">
            {products
              .filter((product) => product.offer)
              .map((product) => (
                <Card product={product} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Topoffer;
