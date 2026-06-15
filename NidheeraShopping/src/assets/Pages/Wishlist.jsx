import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";

function Wishlist() {

  const [wishlist, setWishlist] =
    useState([]);

  const customer = JSON.parse(
    localStorage.getItem("customer")
  );

  const loadWishlist = () => {

    axios.get(
      `http://localhost:3333/wishlist/${customer.userId}`
    )
    .then((response) => {

      setWishlist(response.data);

    });

  };

  useEffect(() => {

    loadWishlist();

  }, []);

  

const increaseQuantity = async(id) => {

  await axios.put(
    `http://localhost:3333/wishlist/increase/${id}`
  );

  loadWishlist();
};

const decreaseQuantity = async(id) => {

  await axios.put(
    `http://localhost:3333/wishlist/decrease/${id}`
  );

  loadWishlist();
};

const deleteWishlist = async(id) => {

  await axios.delete(
    `http://localhost:3333/wishlist/${id}`
  );

  loadWishlist();
};


const addToCart = async(item)=>{

  await axios.post(
    "http://localhost:4444/cart",
    {
      userId: customer.userId,
      productId: item.productId,
      quantity: item.quantity
    }
  );

  await axios.delete(
    `http://localhost:3333/wishlist/${item.wishlistId}`
  );

  loadWishlist();

  alert("Moved To Cart");
};

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        My Wishlist
      </h2>

      <div className="row">

        {
          wishlist.map((item) => (

            <div
              className="col-md-3 mb-4"
              key={item.wishlistId}
            >

              <div
                className="card shadow h-100"
              >

                <img
                  src={item.imageUrl}
                  alt=""
                  className="card-img-top"
                  style={{
                    height:"220px",
                    objectFit:"cover"
                  }}
                />

                <div className="card-body">

                  <h5>
                    {item.productName}
                  </h5>

                  <p>
                    {item.brand}
                  </p>

                  <h6>
                    ₹{item.price}
                  </h6>

                  <p>
                    Quantity :
                    {item.quantity}
                  </p>

                </div>

                <div className="d-flex justify-content-center align-items-center mb-3">

  <button
    className="btn btn-secondary btn-sm"
    onClick={() =>
      decreaseQuantity(
        item.wishlistId
      )
    }
  >
    -
  </button>

  <span className="mx-3">

    {item.quantity}

  </span>

  <button
    className="btn btn-secondary btn-sm"
    onClick={() =>
      increaseQuantity(
        item.wishlistId
      )
    }
  >
    +
  </button>

</div>
<button
  className="btn btn-danger w-100"
  onClick={() =>
    deleteWishlist(
      item.wishlistId
    )
  }
>
  Remove
</button>
<button
 className="btn btn-success w-100 mt-2"
 onClick={() => addToCart(item)}
>
 Add To Cart
</button>

              </div>

            </div>

          ))
        }

      </div>
      <Link
                                to="/"
                                className="ms-2"
                            >
                               Go Back to Home
                            </Link>

    </div>

  );
}

export default Wishlist;