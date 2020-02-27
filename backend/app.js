const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');

const app = express();

mongoose.connect("mongodb+srv://mean-tut-2:TWd3D6z44JHyoRkF@cluster0-qctvd.gcp.mongodb.net/mean-angular-tutorial?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to database');
  })
  .catch(() => {
    console.log('Connection failed');
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
               );
  res.setHeader('Access-Control-Allow-Methods',
                'GET, POST, PATCH, PUT, DELETE, OPTIONS');

  next();
});

app.use('/api/posts', postsRoutes);

module.exports = app;
