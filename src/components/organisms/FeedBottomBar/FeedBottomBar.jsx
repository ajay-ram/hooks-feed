import FeedButton from '../../atoms/Buttons/Button';
import LikeIcon from '../../atoms/Icons/LikeIcon';
import Share from '../../atoms/Icons/ShareIcon';
import CommentIcon from '../../atoms/Icons/CommentIcon';


function FeedBottomBar (props){

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    
                    <FeedButton 
                            size ="default" 
                            color = {props.color} 
                            variant = {"text"} 
                            buttonName = {props.text} 
                            handleEvent={props.handleLikeEvent} 
                            icon ={<LikeIcon color={props.color} 
                            fontSize ={"default"}/>}/>  
                </div>
                <div className="col-sm">
                    <FeedButton 
                            size ="default" 
                            color = "action" 
                            variant = {"text"} 
                            buttonName = "comment" 
                            handleEvent={props.handleCommentEvent} 
                            icon ={<CommentIcon color = "action" fontSize ={"default"}/>}/>    
                </div>
                <div className="col-sm">
                    <FeedButton 
                            size ="default" 
                            variant = {"text"} 
                            color = "action"
                            buttonName ="share" 
                            handleEvent={props.handleShareEvent} 
                            icon ={<Share color = "action" fontSize ={"default"}/>}/>    
                </div>  
            </div>
        </div>
    );
}

export default FeedBottomBar;