import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Login = () => {
  return (
    <div
      className="container-fluid"
      style={{ minHeight: "100vh", background: "black" }}
    >
      <Navbar page={"login"} />
      <div className="text-center box">
        <form style={{ maxWidth: "400px", margin: "auto" }}>
          <h1 className="h3 mb-4 font-weight-bold" style={{ color: "#fff" }}>
            Member Login
          </h1>
          <label className="sr-only">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username or email"
            required
            autoFocus
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            className="form-control mt-3"
            placeholder="Password"
            required
          />
          <div className="mt-3">
            <button className="btn btn-lg btn-block">Log in</button>
          </div>
        </form>
        <p style={{ color: "#666" }}>
          Not a member?
          <span>
            <Link to="/signup">
              <a
                href="/signup"
                style={{
                  textDecoration: "none",
                  color: "#f15a24",
                  marginLeft: "5px",
                }}
              >
                Sign Up
              </a>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
