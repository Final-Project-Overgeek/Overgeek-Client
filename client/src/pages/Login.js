import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar } from "../components";
import baseUrl from "../api";
import { loginAsync } from "../store/actions/userAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const url = baseUrl + "/login";
  const payload = { email, password };
  
  function login(event) {
    console.log(history.location.pathname)
    const from = history.location.state
    console.log(from,'<><><>')
    event.preventDefault();
    loginAsync({ url, payload, history });
    dispatch(loginAsync({ url, payload, history }));
  }

  return (
    <div
    
      className="container-fluid"
      style={{ minHeight: "100vh", background: "black" }}
    >
      <Navbar page={"login"} />
      {console.log(history.location.state)}
      <div className="text-center box">
        <form
          style={{
            maxWidth: "400px",
            margin: "4rem auto 0",
          }}
        >
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
            onChange={(event) => {
              setEmail(event.target.value);
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
                login(event);
              }}
            >
              Log in
            </button>
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
