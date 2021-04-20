import React, { useState, useEffect } from "react";
import { Navbar, Loading } from "../components";
import axios from "axios";
import baseUrl from "../api";
import { useHistory, useParams } from "react-router-dom";
import { createToken } from "../store/actions/paymentsAction";
import { useDispatch, useSelector } from "react-redux";
import { setSubscriptionAsync } from "../store/actions/subscriptionsAction";

function Payments() {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.paymentsReducer.token);
  // const loading = useSelector((state) => state.paymentsReducer.isTokenLoading)
  const [result, setResult] = useState();
  const [newToken, setNewToken] = useState();
  //--------------------------------------------------------//
  const [loading, setLoading] = useState(true);
  const url = baseUrl + "/subscriptions";
  const history = useHistory()
  const subscriptions = useSelector(
    (state) => state.subscriptionsReducer.subscriptions
  );

  useEffect(() => {
    dispatch(setSubscriptionAsync({ url, setLoading }));
  }, []);

  console.log(subscriptions);

  function pay(e, payload) {
    e.preventDefault();
    // dispatch(createToken({url: 'http://localhost:3001/payments/token', payload: amount}))

    // console.log(token)
    // loading || !token.token ? console.log('loading....') :
    axios({
      url: "http://localhost:3001/payments/token",
      method: "POST",
      data: {
        // amount: amount
        payload,
      },
      headers: {
        access_token: localStorage.access_token
      },
    })
      .then((data) => {
        console.log(data.data);
        window.snap.pay(data.data.token, {
          onSuccess: function (result) {
            console.log(result, "asdasdsad");
          },
          onPending: (result) => {
            console.log(result, "pasti masuk sini!");
            axios({
              url: "http://localhost:3001/payments",
              method: "POST",
              data: {
                result,
              },
              headers: {
                access_token: localStorage.access_token
              },
            })
              .then((data) => {
                console.log(data);
                history.push('/')
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
  }
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container flex" style={{height: "100vh"}}>
        <div className="row subscard">
          {loading ? (
            <Loading />
          ) : (
            subscriptions.map((data) => {
              return (
                <div className="card col-3 mx-3" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={data.image}
                    style={{ height: "25rem" }}
                  />
                  <div className="card-body">
                    <p className="card-text text-warning">{data.name}</p>
                    <p className="card-text text-primary">{data.price}</p>
                    <button
                      className="btn btn-warning"
                      onClick={(e) => pay(e, data)}
                    >
                      Subscribe!
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* <form>
        <input type="number" onChange={(e)=> {setAmount(e.target.value)}}/>
        <button onClick={(e) => pay(e)}>but</button>
      </form> */}
    </div>
  );
}

export default Payments;
