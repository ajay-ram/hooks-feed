import { render } from '@testing-library/react';
import FeedCard from '../../components/organisms/FeedCard/FeedCard';

describe ("FeedCard stories",()=>{
    it('renders without crashing', () => {
        const {container} = render(<FeedCard 
                                comments = {["hi hello", "qw", "hi"]}
                                description= "description"
                                id= "1"
                                isLiked= {false}
                                likes= {35}
                                shares= {27}
                                source= "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                timeStamp= "20-dec-2020 17:00 PM"
                                username= "test user"
                                />);
        expect(container.getElementsByTagName('button').length).toBe(3);
        expect(container.getElementsByTagName('img').length).toBe(2);
    });
});
