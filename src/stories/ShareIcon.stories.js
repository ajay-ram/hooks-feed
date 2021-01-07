import React from 'react';
import ShareIcon from '../components/atoms/Icons/ShareIcon';

export default {
  title: 'Components/ShareIcon',
  component: ShareIcon
};

const ShareIconTemplate = (args) => <ShareIcon {...args} />;

export const ShareIconPrimarySmall = ShareIconTemplate.bind({});
ShareIconPrimarySmall.args = {
  color : 'primary',
  fontSize : 'small'
};

export const ShareIconSecondarySmall = ShareIconTemplate.bind({});
ShareIconSecondarySmall.args = {
  color : "secondary",
  fontSize : 'small'
};

export const ShareIconPrimary = ShareIconTemplate.bind({});
ShareIconPrimary.args = {
  color : 'primary',
  fontSize : 'default'
};

export const ShareIconSecondary = ShareIconTemplate.bind({});
ShareIconSecondary.args = {
  color : "secondary",
  fontSize : 'default'
};

export const ShareIconPrimaryLarge = ShareIconTemplate.bind({});
ShareIconPrimaryLarge.args = {
  color : "primary",
  fontSize : 'large'
};
export const ShareIconSecondaryLarge = ShareIconTemplate.bind({});
ShareIconSecondaryLarge.args = {
  color : 'secondary',
  fontSize : 'large'
};
