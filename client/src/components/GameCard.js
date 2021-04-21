import React from "react";
import { useHistory } from "react-router-dom";

const GameCard = ({ game }) => {
  const history = useHistory();

  const toGame = (event, title) => {
    event.preventDefault();
    history.push(`/game/${title}`);
  };

  return (
    <div className="col-md-4 col-sm-1 col-lg-3 mt-3 mb-3">
      <div
        className="card"
        style={{ border: "none", background: "transparent" }}
      >
        <img
          src={game.imageUrl}
          className="card-image"
          alt={game.title}
          onClick={(event) => {
            const title = game.title;
            toGame(event, title);
          }}
        />
        <div className="card-body">
          <p
            className="movie-title"
            onClick={(event) => {
              const title = game.title;
              toGame(event, title);
            }}
          >
            {game.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
