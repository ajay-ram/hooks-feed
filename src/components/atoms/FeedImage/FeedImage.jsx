import Image from 'react-bootstrap/Image'

const FeedImage = props => (
    <div className="d-flex justify-content-center">
    <Image 
            style={{
                position: 'relative',
                width: 480,
                height:480,
                alignContent: 'center'
            }}
            src={props.source} 
            alt="unsupported format" ></Image>
    </div>

    
);
export default FeedImage;
