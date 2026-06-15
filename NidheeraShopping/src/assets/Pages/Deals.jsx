import React from "react";
import { Link, useNavigate  } from "react-router-dom";

function Deals() {
  const deals = [
    {
      id: 1,
      name: "Dell Inspiron 15",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      originalPrice: "₹65,999",
      dealPrice: "₹54,999",
      discount: "17% OFF",
    },
    {
      id: 2,
      name: "HP Pavilion Gaming",
      image:
        "https://m.media-amazon.com/images/I/61m3WarwptL._AC_UF1000,1000_QL80_.jpg",
      originalPrice: "₹79,999",
      dealPrice: "₹67,999",
      discount: "15% OFF",
    },
    {
      id: 3,
      name: "Lenovo IdeaPad Slim",
      image:
        "https://images.unsplash.com/photo-1504707748692-419802cf939d",
      originalPrice: "₹59,999",
      dealPrice: "₹49,999",
      discount: "16% OFF",
    },
    {
      id: 4,
      name: "ASUS VivoBook",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
      originalPrice: "₹69,999",
      dealPrice: "₹57,999",
      discount: "18% OFF",
    },
  ];

  return (
    <div className="container my-5">
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
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-primary fw-bold">
          🔥 Today's Laptop Deals
        </h1>

        <p className="lead text-muted">
          Grab the best discounts on top laptop brands before the offers end.
        </p>
      </div>

      {/* Deals Grid */}
      <div className="row">
        {deals.map((deal) => (
          <div className="col-md-3 mb-4" key={deal.id}>
            <div className="card h-100 shadow border-0">

              <span
                className="badge bg-danger position-absolute m-2"
                style={{ zIndex: 1 }}
              >
                {deal.discount}
              </span>

              <img
                src={deal.image}
                className="card-img-top"
                alt={deal.name}
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center">
                <h5 className="card-title">
                  {deal.name}
                </h5>

                <p className="text-muted">
                  <del>{deal.originalPrice}</del>
                </p>

                <h4 className="text-success">
                  {deal.dealPrice}
                </h4>

                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Promotional Banner */}
      <div className="bg-primary text-white text-center p-5 rounded shadow mt-5">
        <h2>🎉 Mega Sale Week</h2>

        <p className="lead">
          Up to 40% OFF on selected laptops and accessories.
        </p>

        <button className="btn btn-light btn-lg"><Link to="/products" className="mx-2  text-decoration-none">
          Explore Offers</Link>
        </button>
      </div>
    </div>
  );
}

export default Deals;