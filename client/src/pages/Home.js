import React, { useState } from "react";
import { Navbar, GameCard, CommunityCarousel, Footer } from "../components";

const Home = () => {
  const [games] = useState([
    {
      title: "League of Legends: Wild Rift",
      imageUrl:
        "https://taimienphi.vn/tmp/cf/aut/hinh-nen-lien-minh-toc-chien-wild-rift-1242x2208.jpg",
    },
    {
      title: "PlayerUnknown's Battlegrounds Mobile",
      imageUrl:
        "https://i.pinimg.com/originals/1e/b0/07/1eb0075317387869e6e2c7cf29a88fcb.jpg",
    },
    {
      title: "Free Fire Battlegrounds",
      imageUrl:
        "https://letsdownloadgame.com/wp-content/uploads/2018/04/poster.jpg",
    },
    {
      title: "Mobile Legends",
      imageUrl: "https://wallpapercave.com/wp/wp5008160.jpg",
    },
  ]);

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="content">
        <h1 className="fw-bold">
          Welcome To OverG<span style={{ color: "#f15a24" }}>ee</span>k
        </h1>
        <h4 className="mt-3 mb-5">Best Way To Improve Your Skill</h4>
        <div className="community">
          <h5 className="my-3">Join Our Community</h5>
          <CommunityCarousel />
        </div>
        <h5 style={{ fontWeight: "600", margin: "30px 0" }}>
          CHOOSE YOUR GAME
        </h5>

        <div className="row">
          {games.map((game) => (
            <GameCard game={game} key={game.title} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
