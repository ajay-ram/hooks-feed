import InputWithButton from '../../components/molecules/InputWithButton/InputWithButton';
import { render,screen,fireEvent } from '@testing-library/react';

describe ("comment list stories",()=>{
    const handleEvent = jest.fn()
    const onChange = jest.fn()
    it('input with button', () => {
        const { container } = render(<InputWithButton 
                    id = "test id"
                    type= "test type"
                    value = "some value"
                    placeholder = "enter text"
                    onChange ={onChange}
                    handleEvent = {handleEvent}
                    />);
        expect(container.getElementsByTagName("input").length).toBe(1);

        //test for input change event
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'JavaScript' },
            });
        expect(onChange).toHaveBeenCalled();
        
        //test for button click event
        fireEvent.click(screen.getByText('Send'))
        expect(handleEvent).toHaveBeenCalled();



    });
});
