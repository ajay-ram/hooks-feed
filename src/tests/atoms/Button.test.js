import FeedButton from '../../components/atoms/Buttons/Button';
import { render,screen,fireEvent } from '@testing-library/react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

describe ("button stories",()=>{
    it('renders without crashing', () => {
        render(<FeedButton 
                    buttonName="click me" 
                    />);
        expect(screen.getByText("click me")).toBeInTheDocument();

    });
    it('fires onclick event', () => {
        const onClick = jest.fn();
        render(<FeedButton 
                    buttonName="click me" 
                    size = "large" 
                    color= "primary" 
                    variant = "outlined"  
                    handleEvent = {onClick} 
                    startIcon =  {<AccountCircleIcon/>} />);
        fireEvent.click(screen.getByText('click me'))
        expect(onClick).toHaveBeenCalled();


    });
});
