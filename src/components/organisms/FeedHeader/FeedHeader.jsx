import UserInfo from '../../molecules/UserInfo/UserInfo';
import CircularImageView from '../../atoms/CircularImageView/CircularImageView';

const FeedHeader = props => (
            <div class="row">
                <div class="col-auto mr-auto">
                    <CircularImageView source ={props.source} />
                </div>
                <div class="col">
                    <UserInfo username = {props.username} timeStamp = {props.timeStamp}/>
                </div>
            </div>
    
);
export default FeedHeader;