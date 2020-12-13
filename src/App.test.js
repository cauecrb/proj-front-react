import { render, screen } from '@testing-library/react';
import App from './App';
import Slider from './components/slider';

test('renders learn react link', () => {
  render(<Slider />);
  //render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
