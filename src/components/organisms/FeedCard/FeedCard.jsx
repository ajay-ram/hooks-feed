import FeedBottomBar from '../FeedBottomBar/FeedBottomBar';
import FeedLikesInfo from '../FeedLikesInfo/FeedLikesInfo';
import FeedHeader from '../FeedHeader/FeedHeader';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '../../atoms/Typography/Typography';
import FeedImage from '../../atoms/FeedImage/FeedImage';
import React, {useState, useEffect} from 'react';
import CommentSection from '../../organisms/CommentSection/CommentSection';
import updateChildren from '../../../CustomHooks/UpdateLikesAndShares';
import addComment from '../../../CustomHooks/AddComment';
require('./styles.css');

function FeedCard (props){

    const feed = props;
    console.log(feed);
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
        let text = commentText;
        setCommentText("");
        addComment(feed,text);
        
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
    //    <Card>
    //     <Card.Body>
    //         <FeedHeader 
    //             source = {props.source} 
    //             username = {props.username}
    //             timeStamp = {props.timeStamp}/>
    //         <hr/>
    //         <TextField  variant ="body1" body = {props.description}/>
    //         <FeedImage source = {props.source}/>
    //         <hr/>
    //         <FeedLikesInfo likes = {feed.likes} commentsCount = {feed.comments.length} shares = {feed.shares}/>
    //         <hr/>
    //         {feed.isLiked ? <FeedBottomBar color = "secondary" text ="liked" handleLikeEvent = {handleLikeEvent} handleCommentEvent ={handleCommentEvent} handleShareEvent ={handleShareEvent}/>: <FeedBottomBar color = "action" text ="like" handleLikeEvent = {handleLikeEvent} handleCommentEvent ={handleCommentEvent} handleShareEvent ={handleShareEvent}/>}
                 
    //         {showComments && <CommentSection commentText = {commentText} onChange = {handleCommentTextChange} onSend = {onSend} comments ={feed.comments}/> }
    //     </Card.Body>
    //   </Card>
    <Card className='root'>
        <FeedHeader
                source = {props.source} 
                username = {props.username}
                timeStamp = {props.timeStamp}/>
        <CardContent>
            <TextField  variant ="body1" body = {props.description}/>
        </CardContent>
        <FeedImage source = {props.source}/>
        <FeedLikesInfo likes = {feed.likes} commentsCount = {feed.comments.length} shares = {feed.shares}/>
        <CardActions disableSpacing>
            {feed.isLiked ? <FeedBottomBar color = "secondary" text ="liked" handleLikeEvent = {handleLikeEvent} handleCommentEvent ={handleCommentEvent} handleShareEvent ={handleShareEvent}/>: <FeedBottomBar color = "action" text ="like" handleLikeEvent = {handleLikeEvent} handleCommentEvent ={handleCommentEvent} handleShareEvent ={handleShareEvent}/>}
      </CardActions>
      <Collapse in={showComments} timeout="auto" unmountOnExit>
        <CardContent>
            {showComments && <CommentSection commentText = {commentText} onChange = {handleCommentTextChange} onSend = {onSend} comments ={feed.comments}/> }
        </CardContent>
      </Collapse>
    </Card>
);}
export default FeedCard;
