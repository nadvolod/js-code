import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Error from "./pages/Error";

test("renders learn react link", () => {
  render(<Error />);
  screen.debug();
  const linkElement = screen.getByTestId("back-home");
  expect(linkElement).toBeInTheDocument();
});
