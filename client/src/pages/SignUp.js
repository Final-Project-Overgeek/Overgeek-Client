import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { registerAsync } from "../store/actions/userAction";
import { useHistory } from "react-router-dom";
import baseUrl from "../api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const url = baseUrl + "/register";
  const payload = { username, email, password, phone_number };
  const history = useHistory();

  function register(event) {
    event.preventDefault();
    registerAsync({ url, payload, history });
    setUsername("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
  }

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
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <label className="sr-only">Email</label>
          <input
            type="email"
            className="form-control mt-3"
            placeholder="Email"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label className="sr-only">Phone Number</label>
          <input
            type="number"
            className="form-control mt-3"
            placeholder="Phone Number"
            required
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            className="form-control mt-3"
            placeholder="Password"
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className="mt-3">
            <button
              className="btn btn-lg btn-block"
              onClick={(event) => {
                register(event);
              }}
            >
              Sign up
            </button>
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
