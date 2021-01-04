import FeedCard from '../../templates/FeedCard/FeedCard';

const FeedList = props => (
    <div className = "container">
        {
            props.data.map(item =>(
                <div>
                <FeedCard 
                    source = {item.source} 
                    username = {item.username}
                    timeStamp = {item.timeStamp}
                    description = {item.description}  
                    likes = {item.likes}
                    comments = {item.comments.length}
                    shares = {item.shares}
                />
                <br/>
                </div>
        ))
        }
    </div>
        
);
export default FeedList;