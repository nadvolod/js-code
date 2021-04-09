import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('should start with enabled button and unchecked checkbox', () => {
  render(<App />);
  //
  const button = screen.getByRole('button', {name: 'Change to blue'})
  // https://github.com/testing-library/jest-dom
  // expect API: https://jestjs.io/docs/expect
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox')
  // asserting that the checkbox is starting unchecked
  expect(checkbox).not.toBeChecked();
})

test('should disable and enable checkbox on click', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: 'Change to blue'})
  // https://github.com/testing-library/jest-dom
  // expect API: https://jestjs.io/docs/expect
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  // asserting that the checkbox is starting unchecked
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).toBeEnabled();
})


