import TextField from '../../atoms/Typography/Typography';

function FeedLikesInfo (props) {
    return(
        <div className="row">
            
            <div className="col-7">
                <TextField variant = "" body = {props.likes + ' likes'}/>
            </div>
            <div className="col-4 text-right">
                <TextField variant = "" body = {props.commentsCount +' comments'}/>
                &nbsp;&nbsp;
                <TextField variant = "" body = {props.shares + ' shares'}/>
            </div>
            {/* <div class="col-2">
                <InfoText description = {props.shares} info ="shares"/>
            </div> */}
        </div>
    );
}

export default FeedLikesInfo;