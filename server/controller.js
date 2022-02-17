const db = require('./models');
const { response } = require('./server');


const controller = {};

controller.getPet = (req, res, next) => {
  try {
    const query = 'SELECT * FROM pet';
    db.query(query, (err, response) => {
      console.log(response.rows);
      res.locals.pet = response.rows
      return next()
    });
  }
  catch (err) {
    return next({
      log: `controller.getPet: ERROR: ${err}`,
      message: {
        err: 'Error occurred in controller.getPet. Check server log for more detail',
      },
      status: 400,
    });
  }  
}

// controller.updatePet = (req, res, next) => {
//   const date = req.body.date;
//   const query = 'UPDATE name SET checkout_date =  ';
//   db.query(query, (err, response) => {

//   })
// }


controller.addPet = (req, res, next) => {
  try {
    const query = `
    INSERT INTO pet (name, breed, color, age, check_in, check_out) 
    VALUES (req.body.name, req.body.breed, req.body.color, req.body.age, req.body.checkIn, req.body.checkOut)`;
    db.query(query, (err, response) =>{
      console.log('POST REQUEST RESPONSE: ', response)
      res.locals.newPet = response;
      return next();
    })
  }
  catch (err) {
    return next({
      log: `controller.addPet: ERROR: ${err}`,
      message: {
        err: 'Error occurred in controller.addPet. Check server log for more detail',
      },
      status: 400,
    });
  }  
};


module.exports = controller;