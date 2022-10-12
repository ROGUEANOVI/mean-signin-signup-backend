const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");
const jwt = require("jsonwebtoken");

router.post("/signup", userCtrl.signup);
router.post("/signin", userCtrl.signin);
router.get("/tasks", userCtrl.getTasks);
router.get("/private-tasks", verifiyToken, userCtrl.getPrivateTasks);

module.exports = router; 

function verifiyToken(req, res, next) {
  if(!req.headers.authorization){
    return res.status(401).send("Unauthorize Request 1");
  }

  const token = req.headers.authorization.split(" ")[1];
  if(token === null){
    return res.status(401).send("Unauthorize Request");
  }

  const pyload = jwt.verify(token, "secretkey");
  console.log(pyload);
  req.userId = pyload._id;
  next();
}
