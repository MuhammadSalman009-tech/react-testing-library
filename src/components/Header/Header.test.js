import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("should render the same text we pass as title prop", () => {
  render(<Header title="Todos" />);
  const headingElement = screen.getByText(/Todos/i);
  expect(headingElement).toBeInTheDocument();
});
