import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./../components/SearchForm";

test("search form calls onSearch callback with correct query", () => {
  const onSearchMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <SearchForm onSearch={onSearchMock} />
  );

  // Type into the search input
  const searchInput = getByPlaceholderText("Enter movie name...");
  fireEvent.change(searchInput, { target: { value: "Avatar" } });

  // Click the search button
  const searchButton = getByText("Search");
  fireEvent.click(searchButton);

  // Assert that onSearch callback is called with correct query
  expect(onSearchMock).toHaveBeenCalledWith("Avatar");
});
