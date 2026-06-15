import axios from "axios";
import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";

function MyOrders() {

  const [orders,setOrders] =
    useState([]);

  const customer =
    JSON.parse(
      localStorage.getItem(
        "customer"
      )
    );

  useEffect(() => {

    axios.get(
      `http://localhost:4444/orders/${customer.userId}`
    )
    .then((response)=>{

      setOrders(
        response.data
      );

    });

  }, []);

  return (

    <div className="container mt-5">

      <h2>
        My Orders
      </h2>

      <table
        className="table table-bordered"
      >

        <thead>

          <tr>

            <th>
              Order Id
            </th>

            <th>
              Amount
            </th>
            <th>Quantity</th>
            <th>Product IDs</th>

            <th>
              Status
            </th>

            <th>
              Date
            </th>

          </tr>

        </thead>

        <tbody>

          {
            orders.map((order)=>(

              <tr
                key={order.orderId}
              >

                <td>
                  {order.orderId}
                </td>

                <td>
                  ₹{order.totalAmount}
                </td>

                <td>
                  {
                    order.orderItems?.reduce(
                      (total, item) => total + item.quantity,0)
                  }
                </td>
                <td>
                {
                order.orderItems
                ?.map(item => item.productId).join(", ")}
                </td>

                <td>
                  {order.orderStatus}
                </td>

                <td>
                  {order.orderDate}
                  
                  
                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

      <Link to="/" className="ms-2" >Home</Link>

    </div>

  );
}

export default MyOrders;