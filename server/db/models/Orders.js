const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('orders', {
    fullfilled: {
        type: Sequelize.STRING
    }
});