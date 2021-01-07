import Input from '../../atoms/Input/Input';
import FeedButton from '../../atoms/Buttons/Button';
const InputWithButton = props =>(
    <div className="row">
        <div className="col-9">
                <Input 
                className="form-control" 
                id = {props.id}
                type= {props.type}
                placeholder = {props.placeholder}
                onChange ={props.onChange}/>
        </div>
        <div className="col-1">
            <FeedButton buttonName = "Send" handleEvent={props.handleEvent}/>    
        </div>
    </div>
);
export default InputWithButton;