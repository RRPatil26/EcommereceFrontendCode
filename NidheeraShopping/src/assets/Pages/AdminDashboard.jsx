import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  const admin = JSON.parse(
  localStorage.getItem("customer")
);

  const [dashboard,
      setDashboard] =
      useState({});

  const [orders,
      setOrders] =
      useState([]);

  useEffect(() => {

  if (
      !admin ||
      admin.role !== "ADMIN"
     )
  {
      navigate("/login");
      return;
  }

  axios.get(
    "http://localhost:4444/admin/dashboard"
  )
  .then((response) => {

      setDashboard(
        response.data
      );

  });

  axios.get(
    "http://localhost:4444/admin/recent-orders"
  )
  .then((response) => {

      setOrders(
        response.data
      );

  });

}, []);

  const logout = () => {

    localStorage.removeItem(
      "customer"
    );

    navigate("/login");
  };

  return (

    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center">

        <h2>
          ADMIN DASHBOARD
        </h2>

        <button
          className="btn btn-danger"
          onClick={logout}
        >
          Logout
        </button>

      </div>

      <hr/>

      <div className="row text-center">

        <div className="col-md-3">

          <div className="card shadow">

            <div className="card-body">

              <h5>
                Categories
              </h5>

              <h2>
                {dashboard.totalCategories}
              </h2>

            </div>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card shadow">

            <div className="card-body">

              <h5>
                Products
              </h5>

              <h2>
                {dashboard.totalProducts}
              </h2>

            </div>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card shadow">

            <div className="card-body">

              <h5>
                Orders
              </h5>

              <h2>
                {dashboard.totalOrders}
              </h2>

            </div>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card shadow">

            <div className="card-body">

              <h5>
                Customers
              </h5>

              <h2>
                {dashboard.totalCustomers}
              </h2>

            </div>

          </div>

        </div>

      </div>

      <br/>

      <h4>
        Recent Orders
      </h4>

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

            <th>
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {
            orders.map((o) => (

              <tr
                key={o.orderId}
              >

                <td>
                  {o.orderId}
                </td>

                <td>
                  ₹{o.totalAmount}
                </td>

                <td>
                  {o.orderStatus}
                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

      <div className="text-center">

        <button
          className="btn btn-primary"
          onClick={() =>
            navigate("/admin/orders")
          }
        >
          View All Orders
        </button>

      </div>

    </div>

  );
}

export default AdminDashboard;