import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import { useParams } from "react-router-dom";
import baseUrl from "../api";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLecturersAsync } from "../store/actions/lecturerAction";

const Lecturer = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const url = baseUrl + '/lecturers';
  const dispatch = useDispatch();
  const lecturers = useSelector((state) => state.lecturerReducer.lecturers);

  useEffect(() => {
    dispatch(setLecturersAsync({ url, setLoading }))
  }, []);

  return (
    <div className="container-fluid">
      <div className="content">
        <Navbar />
        <img
          src="https://oneesports.blob.core.windows.net/cdn-data/wp-content/uploads/2020/05/Valorant_TenZBeginnersGuide-450x253.jpg"
          className="card-image mb-3"
          alt={"lecturername"}
          style={{ objectFit: "contain", height: "200px" }}
        />
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Lecturer;
