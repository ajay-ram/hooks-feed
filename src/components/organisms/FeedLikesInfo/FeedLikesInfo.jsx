import InfoText from '../../atoms/InfoText/InfoText';

const FeedLikesInfo = props => (
    <div class="container">
        <div class="row">
            
            <div class="col-6">
                <InfoText description = {props.likes} info ="likes"/>
            </div>
            <div class="col-4">
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

export default FeedLikesInfo;