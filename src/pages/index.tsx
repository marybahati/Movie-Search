// pages/index.tsx

import React, { useState } from "react";
import SearchForm from "./../../components/SearchForm";
import MovieList from "./../../components/MovieList";
import { searchMovies } from "./api/search";

const Home = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [totalSearchResults, setTotalSearchResults] = useState<any[]>([]);
  let param = "";

  const handleSearch = async (query: string) => {
    if (query.trim() !== "") {
      try {
        const results = await searchMovies(query);
        setSearchResults(results || []);
        param = query;
      } catch (error) {
        console.error("Error searching movies:", error);
        setSearchResults([]);
      }
    } else {
      const results = await searchMovies("");
      setSearchResults(results || []);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Movie Search</h1>
      <div className="w-3/4">
        <SearchForm onSearch={handleSearch} />
      </div>
      {searchResults.length ? (
        <>
          <h3>
            Found {searchResults?.totalResults} search results for {param}
          </h3>
          <MovieList
            movies={
              searchResults?.Search.length > 0 ? searchResults?.Search : []
            }
          />
        </>
      ) : (
        <h2 className="text-center mt-8">
          Start search for movies in our database
        </h2>
      )}
    </div>
  );
};

export default Home;
