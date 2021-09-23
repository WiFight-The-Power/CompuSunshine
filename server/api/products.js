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

// Path is /api/products/:orderInfo (POST)
router.post("/:orderInfo", async (req, res, next) => {
  try {
    // console.log(req.body);
    const { productId, loggedInUser, price } = req.body;

    const [newOrder, created] = await Order.findOrCreate({
      where: { userId: loggedInUser },
      defaults: {
        status: "pending",
      },
    });

    const new_Order_Item = await OrderItem.create({
      status: "pending",
      price,
      productId,
      orderId: newOrder.id,
    });
    console.log(Object.getPrototypeOf(new_Order_Item));
    // new_Order_Item.setOrder(newOrder.id);
    // new_Order_Item.setProduct(productId);

    if (loggedInUser !== "") {
      newOrder.setUser(loggedInUser);
    }

    const product = await Product.findByPk(productId);

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});
