const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./router');
const { Console } = require('console'); //i didn't put this here?
const PORT = 3000;

//parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files
app.use(express.static(path.resolve(__dirname, '../client')));

//define route hanlders
app.use('/', apiRouter);

//catch-all route handler for requests to unknown route => necessary?
app.use('*', (req, res) => {
  res.status(404).send('Sorry you seem lost.  Please make your way back to our homepage!')
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;