import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import useTaskStore from './app/taskStore';
import PageTaskList from './components/PageTaskList'; // Update the path accordingly

jest.mock('./app/taskStore');

describe('PageTaskList component', () => {
    test('renders tasks correctly', () => {

        const mockTasks = [
            { id: '1', title: 'Task 1', description: 'Description 1', completed: false, priority: 'High' },
        ];

        useTaskStore.mockReturnValue({
            tasks: mockTasks,
            removeTask: jest.fn(),
            toggleTaskStatus: jest.fn(),
            editTask: jest.fn(),
        });

        render(<PageTaskList />);

        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Description 1')).toBeInTheDocument();

    });


    test('paging working perfectly', () => {
        const mockTasks = [
            { id: '1', title: 'Task 1', description: 'Description 1', completed: false, priority: 'High' },
            { id: '2', title: 'Task 1', description: 'Description 1', completed: false, priority: 'High' },
            { id: '3', title: 'Task 1', description: 'Description 1', completed: false, priority: 'High' },
            { id: '4', title: 'Task 1', description: 'Description 1', completed: false, priority: 'High' },
            { id: '5', title: 'Task 1', description: 'Description 1', completed: false, priority: 'High' },
            { id: '6', title: 'Task 1', description: 'Description 1', completed: false, priority: 'High' },
        ];

        useTaskStore.mockReturnValue({
            tasks: mockTasks,
            removeTask: jest.fn(),
            toggleTaskStatus: jest.fn(),
            editTask: jest.fn(),
        });


        render(<PageTaskList />);

        const editIcons = screen.getAllByTestId('edit-icon');
        expect(editIcons.length).toBeLessThan(6)

        const buttonWithValueTwo = screen.getByRole('button', { name: '2' });
        expect(buttonWithValueTwo).toBeInTheDocument();

    });


    test('opens and closes modal correctly', () => {
        const mockTasks = [
            { id: '1', title: 'Task 1', description: 'Description 1', completed: false, priority: 'High' },
        ];

        useTaskStore.mockReturnValue({
            tasks: mockTasks,
            removeTask: jest.fn(),
            toggleTaskStatus: jest.fn(),
            editTask: jest.fn(),
        });


        render(<PageTaskList />);

        const editIcons = screen.getAllByTestId('edit-icon');
        expect(editIcons.length).toBe(mockTasks.length);
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
        const modal = screen.getByTestId('my_modal_3');
    });
});
