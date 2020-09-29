import React from "react";

const Card = ({ id, name, username, email }) => {
  return (
    <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5 shadow-hover">
      <img
        src={`https://robohash.org/${username + id}?200x200`}
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
