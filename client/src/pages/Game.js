import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseUrl from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setLecturersAsync } from "../store/actions/lecturerAction";
import Loading from "../components/Loading";
import { Navbar, LecturerCard } from "../components";

const Game = () => {
  const lecturers = useSelector((state) => state.lecturerReducer.lecturers);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { game } = useParams();
  const url = baseUrl + "/lecturers?game=" + game;

  useEffect(() => {
    dispatch(setLecturersAsync({ url, setLoading }));
  }, [dispatch, url]);

  return (
    <div className="container-fluid">
      <Navbar game={game} />
      <div className="content">
        <h1 className="fw-bold">{game}</h1>
        <h1 className="fw-bold">Lecturer List</h1>
        {loading ? (
          <Loading />
        ) : (
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
            {lecturers.map((lecturer) => (
              <LecturerCard lecturer={lecturer} key={lecturer.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
