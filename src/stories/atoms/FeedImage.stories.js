import React from 'react';
import FeedImage from '../../components/atoms/FeedImage/FeedImage';

export default {
  title: 'Components/atoms/FeedImage',
  component: FeedImage
};

const FeedImageTemplate = (args) => <FeedImage {...args} />;


export const FeedImageDemo = FeedImageTemplate.bind({});
FeedImageDemo.args = {
  source : 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
};

