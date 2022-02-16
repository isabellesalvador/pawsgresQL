const db = require('./models');
const { response } = require('./server');


const controller = {};

controller.getPet = (req, res, next) => {
  res.locals.test = 'hello world.'
  return (next);
}


module.exports = controller;