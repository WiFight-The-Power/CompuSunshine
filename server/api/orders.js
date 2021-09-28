const router = require("express").Router();
const {
  models: { Order, OrderItem },
} = require("../db");
const { requireToken } = require("./middleware");
module.exports = router;

// Path is /api/orders (GET)
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
});

// Path is /api/orders/:userId (GET)
router.get("/:userId", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: "pending",
      },
      include: [{ model: OrderItem }],
    });
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
});

// Path is /api/orders/:userId/pastOrders (GET)
router.get("/:userId/pastOrders", async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.params.userId,
        status: "fullfilled",
      },
      include: [{ model: OrderItem }],
    });
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
});

// Path is /api/orders/:orderId (GET)
router.put("/:orderId", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId, { include: OrderItem });
    await order.update(req.body);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
});
