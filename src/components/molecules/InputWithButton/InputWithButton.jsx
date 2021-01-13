import Input from '../../atoms/Input/Input';
import FeedButton from '../../atoms/Buttons/Button';
import SendIcon from '@material-ui/icons/Send';
const InputWithButton = props =>(
    <div className="row">
        <div className="col-9">
                <Input 
                    className="form-control" 
                    id = {props.id}
                    type= {props.type}
                    value = {props.value}
                    placeholder = {props.placeholder}
                    onChange ={props.onChange}/>
        </div>
        <div className="col-1">
            <FeedButton 
                    buttonName = "Send" 
                    handleEvent={props.handleEvent}
                    size ="medium" 
                    color = "default" 
                    variant = {"text"} 
                    icon ={<SendIcon color = "action" fontSize ={"default"}/>} />    
        </div>
    </div>
);
export default InputWithButton;