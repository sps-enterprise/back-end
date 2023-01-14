const express = require('express');

const router = express.Router();

router.use('/ongs', require('./ongs'));
router.use('/empresas/', require('./empresas'));

module.exports = router;