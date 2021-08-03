import { fireEvent, render, screen } from '@testing-library/react';
import App, { areEqual } from './App';

test('are equal', () => {
  expect(areEqual('', '')).toBe(true);
  expect(areEqual('1', '1')).toBe(true);
  expect(areEqual('a', 'b')).toBe(false);
  expect(areEqual('aa', 'aa')).toBe(true);
  expect(areEqual('aa', 'bb')).toBe(false);
});

test('renders aplication', () => {
  render(<App />);
  const linkElement = screen.getByText(/Identidade de String/i);
  expect(linkElement).toBeInTheDocument();
});

test('react components', () => {
  render(<App />);

  const inputA = screen.getByTestId('input-a');
  fireEvent.change(inputA, { target:  { value: 'new value' }});
  expect(inputA).toHaveValue('new value');

  const inputB = screen.getByTestId('input-b');
  fireEvent.change(inputB, { target:  { value: 'new value' }});
  expect(inputB).toHaveValue('new value');

  const inputSubmit = screen.getByTestId('input-submit');
  fireEvent.click(inputSubmit);

  expect(screen.getByTestId('output-result')).toHaveTextContent('Igual');
});
