import React, { useState, useEffect } from "react";
import { Navbar, Loading, Footer, PaymentCard } from "../components";
import baseUrl from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setSubscriptionAsync } from "../store/actions/subscriptionsAction";

function Payments() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const url = baseUrl + "/subscriptions";
  const subscriptions = useSelector(
    (state) => state.subscriptionsReducer.subscriptions
  );

  useEffect(() => {
    dispatch(setSubscriptionAsync({ url, setLoading }));
  }, [url, setLoading, dispatch]);

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
