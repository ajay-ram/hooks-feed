import Input from '../../components/atoms/Input/Input';
import { render,screen,fireEvent } from '@testing-library/react';

describe ("input stories",()=>{
    it('renders input without crashing', () => {
        render(<Input 
                    placeholder = "enter text" 
                    />);
        expect(screen.getByPlaceholderText("enter text")).toBeInTheDocument();

    });
    it('fires onChange event', () => {
        const onChange = jest.fn();
        render(<Input 
                    id = "test input"
                    type= "text"
                    value = "ajay"
                    placeholder = "enter text"
                    onChange ={onChange} />);
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'JavaScript' },
            });
        expect(onChange).toHaveBeenCalled();


    });
});
