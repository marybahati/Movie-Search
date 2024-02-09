import React from "react";

interface MovieListProps {
  movies: any[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="bg-blue-100 rounded-lg overflow-hidden shadow-md"
        >
          <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{movie.Title}</h2>
            <p className="text-gray-600">{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
