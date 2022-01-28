const router = require("express").Router();
let GoogleUser = require("../models/googleuser.model.js");

router.route("/googlesignup").post((req, res) => {
  const newUser = new GoogleUser({
    name: req.body.name,
    email: req.body.email,
    uid: req.body.uid,
  });

  newUser
    .save()
    .then((res) => res.json("New User Added!"))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
