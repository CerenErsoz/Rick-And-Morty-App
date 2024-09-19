'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState(null); 

  const fetchEpisodes = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
      setEpisodes(response.data.results);
      setPageInfo(response.data.info);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEpisodes(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (pageInfo?.next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageInfo?.prev) {
      setCurrentPage(currentPage - 1);
    }
  };

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

      {/* Sayfalama butonları */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={!pageInfo?.prev}>Previous</button>
        <span>Page {currentPage} of {pageInfo?.pages}</span>
        <button onClick={handleNextPage} disabled={!pageInfo?.next}>Next</button>
      </div>
    </div>
  );
};

export default EpisodeList;
