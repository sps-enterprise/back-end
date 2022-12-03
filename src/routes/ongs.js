const express = require('express');

const router = express.Router();

const ongsController = require('../controllers/ongsController');
const ongsMiddleware = require('../middlewares/ongsMiddleware');

router.get('/', ongsController.getAll);
router.post('/', ongsMiddleware.validateFieldTitle, ongsController.createONG);
router.delete('/:id', ongsController.deleteONG);
router.put('/:id',
  ongsMiddleware.validateFieldTitle,
  ongsMiddleware.validateFieldStatus,
  ongsController.updateONG,
);

module.exports = router;