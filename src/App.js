import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch movies from API
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
  setLoading(true);
  try {
    console.log("Fetching movies from API...");
    const response = await fetch('https://dummyapi.online/api/movies');
    console.log("Response status:", response.status);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log("Received data:", data);
    setMovies(data);
    setFilteredMovies(data);
  } catch (err) {
    console.error("Error fetching movies:", err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  const handleSearch = (term) => {
    if (!term.trim()) {
      setFilteredMovies(movies);
      return;
    }
    
    const filtered = movies.filter(movie => 
      movie.title.toLowerCase().includes(term.toLowerCase()) ||
      (movie.director && movie.director.toLowerCase().includes(term.toLowerCase())) ||
      (movie.genre && movie.genre.toLowerCase().includes(term.toLowerCase()))
    );
    setFilteredMovies(filtered);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    // Restore scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <SearchBar onSearch={handleSearch} />
        <MovieList 
          movies={filteredMovies} 
          onMovieClick={handleMovieClick}
          loading={loading}
          error={error}
        />
        {selectedMovie && (
          <MovieDetail movie={selectedMovie} onClose={handleCloseModal} />
        )}
      </main>
    </div>
  );
}

export default App;