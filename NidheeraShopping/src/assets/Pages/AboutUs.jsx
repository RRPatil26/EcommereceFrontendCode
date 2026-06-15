import React from "react";
import { Link,useNavigate  } from "react-router-dom";

function AboutUs() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
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
                              
                              <Link to="/" className="mx-2 text-white text-decoration-none">Home</Link>
                              <Link to="/products" className="mx-2 text-white text-decoration-none">Products</Link>
                              <Link to="/deals" className="mx-2 text-white text-decoration-none">Deals</Link>
                              <Link to="/about"  className="mx-2 text-white text-decoration-none">About Us</Link>
                              <Link to="/contact"  className="mx-2 text-white text-decoration-none">Contact Us</Link>
                            </ul>
                          </div>
                        </div>

        {/* Left Side Content */}
        <div className="col-md-6">
          <h1 className="mb-4 text-primary">
            About Our Laptop Store
          </h1>

          <p className="lead">
            Welcome to <strong>LaptopHub Laptops</strong>, your trusted
            destination for high-quality laptops and computer accessories.
            We offer a wide range of laptops for students, professionals,
            gamers, and businesses at competitive prices.
          </p>

          <p>
            Our mission is to provide the latest technology products with
            exceptional customer service. Whether you're looking for a
            budget-friendly laptop, a powerful workstation, or a gaming
            machine, we have the perfect solution for your needs.
          </p>

          <hr />

          <h4>Our Store Address</h4>

          <p>
            <strong>TechZone Laptop Store</strong>
            <br />
            123 Computer Market Road
            <br />
            Tilakwadi
            <br />
            Belagavi, Karnataka - 590006
            <br />
            India
          </p>

          <h5>Contact Information</h5>

          <p>
            📞 +91 98765 43210
            <br />
            📧 support@laptophub.com
            <br />
            🕒 Mon - Sat: 10:00 AM - 8:00 PM
          </p>
        </div>

        {/* Right Side Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Laptop Shop"
            className="img-fluid rounded shadow"
            style={{
              maxHeight: "450px",
              width: "100%",
              objectFit: "cover",
            }}
          />
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

export default AboutUs;