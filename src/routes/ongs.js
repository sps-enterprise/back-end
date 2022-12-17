const express = require('express');

const router = express.Router();

const ongsController = require('../controllers/ongsController');
const ongsMiddleware = require('../middlewares/ongsMiddleware');

router.get('/', ongsController.getAll);
router.get('/:cnpj', ongsController.getONG);
router.post('/', ongsMiddleware.validateFieldTitle, ongsController.createONG);
router.delete('/:cnpj', ongsController.deleteONG);
router.put('/:cnpj',
  ongsMiddleware.validateFieldTitle,
  ongsMiddleware.validateFieldStatus,
  ongsController.updateONG,
);

module.exports = router;