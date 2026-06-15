import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        mobileNo: "",
        address: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:2222/auth/register",
                user
            );

            setMessage(response.data);
            alert(response.data);

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (error) {

            if (error.response) {
                setMessage(error.response.data);
            } else {
                setMessage("Registration Failed");
            }
        }
    };

    return (

        <div
            className="container d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
        >

            <div
                className="card shadow p-4"
                style={{
                    width: "500px",
                    borderRadius: "15px"
                }}
            >

                <h2
                    className="text-center mb-4"
                    style={{ color: "#5e17eb" }}
                >
                    Nidheera Registration
                </h2>

                {message && (
                    <div className="alert alert-info">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            className="form-control"
                            value={user.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={user.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Mobile Number
                        </label>

                        <input
                            type="text"
                            name="mobileNo"
                            className="form-control"
                            value={user.mobileNo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Address
                        </label>

                        <textarea
                            name="address"
                            className="form-control"
                            rows="3"
                            value={user.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn w-100 text-white"
                        style={{
                            backgroundColor: "#5e17eb"
                        }}
                    >
                        Register
                    </button>

                </form>

                <div className="text-center mt-3">

                    Already have an account?

                    <Link
                        to="/login"
                        className="ms-2"
                    >
                        Login
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Register;