import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      });
  }, []);

  const handleSearch = (query) => {
    const searchQuery = query.toLowerCase();
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchQuery)
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Characters</h1>
      <SearchBar onSearch={handleSearch} />

      {/* If no characters found, show a message */}
      {filteredCharacters.length === 0 ? (
        <div className="text-center my-4">
          <h4>No characters found</h4>
        </div>
      ) : (
        <div className="row">
          {filteredCharacters.map((character) => (
            <div key={character.id} className="col-md-6 col-lg-4">
              <CharacterCard character={character} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
