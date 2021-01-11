import React from 'react';

import Input from '../../components/atoms/Input/Input';

export default {
  title: 'Components/atoms/Input',
  component: Input
};

const InputTemplate = (args) => <Input {...args} />;


export const TextInputDemo = InputTemplate.bind({});
TextInputDemo.args = {
    className:"form-control",
    id :"testInput",
    type :"text",
    placeholder : "enter text"
};

export const NumberInputDemo = InputTemplate.bind({});
NumberInputDemo.args = {
    className:"form-control",
    id :"testInput",
    type :"number",
    placeholder : "enter numbers"
};

export const PasswordInputDemo = InputTemplate.bind({});
PasswordInputDemo.args = {
    className:"form-control",
    id :"testInput",
    type :"password",
    placeholder : "enter password"
};
