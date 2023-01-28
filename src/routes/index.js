const express = require('express');

const router = express.Router();

router.use('/ongs', require('./ongs'));

router.use('/empresas/', require('./empresas'));
router.use('/produto/', require('./produto'));
router.use('/admin', require('./admin'));

module.exports = router;
