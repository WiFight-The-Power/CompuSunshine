const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('orderitem', {
    // quantity: {
    //     type: Sequelize.INTEGER,
    // },        We will work off of each instance
    ordered: {
        type: Sequelize.BOOLEAN
    },
    price: {
        type: Sequelize.INTEGER
    }
})