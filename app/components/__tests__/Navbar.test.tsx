import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar component', () => {
    it('renders logo correctly', () => {
        const { getByText } = render(<Navbar items={['Home', 'About', 'Contact']} />);

        const logoElement = getByText('Logo');
        expect(logoElement).toBeInTheDocument();
    });

    it('renders items correctly', () => {
        const items = ['Home', 'About', 'Contact'];
        const { getByText } = render(<Navbar items={items} />);

        items.forEach((item) => {
            const itemElement = getByText(item);
            expect(itemElement).toBeInTheDocument();
        });
    });
});
