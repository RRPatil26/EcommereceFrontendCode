import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const customer = JSON.parse(
    localStorage.getItem("customer")
  );

  const [shippingAddress,
    setShippingAddress] = useState("");

  const [phoneNumber,
    setPhoneNumber] = useState("");

  const [paymentMethod,
    setPaymentMethod] = useState("COD");

  const placeOrder = async () => {

    try {

      const response =
        await axios.post(
          "http://localhost:4444/orders/place",
          {
            userId: customer.userId,
            shippingAddress,
            phoneNumber,
            paymentMethod
          }
        );

      alert(response.data);

      navigate("/orders");

    } catch(error) {

      console.log(error);

      alert("Order Failed");

    }
  };

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2>
          Checkout
        </h2>

        <div className="mb-3">

          <label>
            Shipping Address
          </label>

          <textarea
            className="form-control"
            value={shippingAddress}
            onChange={(e)=>
              setShippingAddress(
                e.target.value
              )
            }
          />

        </div>

        <div className="mb-3">

          <label>
            Phone Number
          </label>

          <input
            type="text"
            className="form-control"
            value={phoneNumber}
            onChange={(e)=>
              setPhoneNumber(
                e.target.value
              )
            }
          />

        </div>

        <div className="mb-3">

          <label>
            Payment Method
          </label>

          <select
            className="form-control"
            value={paymentMethod}
            onChange={(e)=>
              setPaymentMethod(
                e.target.value
              )
            }
          >

            <option>
              COD
            </option>

            <option>
              UPI
            </option>

            <option>
              CARD
            </option>

          </select>

        </div>

        <button
          className="btn btn-success"
          onClick={placeOrder}
        >
          Place Order
        </button>

      </div>

    </div>

  );
}

export default Checkout;