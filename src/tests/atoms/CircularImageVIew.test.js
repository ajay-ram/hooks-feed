import { render,screen } from '@testing-library/react';
import CircularImageView from '../../components/atoms/CircularImageView/CircularImageView';
it('render image', () => {
  render(<CircularImageView source = "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />);
  expect(screen.getByAltText("unsupported format")).toBeInTheDocument();

});