import { render, screen } from "@testing-library/react";
import TestOne from "./TestOne";
import userEvent from "@testing-library/user-event";
import { StaticRouter } from "react-router-dom/server";
//static router for Link

test("test for text in document", () => {
  render(<TestOne />);
  const element = screen.getByText(/Test One Component/i);
  expect(element).toBeInTheDocument();
});
// test("test for debug",()=>{
//     render(<TestOne/>)
//     screen.debug()
// })
test("test for onClick", () => {
  render(<TestOne />);
  const test_button = screen.getByRole("button");
  userEvent.click(test_button);
  expect(test_button).toHaveTextContent(/hide/i);
});
