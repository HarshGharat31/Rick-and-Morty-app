import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="card mb-4 border rounded shadow ">
      <div className="row g-0">
        <div className="col-md-4 text-center">
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded-circle"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">Species: {character.species}</p>
            <p className="card-text">Status: {character.status}</p>
            <p className="card-text">
              <a href={`/character/${character.id}`} className="btn btn-primary">
                View Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
