import React, { useEffect, useState } from "react";
import { Navbar, Loading, VideoCard, Footer } from "../components";
import baseUrl from "../api";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setLecturerAsync,
  setLecturerRating,
} from "../store/actions/lecturerAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Lecturer = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const url = baseUrl + "/lecturers/" + id;
  const urlRating = `${baseUrl}/ratings/${id}`;
  const dispatch = useDispatch();
  const lecturer = useSelector((state) => state.lecturerReducer.lecturer);

  useEffect(() => {
    dispatch(setLecturerAsync({ url, setLoading }));
  }, [url, dispatch]);

  const rateLecturer = () => {
    if (!localStorage.access_token) {
      history.push("/login");
      toast.error(`Please log in first to rate lecturer!`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(setLecturerRating({ urlRating, setLoading }));
  };

  return (
    <div className="container-fluid">
      <div className="content">
        <Navbar />
        {loading ? (
          <Loading />
        ) : (
          <div className="row">
            <div
              className="mb-3 p-2"
              style={{
                textAlign: "left",
                width: "25cm",
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "black",
              }}
            >
              <div className="row">
                <h1
                  className="card-title text-center mb-5"
                  style={{ color: "#fff", fontWeight: "bold" }}
                >
                  {lecturer[0].name}
                </h1>
                <div className="col-md-4 text-center">
                  <img
                    className="card-img-top"
                    src={lecturer[0].image}
                    alt={lecturer[0].name}
                    id="img-detail"
                  />
                </div>
                <div className="col-md-5">
                  <div className="card-body" style={{ fontSize: "18px" }}>
                    <p
                      className="detail-info fw-bold"
                      style={{ color: "#f15a24" }}
                    >
                      Profile:
                    </p>
                    <p
                      className="movie-desc detail"
                      style={{ textAlign: "justify" }}
                    >
                      {lecturer[0].profile}
                    </p>
                    <p
                      className="detail-info fw-bold"
                      style={{ color: "#f15a24" }}
                    >
                      Game:
                    </p>
                    <p className="movie-desc detail">{lecturer[0].game}</p>
                    <p
                      className="detail-info fw-bold"
                      style={{ color: "#f15a24" }}
                    >
                      Language:
                    </p>
                    <p className="movie-desc detail">{lecturer[0].language}</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card-body" style={{ fontSize: "18px" }}>
                    <p
                      className="detail-info fw-bold"
                      style={{ color: "#f15a24" }}
                    >
                      Team:
                    </p>
                    <p className="movie-desc detail">{lecturer[0].team}</p>
                    <p
                      className="detail-info fw-bold"
                      style={{ color: "#f15a24" }}
                    >
                      Role:
                    </p>
                    <p className="movie-desc detail">{lecturer[0].role}</p>
                    <p
                      className="detail-info fw-bold"
                      style={{ color: "#f15a24" }}
                    >
                      Rating:
                    </p>
                    <p className="movie-desc detail">
                      <i
                        className="bi bi-star-fill mr-1"
                        style={{ color: "gold" }}
                      ></i>
                      {lecturer[0].rating}
                      <span style={{ fontSize: "10px", marginRight: "3px" }}>
                        /5
                      </span>
                      <span style={{ color: "#666" }}>|</span>
                      <span
                        className="rate-icon"
                        style={{ cursor: "pointer" }}
                        onClick={rateLecturer}
                      >
                        <i className="bi bi-star mr-1 ml-1"></i>
                        <span style={{ fontSize: "12px" }}>
                          Rate {lecturer[0].name}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <h1
                className="card-title text-center mb-5"
                style={{ color: "#fff", fontWeight: "bold" }}
              >
                All Courses
              </h1>
              <div className="col-md-6 p-3">
                <div className="ratio ratio-16x9">
                  <iframe
                    title="YouTube video player"
                    src="https://drive.google.com/file/d/1bYAEzTIgFvBCPqL0nHSkmBhrWjL7Ybiq/preview"
                    width="640"
                    height="480"
                    allowfullscreen
                  ></iframe>
                </div>
                <h4>Title</h4>
              </div>
              <div className="col-md-6 p-3">
                <div className="ratio ratio-16x9">
                  <iframe
                    title="YouTube video player"
                    src="https://drive.google.com/file/d/1WDRymTBxrpQqa06G0ez_eR6w2yIAwOy9/preview"
                    width="640"
                    height="480"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4>Title</h4>
                <video width="320" height="240" controls>
                  <source src="movie.mp4" type="video/mp4" />
                  <source
                    src="/upload/data/e3355f2b46ba90f13779db58fa8d5120"
                    type="video/ogg"
                  />
                  Your browser does not support the video tag.
                </video>
                <img
                  src="/upload/data/7e346a77c6945bf29c28073b8fe312c7"
                  alt="Logo OverGeek"
                  height="125"
                  className="mt-5"
                />
              </div>
              <VideoCard />
              <VideoCard />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Lecturer;
