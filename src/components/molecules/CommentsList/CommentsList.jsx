import PlainText from '../../atoms/PlainText/PlainText'
const CommentsList = props => (
    <div>
        {
        props.comments.slice(0).reverse().map((comment ,index) =>(
            <div>
                <hr/>
                <div className = "container">
                <PlainText description = {comment} key= {index}/>
                </div>
            </div>
            
            // console.log(comment)
        ))
        }
    </div>
    );
export default CommentsList;