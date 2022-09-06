

function Counter(props) {
  
  const incriment = () => {
    props.setCounter((prevcounter) => prevcounter + 1);
  };
  const decriment = () => {
    props.setCounter((prevcounter) => prevcounter - 1);
  };
  return (
    <div className="counter"
    co={props.product.id}>
      <button onClick={decriment}>-</button>
      <span>{props.counter}</span>
      <button onClick={incriment}>+</button>
    </div>
  );
}
export default Counter;
