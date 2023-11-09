const express = require('express');
const error = require('../middlewares/error');
const pages = require('../routes/pages');

module.exports = function(app) {
  app.use(express.json());
  app.use('/pages', pages);
  app.use(error);
}