import { useState } from "react";
import { cproduct } from "../../api/products.api";

function NewProduct() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [offer, setOffer] = useState();
  const [stock, setStock] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState("");

  function getdata() {
    const choose = document.querySelector("#choose-file");
    const imagec = document.querySelector("#image");
    const file = choose.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", function () {
        imagec.style.visibility="visible";
        imagec.innerHTML = '<img src="' + this.result + '"/>';
        setImage(this.result)
        
      });
    }
    
  }

  const Handlesubmit = async (e) => {
    e.preventDefault();

    await cproduct({
      name,
      price,
      category,
      stock,
      offer,
      image,
      description,
    });
  };
  return (
    <div className="containe">
      <div className="sec">
        <div id="image"></div>
        <input
          onChange={getdata}
          className="image"
          type="file"
          name="image"
          accept="image/*"
          id="choose-file"
        />
      </div>
      <div className="inputcontainer">
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
        <button className="button1" onClick={Handlesubmit}>
          submit
        </button>
      </div>
    </div>
  );
}
export default NewProduct;
