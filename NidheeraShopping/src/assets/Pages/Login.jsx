import axios from "axios";
import { useState } from "react";
import { Link,useNavigate  } from "react-router-dom";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

    const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    const response =
      await axios.post(
        "http://localhost:2222/auth/login",
        {
          email,
          password
        }
      );

    alert(response.data.message);

    if (
      response.data.message ===
      "Login Successful"
    ) {

      localStorage.setItem(
        "customer",
        JSON.stringify(response.data)
      );
      navigate("/");
    }
  };

  

  return (
    <div className="container mt-5">

      <div
        className="card p-4 shadow mx-auto"
        style={{ width: "400px" }}
      >

        <h3 className="text-center">
          Welcome Back
        </h3>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="btn btn-primary w-100"
          >
            Login
          </button>

        </form>

         <div className="text-center mt-3">

                    Don't have an account?
                    Register Here...

                    <Link
                        to="/register"
                        className="ms-2"
                    >
                        Register
                    </Link>
                    <br/>

                    <Link
                        to="/"
                        className="ms-2"
                    >
                        Home
                    </Link>

                </div>


      </div>

    </div>
  );
}

export default Login;