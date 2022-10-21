import { Delete, updateaddproduct } from "../api/orders";

function Pic(props) {
  const  {product}  = props;

  const handeleDel = async () => {
    await Delete({ id: product.id });
  };
  const updateqty = async (e) => {
    e.preventDefault();
    await updateaddproduct({
      quantity: e.target.value,
      products_id: product.products_id,
    });
  };
  return (
    
            <div>
             
                <ul className="flex pmenu" >
                      <li>
                        <img src={product.image} className="image" alt={product.name} />
                      </li>
                      <li>{product.name}</li>
                      <li>
                        <select value={product.quantity} onChange={updateqty}>
                          {[...Array(product.stock).keys()].map((x) => (
                            <option key={x} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </li>
                      <li>{product.price} $</li>
                      <li>
                        {" "}
                        <button onClick={handeleDel}>Delete</button>
                      </li>
                    </ul>
          
                    
            </div>
           
  
  );
}
export default Pic;
