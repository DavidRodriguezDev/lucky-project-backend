const express = require("express");

const userRouter = express.Router();

const {register, login, logout} = require("../controllers/users.controllers");

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.post("/logout")

module.exports = userRouter;