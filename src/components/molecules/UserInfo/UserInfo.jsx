import StrongText from '../../atoms/Strongtext/StrongText';
import Timestamp from '../../atoms/Timestamp/Timestamp';

const UserInfo = props => (
    <div>
        <div className="row">
            <StrongText username ={props.username} />
        </div>
        <div className="row">
            <Timestamp timeStamp ={props.timeStamp}/>
        </div>
    </div>
);
export default UserInfo;