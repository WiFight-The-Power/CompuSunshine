const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('order', {
  status: {
    type: Sequelize.ENUM,
    values: ['pending', 'delivered'],
  },
})
