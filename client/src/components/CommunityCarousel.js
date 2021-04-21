import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/userAction";
import baseUrl from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Carousel() {
  const dispatch = useDispatch();
  const history = useHistory();
  const url = baseUrl + "/users";
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(getUser({ url }));
  }, [user.premium, url, dispatch]);

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

  function notice(e) {
    e.preventDefault();
    toast.dark(
      `You have already subscribed OverGeek until ${user.subscription_date.slice(
        0,
        10
      )}`,
      {
        autoClose: 5000,
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }

  return (
    <div>
      <div className="wrapper mb-4">
        <h4>
          <span></span>
        </h4>
      </div>
      {!user.premium ? (
        <a href="/payments" onClick={(e) => gotoPayment(e)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Subscribe
        </a>
      ) : (
        <a href="/payments" onClick={(e) => notice(e)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Subscribed
        </a>
      )}
    </div>
  );
}

export default Carousel;
