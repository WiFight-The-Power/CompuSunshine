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

// Path is /api/products/:productId (PUT)
// router.put("/:productId", async (req, res, next) => {
//   try {
//     const product = await OrderItem.findByPk(req.params.productId);
//     const prevQuantity = product.quantity;
//     product.update({ quantity: prevQuantity + 1 });
//     res.status(200).json(product);
//   } catch (err) {
//     next(err);
//   }       (Apollos Need this for testing purposes)
// });

// Path is /api/products/:orderInfo (POST)
router.post("/:orderInfo", async (req, res, next) => {
  try {
    // const { productId, loggedInUser, price, guestUserId } = req.body;   (Apollos Need this for testing purposes)
    const { productId, loggedInUser, price } = req.body;

    const [newOrder, createdOrder] = await Order.findOrCreate({
      where: { userId: loggedInUser },
      defaults: {
        status: "pending",
      },
    });

    // const [newOrder, created] = await Order.findOrCreate({
    //   where: { userId: loggedInUser and status: "fullfilled" },
    //   defaults: {
    //     status: "pending",
    //   },
    // });    (Apollos Need this for testing purposes) This will be useful when a customer has submited their entire order, they will need a whole new cart/order to purchase new things!

    const [new_Order_Item, createdOrderItem] = await OrderItem.findOrCreate({
      where: { orderId: newOrder.id, productId },
      defaults: {
        status: "pending",
        price,
        productId,
        orderId: newOrder.id,
        quantity: 1,
      },
    });
    console.log(Object.getPrototypeOf(new_Order_Item));
    // new_Order_Item.setOrder(newOrder.id);
    // new_Order_Item.setProduct(productId);

    // if (loggedInUser !== "") {
    //   newOrder.setUser(loggedInUser);
    // } else {
    //   newOrder.update({ guestUserId });
    // }      (Apollos Need this for testing purposes)

    const product = await Product.findByPk(productId);

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});
