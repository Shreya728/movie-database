import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getMovies } from './api';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Row>
        {movies.map(movie => (
          <Col md={4} key={movie.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={movie.poster} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  {movie.year} | Rating: {movie.rating}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
