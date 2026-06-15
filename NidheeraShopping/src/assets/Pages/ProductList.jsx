import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate , Link} from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();

  const [products,setProducts] =
      useState([]);

  useEffect(()=>{

    axios.get(
      "http://localhost:3333/products"
    )
    .then((response)=>{

      setProducts(response.data);

    });

  },[]);

  return(

    <div className="container">

      <div className="row">

        {
          products.map((product)=>(

            <div
              className="col-md-3 mb-4"
              key={product.productId}
            >

              <div
                className="card shadow"
              >

                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  style={{
                    height:"250px",
                    objectFit:"cover"
                  }}
                  alt=""
                />

                <div className="card-body">

                  <h5>
                    {product.productName}
                  </h5>

                  <p>
                    {product.brand}
                  </p>

                  <h6>
                    ₹{product.price}
                  </h6>

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

export default ProductList;