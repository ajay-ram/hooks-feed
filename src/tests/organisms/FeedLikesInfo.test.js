import { render } from '@testing-library/react';
import FeedLikesInfo from '../../components/organisms/FeedLikesInfo/FeedLikesInfo';
describe ("FeedLikesInfo stories",()=>{
    it('renders without crashing', () => {
        const { container } = render (<FeedLikesInfo 
                                        likes = '10'
                                        commentsCount = '10'
                                        shares = '10'/>);
        expect(container.getElementsByTagName('span').length).toBe(3);
    });
});
