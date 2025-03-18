import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyapi.online/api/movies',
});

export const getMovies = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
