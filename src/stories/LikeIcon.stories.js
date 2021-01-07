import React from 'react';
import LikeIcon from '../components/atoms/Icons/LikeIcon';

export default {
  title: 'Components/LikeIcon',
  component: LikeIcon
};

const LikeIconTemplate = (args) => <LikeIcon {...args} />;


export const LikeIconPrimarySmall = LikeIconTemplate.bind({});
LikeIconPrimarySmall.args = {
  color : 'primary',
  fontSize : 'small'
};

export const LikeIconSecondarySmall = LikeIconTemplate.bind({});
LikeIconSecondarySmall.args = {
  color : "secondary",
  fontSize : 'small'
};

export const LikeIconPrimary = LikeIconTemplate.bind({});
LikeIconPrimary.args = {
  color : 'primary',
  fontSize : 'default'
};

export const LikeIconSecondary = LikeIconTemplate.bind({});
LikeIconSecondary.args = {
  color : "secondary",
  fontSize : 'default'
};

export const LikeIconPrimaryLarge = LikeIconTemplate.bind({});
LikeIconPrimaryLarge.args = {
  color : "primary",
  fontSize : 'large'
};
export const LikeIconSecondaryLarge = LikeIconTemplate.bind({});
LikeIconSecondaryLarge.args = {
  color : 'secondary',
  fontSize : 'large'
};
