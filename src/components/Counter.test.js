import { render, screen, act } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

test("test for Counter Component", () => {
  render(<Counter />);

  const initialValue = screen.getByText("The count value is 0");
  expect(initialValue).toBeInTheDocument();

  const increaseButton = screen.getByText("Increment");
  act(() => {
    userEvent.click(increaseButton);
  });
  const increasedValue = screen.getByText("The count value is 1");
  expect(increasedValue).toBeInTheDocument();

  const decreaseButton = screen.getByText("Decrement");
  act(() => {
    userEvent.click(decreaseButton);
  });
  const decreasedValue = screen.getByText("The count value is 0");
  expect(decreasedValue).toBeInTheDocument();
});
