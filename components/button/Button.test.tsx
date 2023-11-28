import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Button} from './Button';

describe('Button', () => {
    test('renders the button with correct text', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
    });
    test('calls onClick prop when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByRole('button', { name: 'Click Me' }));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test('is disabled when disabled prop is set', () => {
        render(<Button disabled>Click Me</Button>);
        expect(screen.getByRole('button', { name: 'Click Me' })).toBeDisabled();
    });
    test('has correct class when variant is outlined', () => {
        render(<Button variant="outlined">Click Me</Button>);
        expect(screen.getByRole('button', { name: 'Click Me' })).toHaveClass('outlined');
    });
    test('has correct class when color is primary', () => {
        render(<Button color="primary">Click Me</Button>);
        expect(screen.getByRole('button', { name: 'Click Me' })).toHaveClass('primary');
    });
    test('does not call onClick when disabled', () => {
        const handleClick = jest.fn();
        render(<Button disabled onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByRole('button', { name: 'Click Me' }));
        expect(handleClick).not.toHaveBeenCalled();
    });
    test('can receive a className prop', () => {
        const className = 'test-class';
        render(<Button className={className}>Click Me</Button>);
        expect(screen.getByRole('button', { name: 'Click Me' })).toHaveClass(`button medium primary contained ${className}`);
    });
});