import express from 'express';

const Router = express.Router();

Router.route('/movies')
  .get(function (req, res) {
    res.send('request to GET all movies');
  })
  .post(function (req, res) {
    res.send('request to CREATE new movie');
  });

export default Router;