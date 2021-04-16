import React, { useState } from "react";
import { Navbar, LecturerCard } from "../components";
import { useParams } from "react-router-dom";

const Game = () => {
  // Ini ngehit dari api server, Fetch all lecturer
  const [lecturers, setlecturers] = useState({
    name: "TenZ",
    role: "Duelist",
    team: "Sentinels",
    imageUrl:
      "https://oneesports.blob.core.windows.net/cdn-data/wp-content/uploads/2020/05/Valorant_TenZBeginnersGuide-450x253.jpg",
  });
  const { game } = useParams();

  return (
    <div className="container-fluid">
      <Navbar game={game} />
      <div className="content">
        <h1 className="fw-bold">{game}</h1>
        <h1 className="fw-bold">Lecturer List</h1>
        <div className="row">
          {/* {lecturers.map((lecturer) => ( */}
          <LecturerCard lecturer={lecturers} />
          {/* // ))} */}
        </div>
      </div>
    </div>
  );
};

export default Game;
