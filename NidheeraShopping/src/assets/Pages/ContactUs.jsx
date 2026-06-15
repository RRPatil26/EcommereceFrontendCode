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


function ContactUs() {
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
          <h1 className="text-primary mb-4">
            Contact Us
          </h1>

          <p className="lead">
            We'd love to hear from you! Whether you have questions about
            laptops, orders, warranties, or technical support, our team is
            ready to help.
          </p>

          <div className="card shadow border-0 p-4 mt-4">
            <h4 className="mb-3">Customer Support</h4>

            <p>
              📞 <strong>Phone:</strong> +91 98765 43210
            </p>

            <p>
              📧 <strong>Email:</strong> support@laptophub.com
            </p>

            <p>
              💬 <strong>WhatsApp:</strong> +91 98765 43210
            </p>

            <p>
              🕒 <strong>Working Hours:</strong>
              <br />
              Monday - Saturday: 10:00 AM - 8:00 PM
              <br />
              Sunday: 11:00 AM - 5:00 PM
            </p>

            <p>
              📍 <strong>Address:</strong>
              <br />
              Laptophub Laptop Store
              <br />
              123 Computer Market Road
              <br />
              Tilakwadi, Belagavi
              <br />
              Karnataka - 590006
              <br />
              India
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/premium-photo/female-call-centre-operator-talking-with-customer-resolve-their-issues-phone_67155-38521.jpg"
            alt="Customer Support"
            className="img-fluid rounded shadow-lg"
            style={{
              maxHeight: "500px",
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

export default ContactUs;