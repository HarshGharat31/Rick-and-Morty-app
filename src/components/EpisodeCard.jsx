import React from 'react';

const EpisodeCard = ({ episode }) => {
  return (
    <div className="card mb-4 ">
      <div className="card-body">
        <h5 className="card-title">{episode.name}</h5>
        <p className="card-text">Air Date: {episode.air_date}</p>
        <p className="card-text">Episode: {episode.episode}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
