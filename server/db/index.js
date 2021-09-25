//this is the access point for all things database related!
const Order = require('./models/Orders');
const OrderItem = require('./models/OrderItems');
const Product = require('./models/Products');
const User = require('./models/User');


const db = require('./db')


//associations could go here!

/*------- Relationship Between Orders and User -------*/ 
Order.belongsTo(User);
User.hasMany(Order);


// /*------- Relationship Between Products and Order Items -------*/ 
// OrderItem.belongsTo(Product);
// Product.hasMany(OrderItem);

// /*------- Relationship Between Orders and Order_Item-------*/
// OrderItem.belongsTo(Order);
// Order.hasMany(OrderItem);


Product.belongsToMany(Order, {through: OrderItem});
Order.belongsToMany(Product, {through: OrderItem});
Order.hasMany(OrderItem);




module.exports = {
  db,
  models: {
    User, 
    Product, 
    OrderItem, 
    Order, 
  },
}
