import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick, loading, error }) => {
  if (loading) {
    return (
      <div className="state-message loading-message">
        <div className="loading-spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-message">
        <div className="error-message">Error: {error}</div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="state-message">
        <p>No movies found. Try a different search.</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={onMovieClick}
        />
      ))}
    </div>
  );
};

export default MovieList;