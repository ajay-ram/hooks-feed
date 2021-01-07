import FeedBottomBar from '../FeedBottomBar/FeedBottomBar';
import FeedLikesInfo from '../FeedLikesInfo/FeedLikesInfo';
import FeedHeader from '../FeedHeader/FeedHeader';
import Card from 'react-bootstrap/Card';
import PlainText from '../../atoms/PlainText/PlainText';
import FeedImage from '../../atoms/FeedImage/FeedImage';
import React, {useState, useEffect} from 'react';
import CommentSection from '../../organisms/CommentSection/CommentSection';
import updateChildren from '../../../CustomHooks/UpdateLikesAndShares';
import addComment from '../../../CustomHooks/AddComment';
function FeedCard (props){
    const feed = props;
    const [showComments, setShowComments] = useState(false);
    const [commentText, setCommentText] = useState("");
    const handleCommentTextChange = ({ target }) => {
        setCommentText(target.value);
    };

    useEffect(() => {
        setShowComments(false);
    }, [ ]);

    const handleLikeEvent =() => {
        updateChildren(feed,'like');
    }
    const handleShareEvent =() => {
        updateChildren(feed,'share');
    }

    function onSend(){
        addComment(feed,commentText);
    };

    function handleCommentEvent(){
        if (showComments) {
        setShowComments(false);
        } 
        else {
        setShowComments(true);
        }
    }
    return (
       <Card>
        <Card.Body>
            <FeedHeader 
                source = {props.source} 
                username = {props.username}
                timeStamp = {props.timeStamp}/>
            <hr/>
            <PlainText description = {props.description}/>
            <FeedImage source = {props.source}/>
            <hr/>
            <FeedLikesInfo likes = {feed.likes} comments = {feed.comments.length} shares = {feed.shares}/>
            <hr/>
            {feed.isLiked ? <FeedBottomBar color = "secondary" text ="liked" handleLikeEvent = {handleLikeEvent} handleCommentEvent ={handleCommentEvent} handleShareEvent ={handleShareEvent}/>: <FeedBottomBar color = "primary" text ="like" handleLikeEvent = {handleLikeEvent} handleCommentEvent ={handleCommentEvent} handleShareEvent ={handleShareEvent}/>}
                 
            {showComments && <CommentSection commentText = {commentText} onChange = {handleCommentTextChange} onSend = {onSend} comments ={feed.comments}/> }
        </Card.Body>
      </Card>
);}
export default FeedCard;
