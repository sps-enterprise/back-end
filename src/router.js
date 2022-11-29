const express = require('express');

const router = express.Router();

const ongsController = require('./controllers/ongsController');
const ongsMiddleware = require('./middlewares/ongsMiddleware');

router.get('/ongs', ongsController.getAll);
router.post('/ongs', ongsMiddleware.validateFieldTitle, ongsController.createONG);
router.delete('/ongs/:id', ongsController.deleteONG);
router.put('/ongs/:id',
  ongsMiddleware.validateFieldTitle,
  ongsMiddleware.validateFieldStatus,
  ongsController.updateONG,
);

module.exports = router;