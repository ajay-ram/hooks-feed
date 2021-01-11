import React from 'react';

import FeedBottomBar from '../../components/organisms/FeedBottomBar/FeedBottomBar';

export default {
  title: 'Components/organisms/FeedBottomBar',
  component: FeedBottomBar
};

const FeedBottomBarTemplate = (args) => <FeedBottomBar {...args} />;


export const FeedBottomBarDemo = FeedBottomBarTemplate.bind({});
FeedBottomBarDemo.args = {
  color: "action",
  buttonName :"some text"
};
