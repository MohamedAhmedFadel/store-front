function Total(props) {
  if(props.orders.length===0){
    return (
<div>no products in the cart</div>
    )
  }else{
  return (
    <div className="boxcontainer">
      <div className="box">
        <div>
          <span>number of items : </span>
          <span>{props.orders.reduce((a, b) => a + b.quantity, 0)}</span>
        </div>
        <div>
          <span>total price : </span>
          <span>
            {props.orders.reduce((a, b) => a + b.quantity * b.price, 0)} $
          </span>
        </div>
      </div>
    </div>
  );
}
}
export default Total;
