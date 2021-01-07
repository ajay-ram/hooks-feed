import React from 'react';
import CommentIcon from '../components/atoms/Icons/CommentIcon';

export default {
  title: 'Components/CommentIcon',
  component: CommentIcon
};

const CommentIconTemplate = (args) => <CommentIcon {...args} />;

export const CommentIconPrimarySmall = CommentIconTemplate.bind({});
CommentIconPrimarySmall.args = {
  color : 'primary',
  fontSize : 'small'
};

export const CommentIconSecondarySmall = CommentIconTemplate.bind({});
CommentIconSecondarySmall.args = {
  color : "secondary",
  fontSize : 'small'
};
export const CommentIconPrimary = CommentIconTemplate.bind({});
CommentIconPrimary.args = {
  color : 'primary',
  fontSize : 'default'
};

export const CommentIconSecondary = CommentIconTemplate.bind({});
CommentIconSecondary.args = {
  color : "secondary",
  fontSize : 'default'
};

export const CommentIconPrimaryLarge = CommentIconTemplate.bind({});
CommentIconPrimaryLarge.args = {
  color : "primary",
  fontSize : 'large'
};
export const CommentIconSecondaryLarge = CommentIconTemplate.bind({});
CommentIconSecondaryLarge.args = {
  color : 'secondary',
  fontSize : 'large'
};
