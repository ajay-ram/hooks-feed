import { render,screen } from '@testing-library/react';
import FeedImage from '../../components/atoms/FeedImage/FeedImage';
it('render image', () => {
  render(<FeedImage source = "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />);
  expect(screen.getByAltText("unsupported format")).toBeInTheDocument();

});