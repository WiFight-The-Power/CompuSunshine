const router = require('express').Router()
const {
  models: { Product },
} = require('../db')
module.exports = router

// Path is /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})
