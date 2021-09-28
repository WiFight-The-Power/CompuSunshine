const faker = require("faker");

function userGenerator(num) {
  const users = [];

  for (let i = 0; i < num; i++) {
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const isAdmin = faker.datatype.boolean();

    users.push({
      username,
      password,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      address_1: faker.address.streetAddress(),
      address_2: faker.address.secondaryAddress(),
      city: faker.address.cityName(),
      state: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode(),
      isAdmin,
    });

    console.log("username:", username);
    console.log("password:", password);
    console.log("isAdmin:", isAdmin);
  }

  return users;
}

const users = userGenerator(250);

module.exports = users;
