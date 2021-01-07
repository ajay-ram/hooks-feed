import React from 'react';
import CircularImageView from '../components/atoms/CircularImageView/CircularImageView';

export default {
  title: 'Components/CircularImageView',
  component: CircularImageView
};

const CircularImageViewTemplate = (args) => <CircularImageView {...args} />;


export const CircularImageViewDemo = CircularImageViewTemplate.bind({});
CircularImageViewDemo.args = {
  source : 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
};

