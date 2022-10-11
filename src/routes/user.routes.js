const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller");
const jwt = require("jsonwebtoken");

router.post("/signup", user.signup);
router.post("/signin", user.signin);
router.get("/tasks", user.getTasks);
router.get("/tasks-privates", verifiyToken, user.getTasksPrivates);

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
