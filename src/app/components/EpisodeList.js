'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        setEpisodes(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEpisodes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Rick and Morty Episodes</h1>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <a href={`/episode/${episode.id}`}>{episode.name} - {episode.air_date}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
