import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App.js';

test('Clicking on buttons navigates to the correct routes', () => {
    render(
        <App />
    );

    const addTaskButton = screen.getByText('Add Task');
    fireEvent.click(addTaskButton);

    expect(window.location.pathname).toBe('/addtask');
    const FluxPlanner = screen.getByText('FluxPlanner');
    fireEvent.click(FluxPlanner);

    expect(window.location.pathname).toBe('/');


});
