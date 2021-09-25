const router = require("express").Router();
const {
  models: { Product, Order, OrderItem },
} = require("../db");
module.exports = router;

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

// Path is /api/cart/ (GET)
router.get("/:userId", async (req, res, next) => {
  /* Grab all the items that belong to user */
  try {
    const loggedInUser = req.params.userId;

    const user_Order = await Order.findOne({
      where: {
        userId: loggedInUser,
        status: "pending",
      },
    });

    const products =
      user_Order &&
      (await OrderItem.findAll({
        where: {
          orderId: user_Order.id,
        },
      }));

    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

// Path is /api/products/:orderInfo (POST)
router.post("/", async (req, res, next) => {
  try {
    // const { productId, loggedInUser, price, guestUserId } = req.body;   (Apollos Need this for testing purposes)
    const { productId, loggedInUser, price, productObj } = req.body;

    const [order, createdOrder] = await Order.findOrCreate({
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
    console.log(
      productObj.imageUrl,
      "jdskfjadklsfjaldkjfa __________________-"
    );
    const [orderItem, createdOrderItem] = await OrderItem.findOrCreate({
      where: { orderId: order.id, productId },
      defaults: {
        status: "pending",
        price,
        productId,
        imageUrl: productObj.imageUrl,
        orderId: order.id,
        quantity: 1,
      },
    });

    const prevQuantity = orderItem.quantity;
    !createdOrderItem && orderItem.update({ quantity: prevQuantity + 1 });

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
