import CommentSection from '../../components/organisms/CommentSection/CommentSection';
import { render,fireEvent, screen } from '@testing-library/react';

describe ("commentsection stories",()=>{
    const handleEvent = jest.fn()
    const onChange = jest.fn()
    it('renders without crashing', () => {
        const commentsList = ['comment1','comment2','comment3','comment4','comment5']
        const { container } = render(<CommentSection 
                    comments = {commentsList}
                    onChange = {onChange}
                    handleEvent={handleEvent}
                    value = "dummy"
                    />);
        expect(container.getElementsByTagName("p").length).toBe(5);
        expect(container.getElementsByTagName("input").length).toBe(1);
        expect(container.getElementsByTagName("button").length).toBe(1);
        //test for input change event
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'JavaScript' },
            });
        expect(onChange).toHaveBeenCalled();

    });
});
