import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/index";
// import ReactMidtrans from 'react-midtrans'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ReactMidtrans clienttKey={'SB-Mid-client-2I-9L7MtXwodqM3f'} token={'0a3ad3d6-fcd8-4d3b-836d-fe81e950fd7d'}> */}
      <App />
      {/* <button className="btn btn-danger" onClick={(e) => pay(e)}>Pay!</button> */}
      {/* </ReactMidtrans> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
