const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('orderitem', {
    quantity: {
        type: Sequelize.INTEGER,
    }
})