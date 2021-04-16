import React from "react";
import { Navbar } from "../components";
import { useParams } from "react-router-dom";

const Lecturer = () => {
  const { name } = useParams();
  // Fetch get one lecturer dari API utk detail per-lecturer
  // tampilin semua data lecturer disini

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
