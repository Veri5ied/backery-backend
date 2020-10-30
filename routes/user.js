const express = require("express");
const userCtrl = require("../controllers/user");
const router = express.Router();

router.post("/login", userCtrl.SignIn);
router.post("/signup", userCtrl.SignUp);

module.exports = router;
