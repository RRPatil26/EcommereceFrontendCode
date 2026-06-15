import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate,Link } from "react-router-dom";

function ProductsByCategory() {
      const navigate = useNavigate();

  const { categoryId } = useParams();

  const [products,setProducts] =
        useState([]);

  useEffect(() => {

    axios.get(
      `http://localhost:3333/products/category/${categoryId}`
    )
    .then((response)=>{

      setProducts(response.data);

    });

  }, [categoryId]);

  return (

    <div className="container mt-4">

      <h2>Products</h2>

      <div className="row">

        {
          products.map((product)=>(

            <div
              className="col-md-3"
              key={product.productId}
            >

              <div className="card">

                <img
                  src={product.imageUrl}
                  alt=""
                  className="card-img-top"
                />

                <div className="card-body">

                  <h5>
                    {product.productName}
                  </h5>

                  <p>
                    ₹{product.price}
                  </p>

                  <button   className="btn btn-primary"  onClick={() =>    navigate(`/products/${product.productId}`)  }>
                    View Details
                    </button>

                </div>

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

export default ProductsByCategory;