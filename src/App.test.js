import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders piling.js link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/piling.js/i);
  expect(linkElement).toBeInTheDocument();
});
