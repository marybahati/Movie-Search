import React, { useState } from "react";
import SearchForm from "./../../components/SearchForm";
import MovieList from "./../../components/MovieList";
import { searchMovies } from "./api/search";
import "bootstrap/dist/css/bootstrap.min.css";
import NoResultsPage from "../../components/NoResultsPage";

const Home = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const handleSearch = async (query: string) => {
    if (query.trim() !== "") {
      setLoading(true);
      try {
        const results = await searchMovies(query);
        setSearchResults(results || []);
        setShowError(results.length <= 0);
      } catch (error) {
        setShowError(true);
      }
      setLoading(false);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Movie Search</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <h3>Loading Data......</h3>}
      {searchResults.length > 0 && (
        <div className="mt-4">
          {loading && <p className="text-center">Loading...</p>}
          <MovieList movies={searchResults} />
        </div>
      )}
      {showError && <NoResultsPage />}
    </div>
  );
};

export default Home;
