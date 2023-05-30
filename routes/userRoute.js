const express = require("express");
const userRoute = express.Router();
const { createUser, loginUser } = require("../controller/usercontroller");

userRoute.post("/signup", createUser );

userRoute.post("/login", loginUser);
module.exports = userRoute;