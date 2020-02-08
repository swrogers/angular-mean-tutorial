const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'fakejkljekl',
      title: 'First server side post',
      content: 'This comes from the server'
    },
    {
      id: 'rjeifmnieaonfeio',
      title: 'Second server side post',
      content: 'More content from the server.'
    }
  ];

  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });

});

module.exports = app;
