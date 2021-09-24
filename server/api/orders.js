const router = require("express").Router();
const {
    models: { Order, OrderItem },
} = require("../db");
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

router.get("/:orderId", async (req, res, next) => {
    try {
        const order = await Order.findByPk(req.params.orderId, {include: OrderItem});
        res.status(200).json(order);
    } catch(error) {
        next(error);
    }
});