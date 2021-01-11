import UserInfo from '../../components/molecules/UserInfo/UserInfo';

export default {
  title: 'Components/molecules/UserInfo',
  component: UserInfo
};

const UserInfoTemplate = (args) => <UserInfo {...args} />;

export const UserInfoDemo = UserInfoTemplate.bind({});
UserInfoDemo.args = {
    username:"test user",
    timeStamp:"01-jan-2021 12:00 PM"

};

