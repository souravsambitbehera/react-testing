// DatePickerComponent.test.jsx

import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import SecondTesting from "./SecondTesting"



test('should open date picker, select a date, and verify the date change', async () => {
  const mockOnChange = jest.fn();

  const { getByTestId, getByLabelText } = render(
    <SecondTesting onChange={mockOnChange} />
  );

  const dateInput = screen.getByPlaceholderText('MM/DD/YYYY');

  fireEvent.click(dateInput);

  await waitFor(() => getByLabelText('Choose date'));

  const chooseDateButton = getByLabelText('Choose date');
  fireEvent.click(chooseDateButton);
  // expect(screen.getByText("January 2024")).toBeInTheDocument()
  // expect(screen.getByText("28")).toBeInTheDocument()
  // const value  = screen.getByText("28")
  // fireEvent.click(value)
  





});
