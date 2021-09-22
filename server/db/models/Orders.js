const Sequelize = require('sequelize');
const db = require('../db');

const Orders = db.define('orders', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING
    }
  });