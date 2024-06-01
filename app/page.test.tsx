import React from 'react';
import { render, screen } from '@testing-library/react';
import Page, { metadata } from './page';
import './components/__tests__/Button.test';
import './components/__tests__/Input.test';
import './components/__tests__/Label.test';
import './components/__tests__/Navbar.test';

describe('Page component', () => {
  it('renders correctly', () => {
    render(<Page />);
  });

  it('has correct metadata', () => {
    expect(metadata).toEqual({ title: 'App Router' });
  });

  it('renders title correctly', () => {
    render(<Page />);
    const titleElement = screen.getByText('App Router');
    expect(titleElement).toBeInTheDocument();
  });
});
