import React, { useEffect, useState } from "react";
import { Navbar, Loading, VideoCard, Footer } from "../components";
import baseUrl from "../api";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setLecturerAsync,
  setLecturerRating,
} from "../store/actions/lecturerAction";
import swal from "@sweetalert/with-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Lecturer = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([
    {
      title: "Knowing Your Role",
      url:
        "https://drive.google.com/file/d/1WDRymTBxrpQqa06G0ez_eR6w2yIAwOy9/preview",
      isFree: "true",
    },
    {
      title: "Ban & Picks Guide",
      url:
        "https://drive.google.com/file/d/1bYAEzTIgFvBCPqL0nHSkmBhrWjL7Ybiq/preview",
      isFree: "false",
      thumbnail:
        "https://cdn.discordapp.com/attachments/832204439967236108/833892058519437312/unknown.png",
    },
  ]);
  const url = baseUrl + "/lecturers/" + id;
  const urlRating = `${baseUrl}/ratings/${id}`;
  const dispatch = useDispatch();
  const lecturer = useSelector((state) => state.lecturerReducer.lecturer);

  useEffect(() => {
    dispatch(setLecturerAsync({ url, setLoading }));
  }, [url, dispatch]);

  const onPick = () => {
    // swal("Thanks for your rating!", `You rated us ${value}/3`, "success");
    console.log(`masuk pick`);
  };

  const Icon = ({ rating, onClick }) => (
    <i
      className="bi bi-star mr-1"
      style={{ color: "gold", cursor: "pointer" }}
      onClick={() => onClick(rating)}
      data-rating={rating}
    ></i>
  );

  const rateLecturer = () => {
    if (!localStorage.access_token) {
      history.push("/login");
      toast.error(`Please log in first to rate lecturer!`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      swal({
        text: `How was your experience getting help by ${lecturer[0].name}'s courses?`,
        buttons: {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          cancel: "Close",
        },
      }).then((value) => {
        if (value) {
          swal(
            "Thanks for your rating!",
            `You rated ${lecturer[0].name} ${value}/5`,
            "success"
          );
        }
        console.log(value);
      });
    }
    // dispatch(setLecturerRating({ urlRating, setLoading }));
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
                        className="bi bi-star-fill"
                        style={{ color: "gold", marginRight: "5px" }}
                      ></i>
                      {lecturer[0].rating}
                      <span style={{ fontSize: "10px", marginRight: "5px" }}>
                        /5
                      </span>
                      <span style={{ color: "#666" }}>|</span>
                      <span
                        className="rate-icon"
                        style={{ cursor: "pointer" }}
                        onClick={rateLecturer}
                      >
                        <i
                          className="bi bi-star mr-1 ml-1"
                          style={{ margin: "0 5px" }}
                        ></i>
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
              {videos.map((video) => (
                <VideoCard
                  video={video}
                  lecturer={lecturer[0].name}
                  key={video.title}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Lecturer;
