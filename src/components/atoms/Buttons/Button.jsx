// import Button from 'react-bootstrap/Button'
import Button from '@material-ui/core/Button';

const FeedButton = props => (
    < Button size = {props.size} color={props.color} variant={props.variant} onClick = {props.handleEvent} startIcon = {props.icon}>{props.buttonName}</Button>
);

export default FeedButton;

