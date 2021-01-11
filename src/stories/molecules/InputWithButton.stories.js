import InputWithButton from '../../components/molecules/InputWithButton/InputWithButton';

export default {
  title: 'Components/molecules/InputWithButton',
  component: InputWithButton
};

const InputWithButtonTemplate = (args) => <InputWithButton {...args} />;

export const InputWithButtonDemo = InputWithButtonTemplate.bind({});
InputWithButtonDemo.args = {
    id : "test",
    type : "text",
    placeholder : "enter text here"

};
