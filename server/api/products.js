const router = require("express").Router();
const {
  models: { Product, Order, OrderItem },
} = require("../db");
const {isAdmin, requireToken} = require("./middleware");
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


router.post('/', requireToken, isAdmin, async (req, res, next) => {
  try{
    const newProduct = await Product.create(req.body);
    res.send(newProduct);
  } catch (error) {
    next(error);
  }
})

router.put('/:productId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const productToUpdate = await Product.findByPk(req.params.productId);
    const updateProduct = await productToUpdate.update(req.body);
    res.send(updateProduct);
  } catch (error) {
    next(error);
  }
})

router.delete('/:productId', requireToken, isAdmin, async(req, res, next) => {
  try {
    const productToDelete = await Product.findByPk(req.params.productId);
    await productToDelete.destroy();
    res.send(productToDelete);
  } catch(error) {
    next(error);
  }
})