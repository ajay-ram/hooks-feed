import InputWithButton from '../../molecules/InputWithButton/InputWithButton';
import CommentsList from '../../molecules/CommentsList/CommentsList';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
    const CommentSection = props => (
    <div className = "container">
        <Card>
            <CardContent>
                <InputWithButton 
                            id = "comment_input" 
                            type= "text" 
                            value = {props.commentText}
                            placeholder = "enter text here"
                            onChange = {props.onChange}
                            handleEvent={props.onSend}/>
                <CommentsList comments = {props.comments}/>
            </CardContent>
        </Card>
        
    </div>
    
    
);

export default CommentSection;