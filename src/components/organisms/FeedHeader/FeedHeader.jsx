import UserInfo from '../../molecules/UserInfo/UserInfo';
import CircularImageView from '../../atoms/CircularImageView/CircularImageView';

const FeedHeader = props => (
            <div className="row">
                <div className="col-auto mr-auto">
                    <CircularImageView source ={props.source} />
                </div>
                <div className="col">
                    <UserInfo username = {props.username} timeStamp = {props.timeStamp}/>
                </div>
            </div>
    
);
export default FeedHeader;