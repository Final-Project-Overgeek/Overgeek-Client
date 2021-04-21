import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const VideoCard = ({ video, lecturer }) => {
  const history = useHistory();
  const toPayment = () => {
    if (!localStorage.access_token) {
      history.push({ pathname: "/login", state: { from: "subscribe" } });
      toast.error(`Please log in first to subscribe OverGeek!`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      history.push("/payments");
    }
  };
  return (
    <>
      {video.isFree === "true" ? (
        <div className="col-md-6 p-3">
          <div className="ratio ratio-16x9">
            <iframe
              title="Overgeek courses"
              src={video.url}
              width="640"
              height="480"
              allowFullScreen
            ></iframe>
          </div>
          <div style={{ textAlign: "start" }}>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>{video.title}</p>
            <span style={{ fontSize: "15px" }}>
              By
              <span style={{ fontWeight: "700" }}> {lecturer}</span>
            </span>
          </div>
        </div>
      ) : (
        <div className="col-md-6 p-3">
          <div
            className="ratio ratio-16x9"
            style={{ cursor: "pointer" }}
            onClick={toPayment}
          >
            <i
              class="bi bi-lock"
              style={{
                fontSize: "2.5rem",
                paddingTop: "9rem",
                zIndex: "1",
              }}
            ></i>
            <img
              src={video.thumbnail}
              alt={video.title}
              width="640"
              height="480"
              style={{ opacity: "0.3" }}
            />
          </div>
          <div style={{ textAlign: "start" }}>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>{video.title}</p>
            <span style={{ fontSize: "15px" }}>
              By
              <span style={{ fontWeight: "700" }}> {lecturer}</span>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
