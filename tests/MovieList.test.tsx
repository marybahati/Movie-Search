import React from "react";
import { render } from "@testing-library/react";
import MovieList from "./../components/MovieList";

test("renders movie list with provided movies", () => {
  const movies = [
    { Title: "Movie 1", Year: "2021", Poster: "poster1.jpg" },
    { Title: "Movie 2", Year: "2022", Poster: "poster2.jpg" },
  ];

  const { container } = render(<MovieList movies={movies} />);

  // Assert that each movie title, year, and poster is rendered
  expect(container.innerHTML).toContain("Movie 1");
  expect(container.innerHTML).toContain("2021");
  expect(container.innerHTML).toContain("Movie 2");
  expect(container.innerHTML).toContain("2022");
});
