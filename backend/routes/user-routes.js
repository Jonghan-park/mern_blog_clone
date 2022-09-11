const express = require("express");
const { getAllUser, register } = require("../controllers/user-controller");

const router = express.Router();

router.get("/", getAllUser);
router.post("/register", register);

module.exports = router;
