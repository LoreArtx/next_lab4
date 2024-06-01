import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../Input';

describe('Input', () => {
    it('renders correctly', () => {
        const { getByDisplayValue } = render(<Input id="input" value="test" onChange={() => { }} />);
        expect(getByDisplayValue('test')).toBeInTheDocument();
    });

    it('calls onChange when value changes', () => {
        const handleChange = jest.fn();
        const { getByDisplayValue } = render(<Input id="input" value="test" onChange={handleChange} />);
        fireEvent.change(getByDisplayValue('test'), { target: { value: 'new value' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
