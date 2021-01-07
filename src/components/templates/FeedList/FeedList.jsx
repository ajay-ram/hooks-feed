import FeedCard from '../../organisms/FeedCard/FeedCard';

const FeedList = props => (
    <div className = "container">
        {
            props.data.map((item, index) =>(
                <div>
                <FeedCard 
                    id = {item.id}
                    source = {item.source} 
                    username = {item.username}
                    timeStamp = {item.timeStamp}
                    description = {item.description}  
                    likes = {item.likes}
                    isLiked = {item.isLiked}
                    comments = {item.comments}
                    shares = {item.shares}
                    key = {index}
                />
                <br/>
                </div>
        ))
        }
    </div>
        
);
export default FeedList;