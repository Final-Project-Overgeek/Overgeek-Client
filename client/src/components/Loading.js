import React from "react";

const Loading = () => {
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <div className="container">
        <div className="text-center">
          <div
            className="spinner-border"
            role="status"
            style={{ marginTop: "20rem", color: "#f15a24" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
