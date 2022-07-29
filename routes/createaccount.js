const express = require('express');
const router = express.Router();
const users = require('../controller/controllers');


router.post("/", users.addUser)


module.exports = router;