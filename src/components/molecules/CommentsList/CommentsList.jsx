import Typography from '../../atoms/Typography/Typography';
const CommentsList = props => (
    <div>
        {
        props.comments.slice(0).reverse().map((comment ,index) =>(
            <div>
                <div className = "container">
                <Typography variant = "body1" body = {comment} key={index}/>
                </div>
                <hr/>
            </div>            
        ))
        }
    </div>
    );
export default CommentsList;