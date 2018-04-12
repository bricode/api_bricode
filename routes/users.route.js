var express = require('express');
var router = express.Router();
const User = require('../schemas/users.schema');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  User.find({}, (err, users) => {
    if(err) console.error(err);
    res.status(200).send({
      users
    })
  })
});

// get one user
router.get('/users/:userId', (req, res, next) => {
  let userId = req.params.userId;
  User.findById(userId, (err, user) => {
    if(err) console.error(err);
    res.status(200).send({
      user
    })
  })
})



// save a user
router.post('/users', (req, res, next) => {

  // se crea una instancia de user
  let user = new User();

  // se toman los parametros de la req
  let params = req.body;
  user.email = params.email;
  user.password = params.password;
  // estos podrian ser opcionales o pedirlos de otra forma para una mejor experiencia
  user.fname = params.fname;
  user.lname = params.lname;
  user.profileImageUrl = params.profileImageUrl;
  user.about = params.about;
  user.save((err, userStored) => {
    if(err) console.error(err);
    res.status(200).send({
      user: userStored
    })
  })
})

// delate one user
router.delete('/users/:userId', (req, res, next) => {
  let userId = req.params.userId;
  User.findByIdAndRemove(userId, (err, userDeleted) => {
    if(err) console.error(err);
    res.status(200).send({
      userDeleted
    })
  })
})


// update a user
router.put('/users/:userId', (req, res, next) => {
  let userId = req.params.userId;
  let body = req.body;
  User.findByIdAndUpdate(userId, body, (err, userUpdated) => {
    if(err) console.error(err);
    res.status(200).send({
      user: userUpdated
    })
  })
})

module.exports = router;
