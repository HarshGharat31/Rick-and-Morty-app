import React, { useState, useEffect } from 'react';
import EpisodeCard from '../components/EpisodeCard';
import SearchBar from '../components/SearchBar';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data.results);
        setFilteredEpisodes(data.results);
      });
  }, []);

  const handleSearch = (query) => {
    const searchQuery = query.toLowerCase();
    const filtered = episodes.filter((episode) =>
      episode.name.toLowerCase().includes(searchQuery)
    );
    setFilteredEpisodes(filtered);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Episodes</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        {filteredEpisodes.map((episode) => (
          <div key={episode.id} className="col-md-6 col-lg-4">
            <EpisodeCard episode={episode} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
