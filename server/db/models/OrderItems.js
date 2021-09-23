const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('orderitem', {
  // quantity: {
  //     type: Sequelize.INTEGER,
  // },        We will work off of each instance
  status: {
    type: Sequelize.ENUM,
    values: ['pending', 'purchased'],
  },
  price: {
    type: Sequelize.INTEGER,
  },
})
