const express = require('express');

const router = express.Router();

router.use('/ongs', require('./ongs'));
router.use('/empresas/', require('./empresas'));
router.use('/posts/', require('./posts'));

module.exports = router;