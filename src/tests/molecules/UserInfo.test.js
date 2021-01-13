import UserInfo from '../../components/molecules/UserInfo/UserInfo';
import { render } from '@testing-library/react';

describe ("Userinfo stories",()=>{
    it('renders without crashing', () => {
        const { container } = render(<UserInfo 
                        username = "test user"
                        timeStamp = "xx-xx-xxxx xx-xx PM"
                    />);
        expect(container.getElementsByTagName("p").length).toBe(1);
        expect(container.getElementsByTagName("h6").length).toBe(1);
    });
});
