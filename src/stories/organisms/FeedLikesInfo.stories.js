import React from 'react';
 import 'bootstrap/dist/css/bootstrap.css';
import FeedLikesInfo from '../../components/organisms/FeedLikesInfo/FeedLikesInfo';

export default {
  title: 'Components/organisms/FeedLikesInfo',
  component: FeedLikesInfo
};

const FeedLikesInfoTemplate = (args) => <FeedLikesInfo {...args} />;


export const FeedLikesInfoDemo = FeedLikesInfoTemplate.bind({});
FeedLikesInfoDemo.args = {
  likes : 10,
  comments : 10,
  shares : 10
};
