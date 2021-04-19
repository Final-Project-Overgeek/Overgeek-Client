import React, { useEffect, useState } from "react";
import { Navbar, Loading, VideoCard } from "../components";
import baseUrl from "../api";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLecturerAsync } from "../store/actions/lecturerAction";

const Lecturer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const url = baseUrl + "/lecturers/" + id;
  const dispatch = useDispatch();
  const lecturer = useSelector((state) => state.lecturerReducer.lecturer);

  useEffect(() => {
    dispatch(setLecturerAsync({ url, setLoading }));
  }, [url, dispatch]);

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
                    <p
                      className="movie-desc detail"
                      style={{ textAlign: "justify" }}
                    >
                      {lecturer[0].game}
                    </p>
                    <p
                      className="detail-info fw-bold"
                      style={{ color: "#f15a24" }}
                    >
                      Language:
                    </p>
                    <p
                      className="movie-desc detail"
                      style={{ textAlign: "justify" }}
                    >
                      {lecturer[0].language}
                    </p>
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
                    <p
                      className="movie-desc detail"
                      style={{ textAlign: "justify" }}
                    >
                      {lecturer[0].team}
                    </p>
                    <p
                      className="detail-info fw-bold"
                      style={{ color: "#f15a24" }}
                    >
                      Role:
                    </p>
                    <p
                      className="movie-desc detail"
                      style={{ textAlign: "justify" }}
                    >
                      {lecturer[0].role}
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
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lecturer;
