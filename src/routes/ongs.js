const express = require("express");

const router = express.Router();

const ongsController = require("../controllers/ongsController");
const ongsMiddleware = require("../middlewares/ongsMiddleware");

router.get("/", ongsController.getAll);
router.get("/:cnpj", ongsController.getONG);
router.post("/", ongsMiddleware.validateBody, ongsController.createONG);
router.delete("/:cnpj", ongsController.deleteONG);
router.put("/:cnpj", ongsMiddleware.validateBody, ongsController.updateONG);

module.exports = router;
