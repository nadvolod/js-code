import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Button from './components/function-component/Button';

test('should start in red state', () => {
  render(<Button />);
  //find an element with a role of button and text
  const button = screen.getByRole('button', {name: 'Change to blue'})
  //expect the background color to be red
  expect(button).toHaveStyle({backgroundColor: 'red'})
});

test('should change color to blue on click', () => {
  render(<Button />);
  //find an element with a role of button and text
  const button = screen.getByRole('button', {name: 'Change to blue'})
  //click button
  fireEvent.click(button);
  //expect the background color to be blue after click
  expect(button).toHaveStyle({backgroundColor: 'blue'})
  //check that text is changed to 'Changed to red'
  expect(button.textContent).toBe('Change to red')
})

test('should be gray if disabled and blue if enabled', () => {
  // ARRANGE
  // render the button component
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button', {name: 'Change to blue'})

  //disable the button and assert it's gray
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'gray'})
  // enable button and assert it's red
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'red'})
})

