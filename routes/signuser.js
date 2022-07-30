const express = require('express');
const router = express.Router();
const users = require('../controller/controllers');

router.post("/", users.validUser)

module.exports = router;