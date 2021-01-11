import React from 'react';

import CommentsList from '../../components/molecules/CommentsList/CommentsList';

export default {
  title: 'Components/molecules/CommentsList',
  component: CommentsList
};

const CommentsListTemplate = (args) => <CommentsList {...args} />;


export const CommentsListDemo = CommentsListTemplate.bind({});
const commentsList = ['comment1','comment2','comment3','comment4','comment5']
CommentsListDemo.args = {
  comments :commentsList
};
