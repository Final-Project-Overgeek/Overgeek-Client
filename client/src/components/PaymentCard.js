import React from "react";
import axios from "axios";
import baseUrl from "../api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions/userAction";
import swal from "@sweetalert/with-react";
toast.configure();

const PaymentCard = ({ data }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const convertToRupiah = (angka) => {
    let rupiah = "";
    let angkarev = angka.toString().split("").reverse().join("");
    for (let i = 0; i < angkarev.length; i++)
      if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
    return rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("");
  };

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
            axios({
              url: baseUrl + "/payments/creditcards",
              method: "POST",
              data: {
                result,
                payload,
              },
              headers: {
                access_token: localStorage.access_token,
              },
            })
              .then((data) => {
                console.log(data.data);
              })
              .catch((err) => {
                console.log(err);
              });
            swal(
              "Payment Succeed!",
              "Welcome to Our Community, Please log in again!",
              "success"
            );
            history.push("/login");
            localStorage.removeItem("access_token");
            dispatch(setUser({}));
          },
          onPending: (result) => {
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
                history.push("/");
              })
              .catch((err) => {
                console.log(err);
              });
          },
          onError: function (result) {
            console.log(result);
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
            ? "Monthly"
            : data.name === "season"
            ? "Season"
            : "Annual"}
        </p>
        <p className="card-text">IDR {convertToRupiah(data.price)}</p>
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
