import { render } from '@testing-library/react';
import FeedHeader from '../../components/organisms/FeedHeader/FeedHeader';
describe ("FeedHeader stories",()=>{
    it('renders without crashing', () => {

        const { container } = render(<FeedHeader 
                                        source = 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
                                        username = 'test user'
                                        timeStamp = '21-dec-2020 12:00PM'
                                        />);
        expect(container.getElementsByTagName('img').length).toBe(1);
        expect(container.getElementsByTagName("p").length).toBe(1);
        expect(container.getElementsByTagName("h6").length).toBe(1);
    });
});
