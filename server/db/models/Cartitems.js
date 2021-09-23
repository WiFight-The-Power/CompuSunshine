const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('cartitem', {
    // id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    // },
    quantity: {
        type: Sequelize.INTEGER
    }
  });