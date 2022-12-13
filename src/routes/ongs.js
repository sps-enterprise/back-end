const express = require("express");

const router = express.Router();

const ongsController = require("../controllers/ongsController");
const ongsMiddleware = require("../middlewares/ongsMiddleware");

router.get("/listOng", ongsController.getAll);
router.post(
  "/createOng",
  ongsMiddleware.validateFieldTitle,
  ongsController.createONG
);
router.delete("/deleteOng:id", ongsController.deleteONG);
router.put(
  "/updateOng/:id",
  ongsMiddleware.validateFieldTitle,
  ongsMiddleware.validateFieldStatus,
  ongsController.updateONG
);

module.exports = router;
