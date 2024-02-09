import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="d-flex">
        <Form.Control
          type="text"
          placeholder="Enter movie name..."
          className="mr-2 flex-grow-1"
          required={true}
          style={{ height: "60px" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
      <div>
        {searchQuery.length <= 0 && (
          <h3 className="text-center text-muted mt-3">
            Please enter a movie name to start your search.
          </h3>
        )}
      </div>
    </>
  );
};

export default SearchForm;
