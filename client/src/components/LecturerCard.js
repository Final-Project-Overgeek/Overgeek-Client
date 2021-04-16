import React from "react";
import { useHistory } from "react-router-dom";

const LecturerCard = ({ lecturer }) => {
  const history = useHistory();
  const toLecturerDetail = (event, name) => {
    event.preventDefault();
    history.push(`/lecturer/${name}`);
  };

  return (
    <div className="col-md-4 col-sm-1 col-lg-3 mt-3 mb-3">
      <div
        className="card"
        style={{ border: "none", background: "transparent" }}
      >
        <img
          src={lecturer.imageUrl}
          className="card-image"
          alt={lecturer.name}
          style={{ objectFit: "contain", height: "150px" }}
          onClick={(event) => {
            const name = lecturer.name;
            toLecturerDetail(event, name);
          }}
        />
        <div className="card-body">
          <span
            className="movie-title"
            onClick={(event) => {
              const name = lecturer.name;
              toLecturerDetail(event, name);
            }}
          >
            {lecturer.name}
          </span>
          <span>Team : {lecturer.team}</span>
          <p>Role : {lecturer.role}</p>
        </div>
      </div>
    </div>
  );
};

export default LecturerCard;
