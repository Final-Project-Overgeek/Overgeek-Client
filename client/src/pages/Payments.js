import React, { useState, useEffect } from "react";
import { Navbar, Loading, Footer, PaymentCard } from "../components";
import baseUrl from "../api";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const subscriptions = useSelector(
    (state) => state.subscriptionsReducer.subscriptions
  );

  useEffect(() => {
    dispatch(setSubscriptionAsync({ url, setLoading }));
  }, []);

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="content">
        <div className="row subscard">
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Subscribe and join with us!
          </h1>
          {loading ? (
            <Loading />
          ) : (
            <div className="row justify-content-center">
              {subscriptions.map((data) => (
                <PaymentCard data={data} key={data.name} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payments;
