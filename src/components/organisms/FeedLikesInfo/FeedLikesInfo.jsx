import InfoText from '../../atoms/InfoText/InfoText';

function FeedLikesInfo (props) {
    return(
    <div className="container">
        <div className="row">
            
            <div className="col-6">
                <InfoText description = {props.likes} info ="likes"/>
            </div>
            <div className="col-4">
                <InfoText description = {props.comments} info ="comments"/>
                &nbsp;&nbsp;
                <InfoText description = {props.shares} info ="shares"/>
            </div>
            {/* <div class="col-2">
                <InfoText description = {props.shares} info ="shares"/>
            </div> */}
        </div>
    </div>
    );
}

export default FeedLikesInfo;