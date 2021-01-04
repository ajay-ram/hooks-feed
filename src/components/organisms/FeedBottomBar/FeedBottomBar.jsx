import FeedButton from '../../atoms/Buttons/Button';

const FeedBottomBar = props => (
    <div class="container">
        <div class="row">
                {props.data.map(item => (
                    <div class="col-sm">
                    <FeedButton
                        buttonName ={item.buttonName}
                    />    
                    </div>
                    ))} 
        </div>
    </div>
);

export default FeedBottomBar;