import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/userAction";
import baseUrl from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Carousel() {
  const dispatch = useDispatch()
  const url = baseUrl + "/users"
  const user = useSelector((state) => state.userReducer.user)
  useEffect(() => {
    dispatch(getUser({ url }));
  }, [user.premium]);

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

  function notice(e){
    e.preventDefault()
    toast.success(`You have already subscribed!`, {
      autoClose: 5000,
      position: toast.POSITION.TOP_CENTER,
    });
  }

  return (
    <div>
      <div className="wrapper mb-4">
        <h4>
          <span></span>
        </h4>
      </div>
      {
        !user.premium ? 
          <a href="#" onClick={(e) => gotoPayment(e)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Subscribe
          </a> :
          <a href="#" onClick={(e) => notice(e)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Subscribed
          </a>
        
      }
    </div>
  );
}

export default Carousel;
