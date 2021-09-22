//this is the access point for all things database related!
const Cart = require('./models/Cart');
const CartItem = require('./models/Cartitems');
const Order = require('./models/Orders');
const OrderItem = require('./models/OrderItems');
const Product = require('./models/Products');
const User = require('./models/User');


const db = require('./db')



//associations could go here!
/*------- Relationship Between Cart and Cart_Items -------*/ 
CartItem.belongsTo(Cart);
Cart.hasMany(CartItem);


/*------- Relationship Between User and Cart -------*/ 
Cart.belongsTo(User);
User.hasOne(Cart);


/*------- Relationship Between Orders and User -------*/ 
Order.belongsTo(User);
User.hasMany(Order);


/*------- Relationship Between Products and Cart_Items -------*/ 
CartItem.belongsTo(Product);
Product.hasMany(CartItem);


/*------- Relationship Between Products and Order Items -------*/ 
OrderItem.belongsTo(Product);
Product.hasMany(OrderItem);

/*------- Relationship Between Orders and Order_Item-------*/
OrderItem.belongsTo(Order);
Order.hasMany(OrderItem);



module.exports = {
  db,
  models: {
    User, 
    Product, 
    OrderItem, 
    Order, 
    Cart, 
    CartItem
  },
}
