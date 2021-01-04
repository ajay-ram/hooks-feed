import FeedBottomBar from '../../organisms/FeedBottomBar/FeedBottomBar';
import FeedLikesInfo from '../../organisms/FeedLikesInfo/FeedLikesInfo';
import FeedHeader from '../../organisms/FeedHeader/FeedHeader';
import Card from 'react-bootstrap/Card';
import PlainText from '../../atoms/PlainText/PlainText';
import FeedImage from '../../atoms/FeedImage/FeedImage';

const data =[
     {buttonName : "like"},
     {buttonName : "comment"},
     {buttonName : "share"},

    ]

const FeedCard = props =>(
   <div className="container">
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
            <FeedLikesInfo likes = {props.likes} comments = {props.comments} shares = {props.shares}/>
            <hr/>
            <FeedBottomBar data ={data}/>     
        </Card.Body>
      </Card>
        
    </div>  
);
export default FeedCard;
