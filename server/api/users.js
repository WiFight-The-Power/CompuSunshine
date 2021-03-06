const router = require('express').Router()
const { models: { User }} = require('../db');
const {isAdmin, requireToken} = require("./middleware");
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username', 'first_name', 'last_name', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})


router.get("/:userId", requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ["id", "username"],
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});
