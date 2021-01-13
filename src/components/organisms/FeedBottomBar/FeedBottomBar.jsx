import FeedButton from '../../atoms/Buttons/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/Chat';



function FeedBottomBar (props){

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    
                    <FeedButton 
                            size ="medium" 
                            color = {props.color} 
                            variant = {"text"} 
                            buttonName = {props.text} 
                            handleEvent={props.handleLikeEvent} 
                            icon ={<FavoriteIcon color={props.color} 
                            fontSize ={"default"}/>}/>  
                </div>
                <div className="col-sm">
                    <FeedButton 
                            size ="medium" 
                            color = "default" 
                            variant = {"text"} 
                            buttonName = "comment" 
                            handleEvent={props.handleCommentEvent} 
                            icon ={<ChatIcon color = "action" fontSize ={"default"}/>}/>    
                </div>
                <div className="col-sm">
                    <FeedButton 
                            size ="medium" 
                            variant = {"text"} 
                            color = "default"
                            buttonName ="share" 
                            handleEvent={props.handleShareEvent} 
                            icon ={<ShareIcon color = "action" fontSize ={"default"}/>}/>    
                </div>  
            </div>
        </div>
    );
}

export default FeedBottomBar;