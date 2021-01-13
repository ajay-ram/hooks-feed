import Typography from '../../components/atoms/Typography/Typography';
import { render,screen } from '@testing-library/react';

it('renders without crashing', () => {
  render(<Typography body="Ajay" variant = "body1" />);
  expect(screen.getByText("Ajay")).toBeInTheDocument();

});