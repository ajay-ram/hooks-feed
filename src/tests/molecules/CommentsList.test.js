import CommentsList from '../../components/molecules/CommentsList/CommentsList';
import { render } from '@testing-library/react';

describe ("comment list stories",()=>{
    it('renders without crashing', () => {
        const commentsList = ['comment1','comment2','comment3','comment4','comment5']
        const { container } = render(<CommentsList 
                    comments = {commentsList} 
                    />);
        expect(container.getElementsByTagName("p").length).toBe(5);

    });
});
