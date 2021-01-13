import { render } from '@testing-library/react';
import FeedBottomBar from '../../components/organisms/FeedBottomBar/FeedBottomBar'

describe ("FeedBottomBar stories",()=>{
    const handleLikeEvent = jest.fn()
    const handleCommentEvent = jest.fn()
    const handleShareEvent = jest.fn()
    it('renders without crashing', () => {
        const { container } = render(<FeedBottomBar 
                                        color = "action" 
                                        text ="like" 
                                        handleLikeEvent = {handleLikeEvent} 
                                        handleCommentEvent ={handleCommentEvent} 
                                        handleShareEvent ={handleShareEvent}
                    />);
        expect(container.getElementsByTagName('button').length).toBe(3);
        
    });
});
