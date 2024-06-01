import React from 'react';
import { render } from '@testing-library/react';
import Label from '../Label';

describe('Label', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Label htmlFor="input">Label Text</Label>);
        expect(getByText('Label Text')).toBeInTheDocument();
    });

    it('associates with input correctly', () => {
        const { getByLabelText } = render(
            <>
                <Label htmlFor="input">Label Text</Label>
                <input id="input" />
            </>
        );
        expect(getByLabelText('Label Text')).toHaveAttribute('id', 'input');
    });
});
