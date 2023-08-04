const express = require('express')
const recommendations = require('./recommendations.js')

const router = express.Router();

router.use('/recommendations', recommendations)


module.exports = router