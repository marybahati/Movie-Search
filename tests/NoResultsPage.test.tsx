import React from "react";
import { render } from "@testing-library/react";
import NoResultsPage from "./../components/NoResultsPage";

test("renders no results page", () => {
  const { container } = render(<NoResultsPage />);

  // Assert that the no results message is rendered
  expect(container.innerHTML).toContain("No Results Found");
  expect(container.innerHTML).toContain(
    "Sorry, we couldn't find any matching results."
  );
});
