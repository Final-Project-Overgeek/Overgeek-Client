import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Register = () => {
  return (
    <div
      className="container-fluid"
      style={{ minHeight: "100vh", background: "black" }}
    >
      <Navbar page={"signup"} />
      <div className="text-center box">
        <form style={{ maxWidth: "400px", margin: "auto" }}>
          <span style={{ color: "#fff" }}>Join With Us!</span>
          <h1 className="h3 mb-4 font-weight-bold" style={{ color: "#fff" }}>
            Start winning with OverGeek
          </h1>
          <label className="sr-only">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            required
            autoFocus
          />
          <label className="sr-only">Email</label>
          <input
            type="email"
            className="form-control mt-3"
            placeholder="Email"
            required
          />
          <label className="sr-only">Phone Number</label>
          <input
            type="number"
            className="form-control mt-3"
            placeholder="Phone Number"
            required
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            className="form-control mt-3"
            placeholder="Password"
            required
          />
          <div className="mt-3">
            <button className="btn btn-lg btn-block">Sign up</button>
          </div>
          <p style={{ fontSize: "12px", color: "#999" }}>
            By signing up, I agree to let OverGeek process my personal data in
            order to manage my personal account, in accordance with OverGeek's
          </p>
          <p style={{ color: "#666" }}>
            Have an account?
            <span>
              <Link to="/login">
                <a
                  href="/login"
                  style={{
                    textDecoration: "none",
                    color: "#f15a24",
                    marginLeft: "5px",
                  }}
                >
                  Log In
                </a>
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
