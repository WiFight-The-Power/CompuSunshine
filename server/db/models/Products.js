const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios');


module.exports = db.define('product', {
    name: {
        type: Sequelize.STRING
    },
    brand: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.FLOAT
    },
    quantity: {
        type: Sequelize.INTEGER
    }
})