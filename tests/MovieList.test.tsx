// import React from 'react';
// import { render } from '@testing-library/react';
// import MovieList from '../components/MovieList';
// import test from 'node:test';

// const mockMovies = [
//   { Title: 'Movie 1', Year: '2022', Poster: 'http://example.com/movie1.jpg' },
//   { Title: 'Movie 2', Year: '2023', Poster: 'http://example.com/movie2.jpg' },
// ];

// test('MovieList renders without errors', () => {
//   const { getByText, getByAltText } = render(<MovieList movies={mockMovies} />);
  
//   expect(getByText('Movie 1')).toBeInTheDocument();
//   expect(getByText('2022')).toBeInTheDocument();
//   expect(getByAltText('Movie 1')).toHaveAttribute('src', 'http://example.com/movie1.jpg');
  
//   expect(getByText('Movie 2')).toBeInTheDocument();
//   expect(getByText('2023')).toBeInTheDocument();
//   expect(getByAltText('Movie 2')).toHaveAttribute('src', 'http://example.com/movie2.jpg');
// });