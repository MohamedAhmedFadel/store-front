import { useState } from "react";
import { update } from "../../api/products.api";
function EditProduct() {
    const [id, setId] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [offer, setOffer] = useState();
  const [stock, setStock] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState("");

  const Handlesubmit = async (e) => {
    e.preventDefault();
     await update({
      name,
      price,
      category,
      stock,
      offer,
      image,
      description,
      id
    });
    
  };
  return (
    <div className=" main containe">
      <div className="signup">
        <form>
        <label >
          update Product
          </label>
      {/* <div className="sec">
        <input
          onChange={(e) => setImage(e.target.files[0])}
          className="image"
          type="file"
          name="image"
        />
        <button className="button">upload</button>
      </div> */}
      <div className="inputcontainer">
      <input
          onChange={(e) => setId(e.target.value)}
          className="input1"
          type="text"
          name="id"
          placeholder="Product id"
          id="input-id"
          required=""
        />
        <input
          onChange={(e) => setName(e.target.value)}
          className="input1"
          type="text"
          name="name"
          placeholder="Product name"
          id="input-Name"
          required=""
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          className="input1"
          type="text"
          name="price"
          placeholder="Price"
          id="input-price"
          required=""
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          className="input1"
          type="text"
          name="category"
          placeholder="Category"
          id="input-Category"
          required=""
        />
        <input
          onChange={(e) => setStock(e.target.value)}
          className="input1"
          type="text"
          name="Stock"
          placeholder="Product Stock"
          id="input-Stock"
          required=""
        />
        <input
          onChange={(e) => setOffer(e.target.value)}
          className="input1"
          type="text"
          name="Offer"
          placeholder="Offer"
          id="input-Offer"
          required=""
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          className="input1"
          type="text"
          name="Description"
          placeholder="Description"
          id="input-Description"
          required=""
        />
        <button className='button1' onClick={Handlesubmit}>submit</button>
      </div>
      </form>
      </div>
    </div>
  );
}
export default EditProduct;
