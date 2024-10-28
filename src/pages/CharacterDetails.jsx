import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="container my-4 border-dark bg-white rounded shadow">
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded-circle"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-8">
          <h1>{character.name}</h1>
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
          <p>Gender: {character.gender}</p>
          <p>Location: {character.location.name}</p>
        </div>
      </div>
      <div className="text-center">
      <button className="btn btn-secondary mb-3  " onClick={() => navigate(-1)}>
        Back
      </button>
     
      </div>
     
    </div>
  );
};

export default CharacterDetails;
