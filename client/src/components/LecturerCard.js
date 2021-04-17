import React from "react";
import { useHistory } from "react-router-dom";

const LecturerCard = ({ lecturer }) => {
  const history = useHistory();
  const toLecturerDetail = (event, id) => {
    event.preventDefault();
    history.push(`/lecturer/${id}`);
  };

  return (
    <div className="container">
      <div class="col">
        <div class="card"
          style={{ border: "none", background: "transparent" }}
        >
          <img
            src={lecturer.image}
            className="card-image"
            alt={lecturer.name}
            style={{ objectFit: "contain", height: "150px" }}
            onClick={(event) => {
              const id = lecturer.id;
              toLecturerDetail(event, id);
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
    </div>
  );
};

export default LecturerCard;
