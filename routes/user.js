const router = require("express").Router();
let User = require("../models/user.model.js");

router.route("/signup").post((req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then((res) => res.json("New User Added!"))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
