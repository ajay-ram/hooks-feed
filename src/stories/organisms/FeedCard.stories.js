import React from 'react';

import FeedCard from '../../components/organisms/FeedCard/FeedCard';

export default {
  title: 'Components/organisms/FeedCard',
  component: FeedCard
};

const FeedCardTemplate = (args) => <FeedCard {...args} />;

const commentsList = ['comment1','comment2','comment3','comment4','comment5']
export const FeedCardDemo = FeedCardTemplate.bind({});
FeedCardDemo.args = {
  source : "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
  username : "test user",
  timeStamp : "21-dec-2020 11:00 PM",
  description : "test description",
  likes : 10,
  commentsCount : commentsList.length,
  comments : commentsList,
  shares : 10
};
