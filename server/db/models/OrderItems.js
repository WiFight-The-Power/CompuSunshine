const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("orderitem", {
  quantity: {
    type: Sequelize.INTEGER,
  },
  status: {
    type: Sequelize.ENUM,
    values: ["pending", "purchased"],
  },
  price: {
    type: Sequelize.INTEGER,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
});
