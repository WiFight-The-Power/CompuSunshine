const router = require("express").Router();
const {
  models: { Product, Order, OrderItem },
} = require("../db");
module.exports = router;

// Path is /api/products (GET)
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

// Path is /api/products/:productId (GET)
router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});
