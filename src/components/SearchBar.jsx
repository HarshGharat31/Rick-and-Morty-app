import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
    <form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">

      <input
        type="text"
        className="form-control me-2"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ maxWidth: '500px' }}
      />
      <button className="btn btn-dark" type="submit">
        Search
      </button>
    </form>
    </div>
  );
};

export default SearchBar;
