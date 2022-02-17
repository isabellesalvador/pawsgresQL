//require in dependencies
const express = require('express');
const controller = require('./controller');
const router = express.Router();

//make route for get request for getPet
router.get('/getPet', controller.getPet, (req, res) => {
  return res.status(200).json(res.locals.pet);
});

// //make route for put/patch request for updatePet
// router.get('/updatePet', (req, res) => {
//   return res.status(200).json();
// });

//make a route for delete request for checkoutPet


//make route for post requests
router.post('/addPet', controller.addPet, (req, res) => {
  return res.status(200).json(res.locals.newPet)
})

module.exports = router;

