//this is the access point for all things database related!
const Cart = require('./models/Cart');
const Cartitem = require('./models/Cartitems');
const Order = require('./models/Orders');
const OrderItem = require('./models/OrderItems');
const Product = require('./models/Products');
const User = require('./models/User');


const db = require('./db')



//associations could go here!
/*------- Relationship Between Cart and Cart_Items -------*/ 
Cartitem.belongsTo(Cart);
Cart.hasMany(Cartitem);


/*------- Relationship Between User and Cart -------*/ 
Cart.belongsTo(User);
User.hasOne(Cart);


/*------- Relationship Between Orders and User -------*/ 
Orders.belongsTo(User);
User.hasMany(Order);


/*------- Relationship Between Products and Cart_Items -------*/ 
Cartitems.belongsTo(Product);
Product.hasMany(Cartitem);


/*------- Relationship Between Products and Order Items -------*/ 
Orderitem.belongsTo(Product);
Product.hasMany(OrderItem);

/*------- Relationship Between Orders and Order_Item-------*/
Orderitem.belongsTo(Order);
Order.hasMany(OrderItem);



module.exports = {
  db,
  models: {
    User,
  },
}
