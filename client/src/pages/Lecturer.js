import React, { useEffect, useState } from "react";
import { Navbar, Loading } from "../components";
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
          <div
            class="mb-3 p-2"
            style={{
              textAlign: "left",
              width: "25cm",
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "black",
            }}
          >
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  className="card-img-top"
                  src={lecturer[0].image}
                  alt={lecturer[0].name}
                  id="img-detail"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h2 class="card-title" style={{ color: "#fff" }}>
                    <i class="text-muted h5">Name: </i>
                    {lecturer[0].name}
                  </h2>
                  <p class="card-text h4" style={{ color: "#fff" }}>
                    <i class="text-muted h5">Profile: </i>
                    {lecturer[0].profile}
                  </p>
                  <p class="card-text h4" style={{ color: "#fff" }}>
                    <i class="text-muted h5">Game: </i>
                    {lecturer[0].game}
                  </p>
                  <p class="card-text h4" style={{ color: "#fff" }}>
                    <i class="text-muted h5">Role: </i>
                    {lecturer[0].role}
                  </p>
                  <p class="card-text h4" style={{ color: "#fff" }}>
                    <i class="text-muted h5">Team: </i>
                    {lecturer[0].team}
                  </p>
                  <p class="card-text h4" style={{ color: "#fff" }}>
                    <i class="text-muted h5">Language: </i>
                    {lecturer[0].language}
                  </p>
                  <p
                    className="button-signup"
                    style={{
                      color: "#fff",
                      padding: "10px 20px",
                      textDecoration: "none",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    See Courses
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lecturer;
