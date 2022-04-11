const User = require('../models/user.model')


exports.create = (req, res) => {
    console.log("bu create fonksiyonu")
    /**
     * validation request
     */
    if (!req.body.email || !req.body.password || !req.body.name) {
      return res.status(400).send({
        message: "Required field can not be empty",
      });
    }
    /**
     * Create a user
     */
    const user = new User({
        password: req.body.password, 
        email: req.body.email,
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      isActive: req.body.isActive,
      userType: req.body.userType,
    });
    /**
     * Save user to database
     */
    user
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the User.",
        });
      });
  };


// exports.create = (req, res) => {
//     console.log(req.body)
//     // const newUser = new User({
//     //     email: req.body.email,
//     //     password: req.body.password,
//     //     name: req.body.name,
//     //     age: req.body.age,
//     //     gender: req.body.gender,
//     //     isActive: req.body.isActive,
//     //     userType: req.body.userType,
//     // })
//     // newUser.save()
//     // .then(user=>{res.json(user)})
//     // .catch(err=>{res.status(500).send({msg:err.message})
//     // })
//     // res.send(newUser)

// }

exports.allUser = (req, res) => {
    User.find()
        .then(users => { res.send(users) })
}