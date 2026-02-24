const { signin, registerEmployee, sendOTP, forgetPassword, changePassword, signout } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/singin", signin)
    .post("/register-employee", registerEmployee)
    .post("/signout", signout)
    .post("/send-otp", sendOTP)
    .post("/verify-otp", signin)
    .post("/forget-password", forgetPassword)
    .post("/change-password", changePassword)

module.exports = router