import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

test('Лоттерейные билеты', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/Лоттерейные билеты/i);
  expect(linkElement).toBeInTheDocument();
});
