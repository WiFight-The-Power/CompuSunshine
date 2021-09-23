'use strict'

const {
  db,
  models: { User, Product },
} = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({
      first_name: 'cody',
      last_name: 'smith',
      username: 'cody',
      email: 'codys@gmail.com',
      phone: '201544093',
      address_1: '205 park lane',
      address_2: 'apt 200',
      city: 'Detroit',
      state: 'Michigan',
      zipcode: '09493',
      password: '123',
    }),
    User.create({
      first_name: 'Mark',
      last_name: 'Johnson',
      username: 'mark',
      email: 'mark@gmail.com',
      phone: '201544593',
      address_1: '204 park lane',
      address_2: 'apt 100',
      city: 'Detroit',
      state: 'Michigan',
      zipcode: '09493',
      password: '123',
    }),
  ])

  const products = await Promise.all([
    Product.create({
      name: 'MSI 3060 GPU',
      brand: 'MSI',
      category: 'Graphics Cards',
      price: 599,
      quantity: 5,
    }),
    Product.create({
      name: 'MSI 3080 GPU',
      brand: 'MSI',
      category: 'Graphics Cards',
      price: 999,
      quantity: 6,
    }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    products: {
      msi3060: products[0],
      msi3080: products[1],
    },
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
