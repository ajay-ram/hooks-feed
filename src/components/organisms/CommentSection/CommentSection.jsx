import InputWithButton from '../../molecules/InputWithButton/InputWithButton';
import CommentsList from '../../molecules/CommentsList/CommentsList';
import Card from 'react-bootstrap/Card';

    const CommentSection = props => (
    <div className = "container">
        <Card>
            <Card.Body>
                <InputWithButton 
                            id = "comment_input" 
                            type= "text" 
                            value = {props.commentText}
                            placeholder = "enter text here"
                            onChange = {props.onChange}
                            handleEvent={props.onSend}/>
                <CommentsList comments = {props.comments}/>
            </Card.Body>
        </Card>
        
    </div>
    
    
);

export default CommentSection;