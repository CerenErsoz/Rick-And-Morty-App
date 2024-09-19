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
    <div>
      <h1>Welcome Rick and Morty App!</h1>
      <input 
        type="text" 
        placeholder="Search for characters or episodes..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p>Error: {error}</p>}
      {results.length > 0 && (
        <ul>
          {results.map(result => (
            <li key={result.id}>
              <a href={`/character/${result.id}`}>{result.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Main;
