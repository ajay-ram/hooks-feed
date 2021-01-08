import TextField from '../../atoms/Typography/Typography';

function FeedLikesInfo (props) {
    return(
    <div className="container">
        <div className="row">
            
            <div className="col-6">
                <TextField variant = "" body = {props.likes + 'likes'}/>
            </div>
            <div className="col-4">
                <TextField variant = "" body = {props.comments +'comments'}/>
                &nbsp;&nbsp;
                <TextField variant = "" body = {props.shares + 'shares'}/>
            </div>
            {/* <div class="col-2">
                <InfoText description = {props.shares} info ="shares"/>
            </div> */}
        </div>
    </div>
    );
}

export default FeedLikesInfo;