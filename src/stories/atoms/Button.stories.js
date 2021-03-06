import React from 'react';

import FeedButton from '../../components/atoms/Buttons/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default {
  title: 'Components/atoms/FeedButton',
  component: FeedButton
};

const ButtonTemplate = (args) => <FeedButton {...args} />;


export const FeedButtonTextVariant = ButtonTemplate.bind({});
FeedButtonTextVariant.args = {
  color : "primary",
  size : "large",
  variant : "text",
  buttonName : "like",
  icon : <FavoriteIcon color="primary"/>
};

export const FeedButtonContainedVariant = ButtonTemplate.bind({});
FeedButtonContainedVariant.args = {
  color : "primary",
  variant : "contained",
  buttonName : "like",
  icon : <FavoriteIcon color="action"/>
};
export const FeedButtonOutlinedVariant = ButtonTemplate.bind({});
FeedButtonOutlinedVariant.args = {
  color : "primary",
  variant : "outlined",
  buttonName : "like",
  icon : <FavoriteIcon color="action"/>
};

export const FeedButtonSecondaryContained = ButtonTemplate.bind({});
FeedButtonSecondaryContained.args = {
  color : "secondary",
  size : "large",
  variant : "contained",
  buttonName : "like",
  icon : <FavoriteIcon color="disabled"/>
};
