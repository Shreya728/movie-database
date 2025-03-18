import React from 'react';

const MovieDetail = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        
        <div className="modal-body">
          <div className="modal-image">
            <img
              src={movie.image || "https://via.placeholder.com/300x450?text=No+Image"}
              alt={movie.title}
            />
          </div>
          
          <div className="modal-details">
            <h2 className="modal-movie-title">{movie.title}</h2>
            
            <div className="modal-badges">
              <span className="modal-badge badge-year">{movie.year}</span>
              <span className="modal-badge badge-rating">
                {movie.rating ? `${movie.rating}/10` : 'N/A'}
              </span>
            </div>
            
            {movie.director && (
              <p className="modal-detail-row">
                <span className="detail-label">Director:</span>
                <span className="detail-value">{movie.director}</span>
              </p>
            )}
            
            {movie.genre && (
              <p className="modal-detail-row">
                <span className="detail-label">Genre:</span>
                <span className="detail-value">{movie.genre}</span>
              </p>
            )}
            
            {movie.description && (
              <div className="plot-summary">
                <h3>Plot Summary</h3>
                <p className="plot-text">{movie.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;