import React from 'react';

import TextField from '../../components/atoms/Typography/Typography';

export default {
  title: 'Components/atoms/TextField',
  component: TextField
};

const TextFieldTemplate = (args) => <TextField {...args} />;

// 'h1'
// | 'h2'
// | 'h3'
// | 'h4'
// | 'h5'
// | 'h6'
// | 'subtitle1'
// | 'subtitle2'
// | 'body1'
// | 'body2'

export const TextFieldH1 = TextFieldTemplate.bind({});
TextFieldH1.args = {
    variant :'h1',
    body : 'heading 1'
};

export const TextFieldH2 = TextFieldTemplate.bind({});
TextFieldH2.args = {
    variant :'h2',
    body : 'heading 2'
};
export const TextFieldH3 = TextFieldTemplate.bind({});
TextFieldH3.args = {
    variant :'h3',
    body : 'heading 3'
};
export const TextFieldH4 = TextFieldTemplate.bind({});
TextFieldH4.args = {
    variant :'h4',
    body : 'heading 4'
};
export const TextFieldH5 = TextFieldTemplate.bind({});
TextFieldH5.args = {
    variant :'h5',
    body : 'heading 5'
};

export const TextFieldH6 = TextFieldTemplate.bind({});
TextFieldH6.args = {
    variant :'h6',
    body : 'heading 6'
};

export const TextFieldSubtitle1 = TextFieldTemplate.bind({});
TextFieldSubtitle1.args = {
    variant :'subtitle1',
    body : 'subtitle1 subtitle1 subtitle1 subtitle1'
};

export const TextFieldSubtitle2 = TextFieldTemplate.bind({});
TextFieldSubtitle2.args = {
    variant :'subtitle2',
    body : 'subtitle2 subtitle2 subtitle2'
};

