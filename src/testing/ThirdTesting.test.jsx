import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThirdTesting from "./ThirdTesting";


  test("should display options", async () => {
    render(<ThirdTesting />);

    const inputField = screen.getByTestId('format-select').querySelector('.MuiSelect-nativeInput');
    console.log(inputField.value)
    expect(inputField.value).toBe("")

    
    fireEvent.change(inputField, { target: { value: 'A4' } });

  // Get the updated value of the input field
  const inputValue = inputField.value;

  // Assert that the value is updated as expected
  expect(inputValue).toBe('A4');
  });

