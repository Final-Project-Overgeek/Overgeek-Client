import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Carousel() {
  const history = useHistory();
  function gotoPayment(e) {
    e.preventDefault();
    if (!localStorage.access_token) {
      history.push({ pathname: "/login", state: { from: "subscribe" } });
      toast.error(`Please log in first to subscribe OverGeek!`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      history.push("/payments");
    }
  }

  return (
    <div>
      <div className="wrapper mb-4">
        <h4>
          <span></span>
        </h4>
      </div>
      <a href="/payments" onClick={(e) => gotoPayment(e)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Subscribe
      </a>
    </div>
  );
}

export default Carousel;
