import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();
  
  
  const customer = JSON.parse(
  localStorage.getItem("customer"));

  const [product, setProduct] =
    useState(null);

  useEffect(() => {

    axios.get(
      `http://localhost:3333/products/${id}`
    )
    .then((response) => {

      setProduct(response.data);

    });

  }, [id]);

  if (!product) {

    return <h3>Loading...</h3>;

  }

  const addToWishlist = async () => {

  try {

    await axios.post(
      "http://localhost:3333/wishlist",
      {
        userId: customer.userId,
        productId: product.productId,
        quantity: 1
      }
    );

    alert("Added To Wishlist");

  } catch(error) {

    console.log(error);

    alert("Unable To Add Wishlist");
  }
};


const addToCart = async (product) => {

  try {

    await axios.post(
      "http://localhost:4444/cart",
      {
        userId: customer.userId,
        productId: product.productId,
        quantity: 1
      }
    );

    alert("Added To Cart");

  } catch(error) {

    console.log(error);

    alert("Unable To Add Cart");
  }
};

  return (

    <div className="container mt-5">

      <div className="row">

        <div className="col-md-5">

          <img
            src={product.imageUrl}
            alt=""
            className="img-fluid"
          />

        </div>

        <div className="col-md-7">

          <h2>
            {product.productName}
          </h2>

          <h4>
            ₹{product.price}
          </h4>

          <p>
            Brand: {product.brand}
          </p>

          <p>
            {product.description}
          </p>

          <p>
            Stock:
            {product.stockQuantity}
          </p>

          <button   className="btn btn-outline-danger me-2"  onClick={addToWishlist}>  ❤️ Add To Wishlist</button>&nbsp;

          
          <button  className="btn btn-success me-2" onClick={() => addToCart(product)}> Add To Cart</button>

          <button
            className="btn btn-primary"
          ><Link to="/cart" className="mx-2 text-white text-decoration-none">
            Buy Now</Link>
          </button>

        </div>
        <Link
                                            to="/"
                                            className="ms-2"
                                        >
                                           Go Back to Home
                                        </Link>

      </div>

    </div>

  );
}

export default ProductDetails;