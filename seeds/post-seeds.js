const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'here is some content',
    user_id: 10
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
