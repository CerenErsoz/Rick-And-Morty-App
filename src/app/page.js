'use client';

import { useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`);
      setResults(response.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <h1 className="main-title">Welcome Rick and Morty App!</h1>
      <input 
        type="text" 
        className="main-input"
        placeholder="Search for characters or episodes..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button 
        className="main-button" 
        onClick={handleSearch} 
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p className="main-error">Error: {error}</p>}
      {results.length > 0 && (
        <ul className="main-results">
          {results.map(result => (
            <li key={result.id} className="main-result-item">
              <a href={`/character/${result.id}`} className="main-result-link">
                {result.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Main;
