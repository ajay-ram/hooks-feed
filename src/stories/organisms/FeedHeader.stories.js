import React from 'react';

import FeedHeader from '../../components/organisms/FeedHeader/FeedHeader';

export default {
  title: 'Components/organisms/FeedHeader',
  component: FeedHeader
};

const FeedHeaderTemplate = (args) => <FeedHeader {...args} />;


export const FeedHeaderDemo = FeedHeaderTemplate.bind({});
FeedHeaderDemo.args = {
  source:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
  username:'test user',
  timeStamp:'21-dec-2020 12:00PM'
};
