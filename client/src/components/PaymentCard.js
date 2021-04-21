import React from "react";
import axios from "axios";
import baseUrl from "../api";
import { useHistory } from "react-router-dom";

const PaymentCard = ({ data }) => {
  const history = useHistory();

  const pay = (e, payload) => {
    e.preventDefault();
    axios({
      url: baseUrl + "/payments/token",
      method: "POST",
      data: {
        payload,
      },
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((data) => {
        window.snap.pay(data.data.token, {
          onSuccess: function (result) {
            console.log(result, "asdasdsad");
          },
          onPending: (result) => {
            console.log(result, "pasti masuk sini!");
            axios({
              url: baseUrl + "/payments",
              method: "POST",
              data: {
                result,
              },
              headers: {
                access_token: localStorage.access_token,
              },
            })
              .then((data) => {
                console.log(data);
                history.push("/");
              })
              .catch((err) => {
                console.log(err);
              });
          },
          onError: function (result) {
            console.log(result, "");
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="card col-md-3 ml-3 mr-3"
      style={{ background: "transparent" }}
    >
      <img
        className="card-img-top"
        src={data.image}
        style={{ height: "25rem" }}
        alt="img"
      />
      <div className="card-body">
        <p className="card-text">
          {data.name === "monthly"
            ? "1 month"
            : data.name === "season"
            ? "6 months"
            : "12 months"}
        </p>
        <p className="card-text">IDR {data.price}</p>
        <button
          className="btn button-courses"
          style={{
            background: "#f15a24",
            bordeRadius: "5px",
            color: "white",
          }}
          onClick={(e) => pay(e, data)}
        >
          Subscribe!
        </button>
      </div>
    </div>
  );
};

export default PaymentCard;
