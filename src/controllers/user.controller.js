const express = require("express");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userCtrl = {};


userCtrl.signup = async (req, res) => {
  const {email, password} = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  console.log(passwordHash);
  const newUser = new User({email, passwordHash});
  await newUser.save();
  const token = jwt.sign({_id: newUser._id}, "secretkey");
  res.status(200).json({token});
}

userCtrl.signin = async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  console.log(typeof user);
  if(!user) return res.status(401).send("The email doesn't exists");
  const compare = await bcrypt.compare(password, user.passwordHash);
  if(compare === false) return res.status(401).send("Wrong password"); 

  const token = jwt.sign({_id: user._id}, "secretkey");
  return res.status(200).json({token});
}

userCtrl.getTasks = async (req, res) => {
  res.json(
    [
      {
        "_id": 1,
        "name": "Task one",
        "description": "Do the dishes",
        "date": "2022-10-10T21:46:17.180+00:00"
      },
      {
        "_id": 2,
        "name": "Task two",
        "description": "Walk the dog",
        "date": "2022-10-10T21:46:17.180+00:00"
      },
      {
        "_id": 3,
        "name": "Wather the plants",
        "description": "loren ipsum",
        "date": "2022-10-10T21:46:17.180+00:00"
      }
    ]
  );
}

userCtrl.getPrivateTasks = async(req, res) => {
  res.json(
    [
      {
        "_id": 1,
        "name": "Task one private",
        "description": "Do the laundry",
        "date": "2022-10-10T21:46:17.180+00:00"
      },
      {
        "_id": 2,
        "name": "Task two private",
        "description": "Tidy the room",
        "date": "2022-10-10T21:46:17.180+00:00"
      },
      {
        "_id": 3,
        "name": "Task Take out rhe garbage",
        "description": "loren ipsum",
        "date": "2022-10-10T21:46:17.180+00:00"
      }
    ]
  );
}

module.exports = userCtrl;
