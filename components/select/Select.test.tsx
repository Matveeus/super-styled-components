import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Select} from './Select';

const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
];

const handleChange = (event) => {
    console.log(event.target.value);
};

describe('Select Component', () => {

    test('renders Select component', () => {
        render(<Select label="Test Select" options={options} onChange={handleChange} />);
        expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    test('calls onChange when an option is selected', () => {
        const handleChange = jest.fn();
        render(<Select label="Test Select" options={options} onChange={handleChange} />);
        fireEvent.change(screen.getByRole('combobox'), { target: { value: '2' } });
        expect(handleChange).toHaveBeenCalledWith('2');
    });

    test('is disabled when disabled prop is set', () => {
        const handleSelectChange = jest.fn();
        render(<Select label="Test Select" options={options} onChange={handleSelectChange} disabled />);
        const select = screen.getByRole('combobox');
        expect(select).toBeDisabled();
    });

    test('shows error style when error prop is true', () => {
        const { container } = render(<Select label="Test Select" options={options} onChange={handleChange} error />);
        const select = container.querySelector('select');
        expect(select).toHaveClass('error');
    });

    test('displays the correct option when value is set', () => {
        const selectId = 'test-select';
        render(<Select label="Test Select" id={selectId} options={options} onChange={handleChange} value="2" />);
        const select = screen.getByLabelText('Test Select');
        expect(select.value).toBe('2');
    });

    test('displays helper text when error = true', () => {
        const helperText = "This is a helper text";
        render(<Select label="Test Select" options={options} helperText={helperText} onChange={handleChange} error />);
        expect(screen.getByText(helperText)).toBeInTheDocument();
    });

    test('renders all options correctly', () => {
        render(<Select label="Test Select" options={options} onChange={handleChange} />);
        options.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    test('applies fullWidth when fullWidth prop is true', () => {
        const { container } = render(<Select label="Test Select" options={options} onChange={handleChange} fullWidth />);
        const select = container.querySelector('select');
        expect(select).toHaveClass('fullWidth');
    });

    test('applies error style when error prop is true', () => {
        const { container } = render(<Select label="Test Select" options={options} onChange={handleChange} error />);
        const select = container.querySelector('select');
        expect(select).toHaveClass('error');
    });

    test('renders correctly for different sizes', () => {
        const sizes = ['small', 'medium', 'large'];
        sizes.forEach(size => {
            const { container } = render(<Select label="Test Select" options={options} onChange={handleChange} size={size} />);
            const select = container.querySelector('select');
            expect(select).toHaveClass(size);
        });
    });


});