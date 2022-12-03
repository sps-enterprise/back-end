const express = require('express');

const router = express.Router();

router.use('/ongs', require('./ongs'));

module.exports = router;