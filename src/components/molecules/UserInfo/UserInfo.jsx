import Typography from '../../atoms/Typography/Typography';
import Box from '@material-ui/core/Box';


const UserInfo = props => (
    <div>
        <div className="row">
            <Typography variant = "subtitle1" body =  {<Box fontWeight="fontWeightBold" m={1}>{props.username} created new post</Box> } />
        </div>
        <div className="row">
            &nbsp; <Typography variant = "body1" body =  {props.timeStamp} />
        </div>
    </div>
);
export default UserInfo;