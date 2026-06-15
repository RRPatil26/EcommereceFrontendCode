import React from "react";
import axios from "axios";
import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaTruck,
  FaUndo,
  FaLock,
  FaClock,FaUserCircle,
} from "react-icons/fa";
import logo from "../logo1.png";
import Nidheera from "../Nidheera1.jpeg";
import { Link, useNavigate  } from "react-router-dom";
import { useEffect,useState } from "react";


function Home() {

  const navigate = useNavigate();

const customer = JSON.parse(
  localStorage.getItem("customer")
);



const handleLogout = () => {
  localStorage.removeItem("customer");
  navigate("/login");
};



  const [categories,
       setCategories] =
       useState([]);

       useEffect(() => {

  axios.get(
    "http://localhost:3333/categories"
  )
  .then((response) => {
    console.log(response.data);

    setCategories(
      response.data
    );

  });

}, []);

  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header */}

      <div className="bg-white shadow-sm">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-2">
              <h3
                style={{
                  color: "#5e17eb",
                  fontWeight: "bold",
                }}
              >
                
                <img   src={logo}  alt="logo"  className="img-fluid"/>
              </h3>
            </div>

            

           <div className="col-md-10 d-flex justify-content-end align-items-center flex-wrap">

  <FaHeart   size={22}  className="mx-2"  style={{ cursor: "pointer" }}  onClick={() => navigate("/wishlist")}/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Link to="/cart">

    <FaShoppingCart  size={22} className="mx-2" />

</Link>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<Link   to="/orders"  className="mx-3 text-dark">
  <FaUserCircle size={28} />
</Link>

  {customer ? (

    <>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span
        className="mx-3 fw-bold"
        style={{ color: "#5e17eb" }}
      >
        Welcome,&nbsp;{customer.fullName}
      </span>


      {
  customer.role === "ADMIN" && (

    <Link
      to="/admin"
      className="mx-3"
    >
      Admin Dashboard
    </Link>

  )
}



&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button
        className="btn btn-danger btn-sm"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>

  ) : (

    <>
      <Link to="/login" className="mx-3">
        Login
      </Link>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/register" className="mx-3">
        Register
      </Link>
      
    </>
    

  )}

</div>

            
          </div>
        </div>

        {/* Menu */}

        <div
          style={{
            background: "#4B0082",
            color: "white",
          }}
        >
          <div className="container">
            <ul
              className="nav py-2 justify-content-center"
              style={{ fontWeight: "500" }}
            >
              
              <li className="nav-item px-3"><a href="#categories-section" className="mx-2 text-white text-decoration-none">Categories</a></li>
              <Link to="/" className="mx-2 text-white text-decoration-none">Home</Link>
              <Link to="/products" className="mx-2 text-white text-decoration-none">Products</Link>
              <Link to="/deals" className="mx-2 text-white text-decoration-none">Deals</Link>
              <Link to="/about"  className="mx-2 text-white text-decoration-none">About Us</Link>
              <Link to="/contact"  className="mx-2 text-white text-decoration-none">Contact Us</Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Hero Section */}

      <div
        className="container mt-4"
        style={{
          background: "#f3eefc",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div className="row align-items-center">
          <div className="col-md-5 p-5">
            <h5>New Season</h5>
            <h5>New Collection</h5>

            <h1 className="fw-bold mt-3">
              Discover Style
              <br />
              That Inspires
            </h1>

            <p className="text-muted mt-4">
              Streamline Ordinary. Unlock Extraordinary.
            </p>

            <button
              className="btn text-white mt-3"
              style={{
                background: "#5e17eb",
                padding: "10px 30px",
              }}
            >
              <Link to="/products" className="mx-2" style={{ color: "white" }}>
              Shop Now
              </Link>
            </button>

            


          </div>

          <div className="col-md-7 text-center">
            <img
              src="https://in-files.apjonlinecdn.com/landingpages/category-family/hp-laptops-family/images/w90_omnibook_range_img.jpg"
              //src={Nidheera}
              alt=" "
              className="img-fluid"
              style={{
                maxHeight: "450px",
                maxWidth: "450px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Features */}

      <div className="container bg-white py-4 shadow-sm">
        <div className="row text-center">
          <div className="col-md-3">
            <FaTruck size={30} />
            <h6 className="mt-2">Free Shipping</h6>
            <small>On orders above ₹49999</small>
          </div>

          <div className="col-md-3">
            <FaLock size={30} />
            <h6 className="mt-2">Secure Payment</h6>
            <small>100% secure payment</small>
          </div>

          <div className="col-md-3">
            <FaUndo size={30} />
            <h6 className="mt-2">Easy Returns</h6>
            <small>30 days return policy</small>
          </div>

          <div className="col-md-3">
            <FaClock size={30} />
            <h6 className="mt-2">24/7 Support</h6>
            <small>Always here to help</small>
          </div>
        </div>
      </div>

      {/* Categories */}

      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-4">
          <h3 className="fw-bold mt-3">Shop By Category</h3>
          <span
            style={{
              color: "#5e17eb",
              cursor: "pointer",
            }}
          >
            {/*<Link to="/products" className="mx-3">
        View All
      </Link>*/}
            
          </span>
        </div>

        <div id="categories-section" className="row">

        {
          categories.map((category) => (

            <div
              className="col-md-3"
              key={category.categoryId}
            >

              <div   className="card shadow-sm"   style={{ cursor: "pointer" }}  onClick={() =>
                navigate(`/products/category/${category.categoryId}`)
                }
>

                <img
                  src={category.categoryImage}
                  className="card-img-top"
                  alt=""
                  style={{
                    height:"150px",
                    width:"250px"
                  }}
                />

                <div
                  className="card-body"
                >

                  <h6>
                    {category.categoryName}
                  </h6>
                  {category.description}

                </div>

              </div>

            </div>

          ))
        }

      </div>
      </div>
    </div>
  );
}

export default Home;