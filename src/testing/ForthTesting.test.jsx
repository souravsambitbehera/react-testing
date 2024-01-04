import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ForthTesting from './ForthTesting'; // Replace with the correct path

describe('<ForthTesting /> component:', () => {
  it('should call onDrag and onDragStop when dragged', () => {
    const { getByTestId } = render(<ForthTesting />);
    const draggableElement = getByTestId('test-element');

    // Drag start
    fireEvent.mouseDown(draggableElement, { clientX: 0, clientY: 0 });
    fireEvent.mouseMove(draggableElement, { clientX: 50, clientY: 50 });

    // Ensure onDrag is called
    expect(screen.getByTestId('test-element').textContent).toBe('sourav');

    // Drag stop
    fireEvent.mouseUp(draggableElement, { clientX: 50, clientY: 50 });

    // Ensure onDragStop is called
    expect(screen.getByTestId('test-element').textContent).toBe('sourav');
  });
});
