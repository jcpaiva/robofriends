import React from "react";
import "./Card.css";

const Card = ({ id, name, username, email }) => {
  return (
    <div className="tc grad dib br3 ma2 grow bw2 shadow-5 shadow-hover">
      <img
        src={`https://robohash.org/${username + id}?150x150`}
        alt="Robo Img"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
