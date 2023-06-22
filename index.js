import express from 'express';
import router from './config/router.js';

const app = express();

app.use(router);

// change this port variable to be an environment variable
app.listen(3000, function () {
  console.log('App is listening on port 3000');
});