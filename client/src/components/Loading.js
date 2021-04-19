import React from "react";

const Loading = () => {
  return (
    <div className="container">
      <div className="spinner-border align-text-center loading" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
