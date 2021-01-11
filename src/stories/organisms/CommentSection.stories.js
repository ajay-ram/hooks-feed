import React from 'react';

import CommentSection from '../../components/organisms/CommentSection/CommentSection';

export default {
  title: 'Components/organisms/CommentSection',
  component: CommentSection
};

const CommentSectionTemplate = (args) => <CommentSection {...args} />;


export const CommentSectionDemo = CommentSectionTemplate.bind({});
const commentsList = ['comment1','comment2','comment3','comment4','comment5']
CommentSectionDemo.args = {
  comments :commentsList,
  value :"some text"
};
