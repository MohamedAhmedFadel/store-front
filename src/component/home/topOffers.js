import Card from "./card";

function Topoffer(props) {
  return (
    <div>
      <h1 className="adress">Top offers</h1>
      <div className="line"></div>
      <div className="plist" >
        {props.products
          .filter((product) => product.offer)
          .map((product) => (
           <Card product={product} />
          ))}
      </div>
    </div>
  );
}
export default Topoffer;
