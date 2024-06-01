import Page, { generateMetadata } from './page';
import React from 'react';
import { render } from '@testing-library/react';

describe('generateMetadata function', () => {
  it('should generate metadata with the correct title', async () => {
    const params = { slug: 'test-slug' };
    const metadata = await generateMetadata({ params });
    expect(metadata.title).toBe('Post: test-slug');
  });
});

describe('Page component', () => {
  it('should render the slug correctly', () => {
    const params = { slug: 'test-slug' };
    const { getByText } = render(<Page params={params} />);
    expect(getByText(`Slug: ${params.slug}`)).toBeInTheDocument();
  });
});
