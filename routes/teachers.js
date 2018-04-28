const express = require('express');
const router = express.Router();
const newTeacher = require('../views/newTeacher');

router.get('/new', (req, res, next) => {
  res.send(newTeacher);
});

module.exports = router;
