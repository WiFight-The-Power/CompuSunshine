const Sequelize = require('sequelize');
const db = require('../db');

const Cartitem = db.define('cartitem', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER
    }
  });