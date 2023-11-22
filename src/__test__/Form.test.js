import { render, screen } from "@testing-library/react";
import Form from "../components/Form";

test("Initial state of Form component", () => {
  render(<Form />);

  // Get form elements by their labels
  const usernameField = screen.getByLabelText("Username");
  const countryField = screen.getByLabelText("Country");
  const checkboxField = screen.getByText(/accept checkbox/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  expect(usernameField.value).toBe("");
  expect(countryField.value).toBe(undefined);
  expect(checkboxField).toBeInTheDocument(); 
  expect(checkboxField).not.toBeChecked(); 
  expect(submitButton).toBeEnabled(); 

  const errorElement = screen.queryByText(/all fields are required/i);
  expect(errorElement).not.toBeInTheDocument();
});
