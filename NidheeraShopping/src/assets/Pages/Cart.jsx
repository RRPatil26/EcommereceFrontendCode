import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";

function Cart() {

    const navigate = useNavigate();

    const [cartItems, setCartItems] =
        useState([]);

    const customer = JSON.parse(
        localStorage.getItem("customer")
    );

    const loadCart = () => {

        axios.get(
            `http://localhost:4444/cart/${customer.userId}`
        )
        .then((response) => {

            setCartItems(
                response.data
            );

        })
        .catch((error) => {

            console.log(error);

        });
    };

    useEffect(() => {

        loadCart();

    }, []);

    const removeItem = async(id) => {

        await axios.delete(
            `http://localhost:4444/cart/${id}`
        );

        loadCart();
    };

    const increaseQuantity = async(id) => {

        await axios.put(
            `http://localhost:4444/cart/increase/${id}`
        );

        loadCart();
    };

    const decreaseQuantity = async(id) => {

        await axios.put(
            `http://localhost:4444/cart/decrease/${id}`
        );

        loadCart();
    };

    const grandTotal =
        cartItems.reduce(
            (total,item)=>
            total + item.subtotal,
            0
        );

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                My Cart
            </h2>

            <div className="row">

                <div className="col-md-8">

                    {
                        cartItems.map((item) => (

                            <div
                                className="card mb-3 shadow-sm"
                                key={item.cartItemId}
                            >

                                <div className="row g-0">

                                    <div className="col-md-3">

                                        <img
                                            src={item.imageUrl}
                                            alt=""
                                            className="img-fluid rounded-start"
                                            style={{
                                                height:"180px",
                                                objectFit:"cover"
                                            }}
                                        />

                                    </div>

                                    <div className="col-md-9">

                                        <div className="card-body">

                                            <h5>
                                                {item.productName}
                                            </h5>

                                            <h6>
                                                ₹{item.price}
                                            </h6>

                                            <p>
                                                Subtotal :
                                                ₹{item.subtotal}
                                            </p>

                                            <div
                                                className="d-flex align-items-center"
                                            >

                                                <button
                                                    className="btn btn-secondary btn-sm"
                                                    onClick={() =>
                                                        decreaseQuantity(
                                                            item.cartItemId
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
                                                            item.cartItemId
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>

                                            </div>

                                            <button
                                                className="btn btn-danger mt-3"
                                                onClick={() =>
                                                    removeItem(
                                                        item.cartItemId
                                                    )
                                                }
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </div>

                <div className="col-md-4">

                    <div className="card shadow p-4">

                        <h4>
                            Order Summary
                        </h4>

                        <hr/>

                        <h5>
                            Total :
                            ₹{grandTotal}
                        </h5>

                        <button  className="btn btn-success"  onClick={() =>    navigate("/checkout")  }>
                        Proceed To Checkout
                    </button>

                    </div>

                </div>

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

export default Cart;