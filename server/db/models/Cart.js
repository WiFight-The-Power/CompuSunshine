const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('cart', {
    // id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    // },
    total: {
        type: Sequelize.FLOAT
    },
    num_items: {
        type: Sequelize.INTEGER
    },
  });

