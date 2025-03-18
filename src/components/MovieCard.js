import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <img
        src={movie.image || "https://via.placeholder.com/300x450?text=No+Image"}
        alt={movie.title}
        className="movie-card-img"
      />
      <div className="movie-card-content">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-info">
          <span className="movie-year">{movie.year}</span>
          <span className="movie-rating">
            {movie.rating ? `${movie.rating}/10` : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
