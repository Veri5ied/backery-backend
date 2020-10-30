const express = require("express");
const productCtrl = require("../controllers/product");
const router = express.Router();

router.post("/", productCtrl.createProduct);
router.delete("/:id", productCtrl.deleteProduct);
router.put("/:id", productCtrl.updateProduct);
router.get("/", productCtrl.findProducts);
router.get("/:id", productCtrl.findAProduct);

module.exports = router;
